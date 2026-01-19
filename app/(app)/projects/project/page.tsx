"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Database, LayoutDashboard, FileText, Settings } from "lucide-react"
import Link from "next/link"

export default function ProjectOverviewPage() {
    return (
        <div className="space-y-6">
            {/* Шапка проекта */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/projects">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Коттедж в Барвихе</h1>
                        <p className="text-muted-foreground">Основная информация и управление объектом</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Настройки</Button>
                    <Button>Отправить отчет</Button>
                </div>
            </div>

            {/* Быстрые разделы */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Обзор</CardTitle>
                        <LayoutDashboard className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Главная</div>
                        <p className="text-xs text-muted-foreground">Статистика и статус</p>
                    </CardContent>
                </Card>

                <Link href="/projects/project/storage" className="block">
                    <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Хранилище</CardTitle>
                            <Database className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Файлы</div>
                            <p className="text-xs text-muted-foreground">12 документов загружено</p>
                        </CardContent>
                    </Card>
                </Link>

                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Сметы</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Экономика</div>
                        <p className="text-xs text-muted-foreground">3 версии создано</p>
                    </CardContent>
                </Card>

                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Конфигурация</CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Настройки</div>
                        <p className="text-xs text-muted-foreground">Доступы и параметры</p>
                    </CardContent>
                </Card>
            </div>

            {/* Контентная часть */}
            <Card>
                <CardHeader>
                    <CardTitle>Последние действия</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground">
                        Здесь будет лента событий по проекту...
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
