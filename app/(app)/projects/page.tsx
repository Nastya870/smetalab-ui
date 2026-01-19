"use client"

import { ProjectCard } from "@/components/projects/project-card"
import { CreateProjectDialog } from "@/components/projects/create-project-dialog"

const projects = [
    {
        title: "Test Project",
        status: "В работе",
        customer: "Переходенко Александр Валерьевич",
        contract: "Д-2026-002",
        contractor: "SMETA LAB",
        address: "Test Adress 123",
        startDate: "",
        endDate: "",
        progress: 4
    },
    {
        title: "Коттедж в Барвихе",
        status: "В работе",
        customer: "Иванов Иван Иванович",
        contract: "Д-2026-005",
        contractor: "SMETA LAB",
        address: "Московская обл., Барвиха, 45",
        startDate: "15.01.2026",
        endDate: "20.03.2026",
        progress: 15
    },
    {
        title: "Офис в Сити",
        status: "Завершен",
        customer: "ООО 'ТехноПро'",
        contract: "Д-2025-112",
        contractor: "SMETA LAB",
        address: "Москва, Пресненская наб., 12",
        startDate: "01.12.2025",
        endDate: "10.01.2026",
        progress: 100
    }
]

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Проекты</h1>
                    <p className="text-muted-foreground">
                        Управление и отслеживание ваших активных проектов.
                    </p>
                </div>
                <CreateProjectDialog />
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}
