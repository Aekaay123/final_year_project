import Link from "next/link";
import { app } from "@/firebase";
import { getFirestore, collection, getDocs, getDoc, where, query } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
const Users = async () => {
  const session=await getServerSession(authOptions);
  const email=session?.user?.email
  const db = getFirestore(app);
  const coursesCollectionRef = collection(db, "users");
  const q=query(coursesCollectionRef,where("email","==",email));
  const querysnapshot=await getDocs(q);
  let user=null
  querysnapshot.forEach((doc)=>{
    user={id:doc.id,...doc.data()}
    console.log("the user information is",user.id)
  })

  const userid=user.id;
  const collectionref2=collection(db,"courses");
  const q2=query(collectionref2,where("ownerId","==",userid));
  const querysnapshot2=await getDocs(q2);

  let courses=[];
  querysnapshot2.forEach((doc)=>{
    courses.push({id:doc.id,...doc.data()})
  })
  return (
    <div className="container mt-6 bg-white/20 text-black border flex flex-col space-y-3 max-w-7xl mx-auto p-3 rounded-md">
      <h1 className="text-3xl text-center text-slate-500">
        List of modules you are teaching
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {
          courses.length==0?<h1>You do not have any courses you are curently teaching</h1>:
        courses.map(({ id, name, thumbnail}) => {
          return (
            <Link
              key={id}
              href={{pathname:`/dashboard/modules/${name}`,query:{id}}}
              className=" bg-black h-[200px] w-[400px] bg-cover bg-center hover:scale-105 text-slate-500 hover:text-white border rounded-lg shadow-lg justify-center space-x-2 hover:bg-gray-900"
              style={{ backgroundImage: `url(${thumbnail})` }}
            >
              <div className="bg-black/70 w-full h-full flex justify-center items-center rounded-md">
              <p className="text-white text-xl">{name}</p>
              </div>
            </Link>
          );
        })
        
        }
      </div>
    </div>
  );
};

export default Users;
