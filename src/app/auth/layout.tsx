export default function AuthLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex gap-2 w-full">
            <div className="w-1/2 bg-red-500">Imagem do app</div>
            <div className="w-1/2 bg-blue-500">{children}</div>
        </div>
    )
}