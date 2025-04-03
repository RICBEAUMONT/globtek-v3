import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmail, getUserProfile, checkUserById } from '@/lib/supabase';

// Define a custom user type that includes the id field
interface CustomUser {
  id: string;
  email: string;
  name?: string;
}

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
    }
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('Login attempt:', { email: credentials?.email });
        
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          throw new Error('Please enter your email and password');
        }

        try {
          // Attempt to sign in with Supabase
          const { user, session } = await signInWithEmail(credentials.email, credentials.password);
          
          if (!user) {
            console.log('No user returned from Supabase');
            throw new Error('Invalid email or password');
          }

          console.log('User authenticated:', user);

          // Get additional user profile data if needed
          const profile = await getUserProfile(user.id);
          console.log('User profile:', profile);
          
          return {
            id: user.id,
            email: user.email,
            name: profile?.full_name || user.email?.split('@')[0] || 'User',
          } as CustomUser;
        } catch (error) {
          console.error('Authentication error:', error);
          throw new Error('Invalid email or password');
        }
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('JWT callback:', { token, user });
      
      // Initial sign in
      if (user) {
        token.id = user.id;
      }
      
      return token;
    },
    async session({ session, token }) {
      console.log('Session callback:', { session, token });
      
      if (session.user) {
        session.user.id = token.id as string;
      }
      
      return session;
    },
  },
  debug: true, // Enable debug mode for development
});

export { handler as GET, handler as POST }; 