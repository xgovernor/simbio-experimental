import NextAuth from "next-auth";
import Apple from "next-auth/providers/apple";
// import Facebook from "next-auth/providers/facebook"
import GitHub from "next-auth/providers/github";
// import Gitlab from "next-auth/providers/gitlab"
import Google from "next-auth/providers/google";
// import LinkedIn from "next-auth/providers/linkedin"
// import Twitter from "next-auth/providers/twitter"

declare module "next-auth" {
  interface User {
    role: string;
  }
}

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

// This function can run for a maximum of 180 seconds
export const maxDuration = 180;
export const runtime = "edge";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    // signOut: "/auth/login",
    error: "/error",
    newUser: "/auth/new-user",
  },
  debug: false,
  session: {
    strategy: "jwt",
  },
  providers: [
    Apple,
    // Facebook,
    GitHub,
    // Gitlab,
    Google,
    // LinkedIn,
    // Twitter,
  ],
  // basePath: "/auth",
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
        domain: VERCEL_DEPLOYMENT ? ".dot9.dev" : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },
  // callbacks: {
  //   async session({ session, token }) {
  //     if (token.sub && session.user) {
  //       session.user.id = token.sub;
  //     }
  //     if (token.role && session.user) {
  //       session.user.role = token.role as string;
  //     }
  //     return session;
  //   },
  //   async jwt({ token, trigger, session }) {
  //     // Check if user object has a role property
  //     if (session?.user?.role) {
  //       token.role = session.user.role;
  //     } else {
  //       // Set a default role if no role found
  //       token.role = "member";
  //     }
  //     return token;
  //   },
  // },
  events: {
    //  async createUser(message) {
    //   const params: CreateUserEmailProps = {
    //     user: {
    //       name: message.user.name,
    //       email: message.user.email,
    //     },
    //   };

    //   await identifyUser(message.user.email ?? message.user.id);
    //   await trackAnalytics({
    //     event: "User Signed Up",
    //     email: message.user.email,
    //     userId: message.user.id,
    //   });

    //   await sendWelcomeEmail(params);
    // },
    async signIn({ user, account, profile, isNewUser }) {
      console.log("*****************signIn*******************");
      console.log({ user, account, profile, isNewUser });
    },
    //   async signOut() {
    //     console.log("signOut");
    //   },
    // async linkAccount({ user, account, profile }) {
    //   console.log("LINK ACCOUNT", { user, account, profile });
    // }
  },
});
