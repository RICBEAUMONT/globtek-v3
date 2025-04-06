import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!supabaseAdmin) {
      throw new Error('Supabase admin client is not initialized');
    }

    // Fetch the user's profile
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', params.id)
      .single();

    if (profileError) {
      console.error('Error fetching profile:', profileError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to fetch profile',
          details: {
            message: profileError.message,
            code: profileError.code
          }
        },
        { status: 400 }
      );
    }

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          error: 'Profile not found',
          details: {
            message: 'No profile found with the provided ID'
          }
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      member: profile
    });
  } catch (error: any) {
    console.error('Error in GET /api/admin/users/[id]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Server error',
        details: {
          message: error.message || 'An unexpected error occurred',
          code: error.code || 'UNKNOWN_ERROR'
        }
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!supabaseAdmin) {
      throw new Error('Supabase admin client is not initialized');
    }

    // Delete the user from Supabase Auth
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(params.id);
    if (authError) {
      console.error('Error deleting user from auth:', authError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to delete user from authentication service',
          details: {
            message: authError.message,
            code: authError.status
          }
        },
        { status: 400 }
      );
    }

    // Delete the profile from the profiles table
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', params.id);

    if (profileError) {
      console.error('Error deleting profile:', profileError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to delete profile',
          details: {
            message: profileError.message,
            code: profileError.code
          }
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error: any) {
    console.error('Error in DELETE /api/admin/users/[id]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Server error',
        details: {
          message: error.message || 'An unexpected error occurred',
          code: error.code || 'UNKNOWN_ERROR'
        }
      },
      { status: 500 }
    );
  }
} 