import Link from "next/link";

export default function SignUp() {
    return (
      <div className="flex flex-row items-center gap-4 p-2">
        <h1>SignUp</h1>

        <Link className="bg-white text-black p-2" href="/auth/signin">SignIn</Link>
        <Link className="bg-white text-black p-2"href="/">Home</Link>
      </div>
    );
  }