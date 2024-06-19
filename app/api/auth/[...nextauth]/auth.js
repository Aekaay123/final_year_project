import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      try {
        const response =await fetch("http://localhost:3000/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user?.email,
          }),
        });
        
        const data= await response.json();
        if (data.isRegisteredTutor) {
          return user;
        } else {
          throw new Error("Not a registered tutor");
        }
      } catch (error) {
        console.error(error);
    
      }
    },
    async jwt({ user, token }) {
      if (user) {
        if (user.email.toLowerCase().trim() === "02200149.cst@rub.edu.bt") {
          token.role = "admin";
        } else {
          token.role = "user";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.userID = token.sub;
      }
      return session;
    },
  },
};
