import {
  PlayIcon,
  CheckCircle2Icon,
  AlertCircleIcon,
  ClockIcon,
  ActivityIcon,
  FilterIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const runs = [
  {
    id: "run-1",
    workflowName: "Research & Summarize",
    status: "completed" as const,
    startedAt: "Today, 11:32 AM",
    duration: "2m 14s",
    steps: "5/5",
  },
  {
    id: "run-2",
    workflowName: "Research & Summarize",
    status: "running" as const,
    startedAt: "Today, 11:44 AM",
    duration: "Running...",
    steps: "3/5",
  },
  {
    id: "run-3",
    workflowName: "Website Monitor",
    status: "failed" as const,
    startedAt: "Today, 10:15 AM",
    duration: "0m 48s",
    steps: "2/3",
  },
  {
    id: "run-4",
    workflowName: "Research & Summarize",
    status: "completed" as const,
    startedAt: "Today, 8:20 AM",
    duration: "1m 52s",
    steps: "5/5",
  },
  {
    id: "run-5",
    workflowName: "Lead Enrichment",
    status: "completed" as const,
    startedAt: "Yesterday, 4:30 PM",
    duration: "3m 05s",
    steps: "4/4",
  },
  {
    id: "run-6",
    workflowName: "Website Monitor",
    status: "completed" as const,
    startedAt: "Yesterday, 2:00 PM",
    duration: "0m 32s",
    steps: "3/3",
  },
  {
    id: "run-7",
    workflowName: "Research & Summarize",
    status: "completed" as const,
    startedAt: "Yesterday, 10:10 AM",
    duration: "2m 30s",
    steps: "5/5",
  },
]

const statusConfig = {
  completed: {
    label: "Completed",
    variant: "default" as const,
    className: "bg-emerald-600 hover:bg-emerald-600",
    icon: CheckCircle2Icon,
    iconColor: "text-emerald-600",
  },
  running: {
    label: "Running",
    variant: "default" as const,
    className: "bg-blue-600 hover:bg-blue-600 animate-pulse",
    icon: ActivityIcon,
    iconColor: "text-blue-600",
  },
  failed: {
    label: "Failed",
    variant: "destructive" as const,
    className: "",
    icon: AlertCircleIcon,
    iconColor: "text-destructive",
  },
  queued: {
    label: "Queued",
    variant: "secondary" as const,
    className: "",
    icon: ClockIcon,
    iconColor: "text-muted-foreground",
  },
  cancelled: {
    label: "Cancelled",
    variant: "outline" as const,
    className: "",
    icon: AlertCircleIcon,
    iconColor: "text-muted-foreground",
  },
}

export default function RunsPage() {
  const completedCount = runs.filter((r) => r.status === "completed").length
  const failedCount = runs.filter((r) => r.status === "failed").length
  const runningCount = runs.filter((r) => r.status === "running").length

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Runs</h1>
          <p className="text-sm text-muted-foreground">
            Execution history across all workflows.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Button variant="outline" size="sm">
            <FilterIcon className="mr-2 size-3.5" />
            Filter
          </Button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card size="sm">
          <CardHeader>
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-xl tabular-nums text-emerald-600">
              {completedCount}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardDescription>Running</CardDescription>
            <CardTitle className="text-xl tabular-nums text-blue-600">
              {runningCount}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardDescription>Failed</CardDescription>
            <CardTitle className="text-xl tabular-nums text-destructive">
              {failedCount}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Run list */}
      <Card>
        <CardHeader>
          <CardTitle>All Runs</CardTitle>
          <CardDescription>{runs.length} total runs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {runs.map((run, i) => {
              const cfg = statusConfig[run.status]
              const StatusIcon = cfg.icon
              return (
                <div key={run.id}>
                  <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <StatusIcon className={`size-4 ${cfg.iconColor}`} />
                      <div>
                        <p className="text-sm font-medium">{run.workflowName}</p>
                        <p className="text-xs text-muted-foreground">
                          {run.startedAt} · {run.duration} · Steps {run.steps}
                        </p>
                      </div>
                    </div>
                    <Badge variant={cfg.variant} className={cfg.className}>
                      {cfg.label}
                    </Badge>
                  </div>
                  {i < runs.length - 1 && <Separator />}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
