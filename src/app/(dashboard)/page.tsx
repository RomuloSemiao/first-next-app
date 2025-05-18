import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-10 flex flex-col w-80">
      <h1>Home</h1>
      <Link className="bg-white text-black p-2" href="/auth/signin">SignIn</Link>
    </div>
  );
}
