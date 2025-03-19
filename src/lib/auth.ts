import NextAuth from "next-auth";
// import Apple from "next-auth/providers/apple";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    // signOut: "/auth/login",
    error: "/error",
    newUser: "/auth/setup-user",
  },
  providers: [
    // Apple,
    Google,
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      // Reject unverified Google users
      if (account?.provider === "google" && !profile?.email_verified) {
        return false;
      }

      // Example: Populate user data (you'd typically do this in a DB)
      // For Google, assume profile setup is incomplete until user updates it
      user.profileComplete = false; // Default to incomplete; update via DB or user action
      return true;
    },
    async jwt({ token, user, trigger }) {
      // Persist user data to the JWT token on initial sign-in
      if (user) {
        token.role = user.role;
      }

      if (! token.profileComplete || trigger === "signUp") {
        token.profileComplete = false;
      }

      return token;
    },
    async session({ session, token }) {
      // Add token data to session
      session.user.role = token.role as string;
      session.user.profileComplete = session.user.profileComplete || false;
      return session;
    },
    async redirect({ url, baseUrl }) {
      const isNewUser = true;

      // When new user
      if (isNewUser) {
        return `${baseUrl}/auth/setup-user`;
      }

      return url
    }
  }
});

declare module "next-auth" {
  interface User {role?: string; // Your existing role field
    profileComplete?: boolean; // To track profile setup status
  }
  interface JWT {
    role?: string;
    profileComplete?: boolean;
  }
}
