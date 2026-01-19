"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Database } from "lucide-react"
import Link from "next/link"

export default function ProjectStoragePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/projects/project">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Project Storage</h1>
                    <p className="text-muted-foreground">
                        Хранилище документации и файлов проекта.
                    </p>
                </div>
            </div>

            <Card className="border-dashed">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-muted-foreground" />
                        Файлы проекта
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-muted rounded-full p-4 mb-4">
                        <Database className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">Хранилище пусто</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mb-6">
                        Здесь будет располагаться файловая структура проекта. Вы сможете загружать сметы, чертежи и другие документы.
                    </p>
                    <Button>Загрузить файл</Button>
                </CardContent>
            </Card>
        </div>
    )
}
