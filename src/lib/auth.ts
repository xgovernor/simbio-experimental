import NextAuth from "next-auth";
// import Apple from "next-auth/providers/apple";
import Google from "next-auth/providers/google";


export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    // signOut: "/auth/login",
    error: "/error",
    newUser: "/auth/new-user",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    // Apple,
    Google,
  ],
});

declare module "next-auth" {
  interface User {
    role: string;
  }
}
