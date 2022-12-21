import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    stratergy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      secret: process.env.JWT_SECRET,
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // If no error and we have user data, return it
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
          return null;
        }

        return { id: "1", name: "Admin", email: process.env.ADMIN_EMAIL };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
