"use client"

import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import {
    Briefcase,
    User,
    FileText,
    Wrench,
    MapPin,
    Calendar,
    Eye,
    Trash2
} from "lucide-react"
import { EditProjectDialog } from "./edit-project-dialog"

interface ProjectCardProps {
    title: string
    status: string
    customer: string
    contract: string
    contractor: string
    address: string
    startDate: string
    endDate: string
    progress: number
}

export function ProjectCard({
    title,
    status,
    customer,
    contract,
    contractor,
    address,
    startDate,
    endDate,
    progress
}: ProjectCardProps) {
    return (
        <Card className="w-full max-w-[260px] border-border shadow-sm">
            <CardHeader className="p-3 flex flex-row items-center gap-3 space-y-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex flex-col min-w-0">
                    <CardTitle className="text-sm font-bold leading-tight truncate">{title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mt-0.5 text-[9px] h-4 px-1 uppercase tracking-wider font-bold">
                        {status}
                    </Badge>
                </div>
            </CardHeader>

            <Separator />

            <CardContent className="p-3 space-y-3">
                <div className="grid gap-2.5">
                    <div className="flex items-start gap-2">
                        <User className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                        <div className="grid gap-0">
                            <Label className="text-[9px] uppercase tracking-tighter text-muted-foreground font-bold">Заказчик</Label>
                            <p className="text-xs font-semibold leading-tight line-clamp-1">{customer}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <FileText className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                        <div className="grid gap-0">
                            <Label className="text-[9px] uppercase tracking-tighter text-muted-foreground font-bold">Договор</Label>
                            <p className="text-xs font-semibold text-primary underline underline-offset-1 cursor-pointer truncate">{contract}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <Wrench className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                        <div className="grid gap-0">
                            <Label className="text-[9px] uppercase tracking-tighter text-muted-foreground font-bold">Подрядчик</Label>
                            <p className="text-xs font-semibold truncate">{contractor}</p>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                    <div className="grid gap-0">
                        <Label className="text-[9px] uppercase tracking-tighter text-muted-foreground font-bold">Адрес</Label>
                        <p className="text-xs font-semibold line-clamp-1">{address}</p>
                    </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-start gap-2">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                        <div className="grid gap-0">
                            <Label className="text-[9px] uppercase tracking-tighter text-muted-foreground font-bold">Начало</Label>
                            <p className="text-xs font-semibold">{startDate || "—"}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div className="grid gap-0.5">
                            <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Окончание</Label>
                            <p className="text-sm font-semibold">{endDate || "—"}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between">
                        <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Прогресс</Label>
                        <span className="text-xs font-bold text-primary">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-1" />
                </div>
            </CardContent>

            <Separator />

            <CardFooter className="p-2.5 flex gap-1.5">
                <Button size="sm" className="flex-1 h-8 text-xs gap-1.5">
                    <Eye className="h-3.5 w-3.5" />
                    Открыть
                </Button>
                <EditProjectDialog project={{ title, status, customer, contract, contractor, address, startDate, endDate, progress }} />
                <Button variant="outline" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                    <Trash2 className="h-3.5 w-3.5" />
                </Button>
            </CardFooter>
        </Card>
    )
}
