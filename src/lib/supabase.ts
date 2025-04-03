import { createClient } from '@supabase/supabase-js';

// Check if the required environment variables are defined
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Create a client for public operations
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Create an admin client with service role key for admin operations
// Only create the admin client if we're on the server side
export const supabaseAdmin = typeof window === 'undefined' 
  ? createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : null;

// Helper function to sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  console.log('Attempting to sign in with:', { email });
  console.log('Using Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Supabase auth error:', error);
      throw error;
    }

    if (!data.user) {
      console.error('No user returned from Supabase');
      throw new Error('Authentication failed');
    }

    console.log('Sign in successful:', { userId: data.user.id });
    return data;
  } catch (error) {
    console.error('Error in signInWithEmail:', error);
    throw error;
  }
}

// Helper function to sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

// Helper function to get the current session
export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Error getting session:', error);
    return null;
  }

  return session;
}

// Helper function to get user profile data
export async function getUserProfile(userId: string) {
  console.log('Fetching profile for user:', userId);
  
  try {
    // Check profiles table using public client
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    console.log('Profile data:', data);
    return data;
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return null;
  }
}

// Helper function to check if a specific user exists
export async function checkUserById(userId: string) {
  console.log('Checking user by ID:', userId);
  
  try {
    // Check profiles table using public client
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError) {
      console.error('Error checking profile:', profileError);
    } else {
      console.log('Profile found:', profile);
    }

    return {
      profile
    };
  } catch (error) {
    console.error('Error checking user:', error);
    return null;
  }
} 