import NextAuth from "next-auth";

import Apple from "next-auth/providers/apple"
// import Facebook from "next-auth/providers/facebook"
import GitHub from "next-auth/providers/github";
// import Gitlab from "next-auth/providers/gitlab"
import Google from "next-auth/providers/google";
// import LinkedIn from "next-auth/providers/linkedin"
// import Twitter from "next-auth/providers/twitter"

declare module "next-auth" {
  interface User {
    role: string
  }
}


export const { handlers, auth, signIn, signOut } = NextAuth({
  // Configure one or more authentication providers
  // theme: {
  //   logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  // },
  pages: {
    signIn: "/auth/login",
    //   signOut: "/auth/login",
    error: "/auth/error",
  },
  debug: false,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1,
  },
  providers: [
    Apple,
    // Atlassian,
    // Auth0,
    // Authentik,
    // AzureAD,
    // AzureB2C,
    // Battlenet,
    // Box,
    // BoxyHQSAML,
    // Bungie,
    // Cognito,
    // Coinbase,
    // Discord,
    // Dropbox,
    // DuendeIDS6,
    // Eveonline,
    // Facebook,
    // Faceit,
    // FortyTwoSchool,
    // Foursquare,
    // Freshbooks,
    // Fusionauth,
    GitHub,
    // Gitlab,
    Google,
    // Hubspot,
    // Instagram,
    // Kakao,
    // Keycloak,
    // Line,
    // LinkedIn,
    // Mailchimp,
    // Mailru,
    // Medium,
    // Naver,
    // Netlify,
    // Okta,
    // Onelogin,
    // Osso,
    // Osu,
    // Passage,
    // Patreon,
    // Pinterest,
    // Pipedrive,
    // Reddit,
    // Salesforce,
    // Slack,
    // Spotify,
    // Strava,
    // Todoist,
    // Trakt,
    // Twitch,
    // Twitter,
    // UnitedEffects,
    // Vk,
    // Wikimedia,
    // Wordpress,
    // WorkOS,
    // Yandex,
    // Zitadel,
    // Zoho,
    // Zoom,
  ],
  // basePath: "/auth",
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, trigger, session }) {
      // Check if user object has a role property
      if (session?.user?.role) {
        token.role = session.user.role;
      } else {
        // Set a default role if no role found
        token.role = "member";
      }

      return token;
    },
  },
  // events: {
  // async signIn({ user, account, profile, isNewUser }) {
  //   console.log("signIn");
  //   console.log({ user, account, profile, isNewUser });
  // },
  //   async signOut() {
  //     console.log("signOut");
  //   },
  // async linkAccount({ user, account, profile }) {
  //   console.log("LINK ACCOUNT", { user, account, profile });
  // }
  // },
});
