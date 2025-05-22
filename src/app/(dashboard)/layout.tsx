export default function DashboardLayout({ children } : { children: React.ReactNode }) {
    return (
        <div>
            <header className="h-20 border-b border-zinc-800 flex items-center">
                <div className="container mx-auto">
                    <strong>
                        AudaceCars
                    </strong>
                </div>
            </header>

            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}