import Link from "next/link";

export default function SignIn() {
    return (
      <div className="flex flex-row items-center gap-4 p-2">
        <h1>SignIn</h1>
        
        <Link className="bg-white text-black p-2" href="/auth/signup">SignUp</Link>
        <Link className="bg-white text-black p-2" href="/">Home</Link>
      </div>
    );
  }