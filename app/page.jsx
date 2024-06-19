  import { getServerSession } from "next-auth";
  import HomePage from "@/components/Homepage"
  import { authOptions } from "./api/auth/[...nextauth]/auth";
  import { redirect } from "next/navigation";
  export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session) {
      return (
       <HomePage/>
      );
    } 
  if(session?.user?.role==="admin"){
    redirect("/admin")
  }
  else if(session?.user?.role==="user"){
    redirect("/dashboard")
  }
  }
