import { Metadata } from "next";
import Link from "next/link"

async function getMakes() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return ['Audi', 'BMW', 'Mercedes', 'Nissan', 'Subaru']
}

export const metadata: Metadata = {
  title: "Todos os veículos | AudaceCars",
};

export default async function Makes() {
    const makes = await getMakes()

    return (
        <div className="container mx-auto px-10">
            <h1 className="mb-4 mt-10 font-extrabold">Marcas</h1>

            <div className="grid grid-cols-5 gap-4">
                {makes.map(make => (
                    <Link key={make} href={`/makes/${make}`}>
                        <div className="rounded-lg bg-zinc-900 border-zinc-700 grid place-items-center h-56">
                            {make}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}