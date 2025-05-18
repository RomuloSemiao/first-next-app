import { Metadata } from "next";

interface IMakeProps {
    params: {
        make: string
    }
}

export async function generateMetadata({ params }: IMakeProps): Promise<Metadata> {
    const { make } = await params

    return {
        title: `Veículos da ${make} | AudaceCars`,
    }
}

export default async function Make({ params }: IMakeProps) {
    const { make } = await params

    return (
        <h1 className="mb-4 mt-10 font-extrabold">
            Página da marca: {make}
        </h1>
    )
}