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

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    // signOut: "/auth/login",
    error: "/error",
    newUser: "/auth/new-user",
  },
  trustHost: true,
  debug: false,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1,
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
