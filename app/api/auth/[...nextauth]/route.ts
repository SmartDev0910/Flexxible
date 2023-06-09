import { AddUser, getUserByEmail } from "@/graphql/server";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  theme: {
    colorScheme: "light",
    logo: "/assets/logo.svg",
  },
  callbacks: {
    async session({ session }) {
      // store the user id from grafbase to session
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        // check if user already exists
        const userExists = await getUserByEmail(profile?.email || "");
        // if not, create a new user
        if (!userExists) {
          await AddUser(
            profile?.email || "",
            profile?.name || "",
            profile?.picture || "",
            null,
            null,
            null
          );
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
