"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface DeleteProjectDialogProps {
    projectTitle: string
}

export function DeleteProjectDialog({ projectTitle }: DeleteProjectDialogProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                    <Trash2 className="h-3.5 w-3.5" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Вы уверены, что хотите удалить проект?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Это действие нельзя будет отменить. Проект <span className="font-bold text-foreground">"{projectTitle}"</span> и все связанные с ним данные будут полностью удалены.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Удалить проект
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
