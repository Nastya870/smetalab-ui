"use client"

import * as React from "react"
import { CalendarIcon, Pencil } from "lucide-react"
import { format, parse } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

interface EditProjectDialogProps {
    project: {
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
}

export function EditProjectDialog({ project }: EditProjectDialogProps) {
    const parseDate = (dateStr: string) => {
        if (!dateStr) return undefined
        try {
            return parse(dateStr, "dd.MM.yyyy", new Date())
        } catch {
            return undefined
        }
    }

    const [startDate, setStartDate] = React.useState<Date | undefined>(parseDate(project.startDate))
    const [endDate, setEndDate] = React.useState<Date | undefined>(parseDate(project.endDate))

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <Pencil className="h-3.5 w-3.5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Редактирование проекта</DialogTitle>
                    <DialogDescription>
                        Измените данные объекта. Нажмите сохранить, чтобы применить изменения.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Наименование объекта</Label>
                        <Input id="name" defaultValue={project.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="customer">Заказчик</Label>
                        <Select defaultValue={project.customer.toLowerCase().includes("пахомов") ? "pakhomov" : "ivanov"}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите заказчика" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pakhomov">Пахомов Александр</SelectItem>
                                <SelectItem value="ivanov">Иванов Иван</SelectItem>
                                <SelectItem value="smirnov">Смирнов Дмитрий</SelectItem>
                                <SelectItem value="new">+ Добавить нового</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="contractor">Подрядчик</Label>
                        <Input id="contractor" defaultValue={project.contractor} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="address">Адрес объекта</Label>
                        <Input id="address" defaultValue={project.address} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Дата начала</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal px-3",
                                            !startDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {startDate ? format(startDate, "dd.MM.yyyy") : <span>ДД.ММ.ГГГГ</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={startDate}
                                        onSelect={setStartDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid gap-2">
                            <Label>Дата окончания</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal px-3",
                                            !endDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {endDate ? format(endDate, "dd.MM.yyyy") : <span>ДД.ММ.ГГГГ</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={endDate}
                                        onSelect={setEndDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Отмена</Button>
                    </DialogClose>
                    <Button type="submit">Сохранить</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
