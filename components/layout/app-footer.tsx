"use client"

export function AppFooter() {
    return (
        <footer className="border-t py-6 md:px-8 md:py-0 bg-white/80 backdrop-blur-md">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        SmetaLab
                    </a>
                    . The source code is available on{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
                    <a href="#" className="hover:underline underline-offset-4">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
