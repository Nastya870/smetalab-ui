"use client"

import { DashboardChart } from "@/components/dashboard/dashboard-chart"

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="h-24 rounded-xl bg-neutral-100/50 border p-4 flex items-center justify-center font-medium text-neutral-500 text-sm">
                    Stat 1
                </div>
                <div className="h-24 rounded-xl bg-neutral-100/50 border p-4 flex items-center justify-center font-medium text-neutral-500 text-sm">
                    Stat 2
                </div>
                <div className="h-24 rounded-xl bg-neutral-100/50 border p-4 flex items-center justify-center font-medium text-neutral-500 text-sm">
                    Stat 3
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="lg:col-span-4">
                    <DashboardChart />
                </div>
                <div className="lg:col-span-3 h-full rounded-xl bg-neutral-100/50 border p-4 flex items-center justify-center font-medium text-neutral-500 text-sm">
                    Recent Activity / Secondary Stats
                </div>
            </div>
        </div>
    )
}
