import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Create admin client for API routes
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export async function GET() {
  try {
    console.log('API Route - Starting request');
    
    // Test connection first
    const { data: testData, error: testError } = await supabaseAdmin
      .from('profiles')
      .select('count')
      .limit(1)
      .single();
    
    if (testError) {
      console.error('Connection test error:', testError);
      return NextResponse.json(
        { error: `Connection error: ${testError.message}` },
        { status: 500 }
      );
    }

    // Fetch users from the profiles table
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json(
        { error: `Database query error: ${error.message}` },
        { status: 500 }
      );
    }
    
    console.log('Profiles fetched successfully. Count:', data?.length || 0);
    
    return NextResponse.json({ 
      success: true, 
      teamMembers: data || [],
      count: data?.length || 0
    });
  } catch (error: any) {
    console.error('Unexpected error in GET /api/admin/users:', error);
    return NextResponse.json(
      { error: `Server error: ${error.message || 'An unexpected error occurred'}` },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received request body:', body);

    const { email, password, full_name, role, avatar_url } = body;

    if (!email || !password || !full_name || !role) {
      const missingFields = {
        email: !email,
        password: !password,
        full_name: !full_name,
        role: !role
      };
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields',
          details: {
            message: 'Please provide all required fields',
            missingFields
          }
        },
        { status: 400 }
      );
    }

    console.log('Creating user with:', { email, full_name, role });

    // First check if user exists in auth
    const { data: existingAuthUser, error: listUsersError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (listUsersError) {
      console.error('Error checking existing users:', listUsersError);
      return NextResponse.json(
        { 
          success: false,
          error: 'Failed to check existing users',
          details: {
            message: listUsersError.message
          }
        },
        { status: 500 }
      );
    }

    const existingUser = existingAuthUser.users.find(user => user.email === email);
    if (existingUser) {
      console.log('User already exists in auth with email:', email);
      return NextResponse.json(
        { 
          success: false,
          error: 'User already exists',
          details: {
            message: 'A user with this email already exists'
          }
        },
        { status: 400 }
      );
    }

    // Check for existing profile with the same email
    const { data: existingProfile, error: profileCheckError } = await supabaseAdmin
      .from('profiles')
      .select('id, email')
      .eq('email', email)
      .single();

    if (profileCheckError && profileCheckError.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error('Error checking existing profile:', profileCheckError);
      return NextResponse.json(
        { 
          success: false,
          error: 'Failed to check existing profile',
          details: {
            message: profileCheckError.message
          }
        },
        { status: 500 }
      );
    }

    if (existingProfile) {
      console.log('Found existing profile, cleaning up:', existingProfile);
      // Delete the existing profile
      const { error: deleteProfileError } = await supabaseAdmin
        .from('profiles')
        .delete()
        .eq('id', existingProfile.id);

      if (deleteProfileError) {
        console.error('Error deleting existing profile:', deleteProfileError);
        return NextResponse.json(
          { 
            success: false,
            error: 'Failed to clean up existing profile',
            details: {
              message: deleteProfileError.message
            }
          },
          { status: 500 }
        );
      }
    }

    // Create the user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name,
        role
      }
    });

    if (authError) {
      console.error('Auth Error:', authError);
      return NextResponse.json(
        { 
          success: false,
          error: 'Authentication error',
          details: {
            message: authError.message,
            code: authError.status,
            details: authError
          }
        },
        { status: 400 }
      );
    }

    if (!authData.user) {
      console.error('No user data returned from auth creation');
      return NextResponse.json(
        { 
          success: false,
          error: 'User creation failed',
          details: {
            message: 'No user data returned from authentication service'
          }
        },
        { status: 400 }
      );
    }

    console.log('User created:', authData.user.id);

    // Create the profile
    const profileData = {
      id: authData.user.id,
      email,
      full_name,
      role,
      avatar_url: avatar_url || null,
      name: full_name
    };

    console.log('Creating profile with data:', profileData);

    // Delete any existing profile with this ID first (just to be safe)
    await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', authData.user.id);

    // Create new profile
    const { data: profileResult, error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert([profileData]);

    console.log('Profile creation response:', { profileResult, profileError });

    if (profileError) {
      console.error('Profile Error:', profileError);
      console.error('Profile Error Details:', {
        message: profileError.message,
        code: profileError.code,
        details: profileError.details,
        hint: profileError.hint
      });
      
      // Try to delete the auth user if profile creation fails
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      if (deleteError) {
        console.error('Error deleting auth user after profile creation failed:', deleteError);
      }
      
      return NextResponse.json(
        { 
          success: false,
          error: 'Profile creation failed',
          details: {
            message: profileError.message,
            code: profileError.code,
            details: profileError
          }
        },
        { status: 400 }
      );
    }

    console.log('Profile created successfully:', profileResult);

    return NextResponse.json({ 
      success: true, 
      user: {
        id: authData.user.id,
        email: authData.user.email,
        full_name,
        role,
        avatar_url
      }
    });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Server error',
        details: {
          message: error.message || 'An unexpected error occurred',
          code: error.code || 'UNKNOWN_ERROR',
          error: error.toString()
        }
      },
      { status: 500 }
    );
  }
} 