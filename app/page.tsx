import Link from "next/link"
import {
  WorkflowIcon,
  BotIcon,
  PlayIcon,
  PlusIcon,
  ArrowRightIcon,
  ClockIcon,
  CheckCircle2Icon,
  AlertCircleIcon,
  SparklesIcon,
  TrendingUpIcon,
  ActivityIcon,
  ZapIcon,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// ── Mock data — replaced by real data once we add persistence (M3) ──

const stats = [
  {
    title: "Workflows",
    value: "3",
    description: "1 active, 2 drafts",
    icon: WorkflowIcon,
    href: "/workflows",
    trend: "+1 this week",
  },
  {
    title: "Agents",
    value: "2",
    description: "2 idle",
    icon: BotIcon,
    href: "/agents",
    trend: "All healthy",
  },
  {
    title: "Runs Today",
    value: "7",
    description: "6 completed, 1 running",
    icon: PlayIcon,
    href: "/runs",
    trend: "+3 vs yesterday",
  },
  {
    title: "Success Rate",
    value: "94%",
    description: "Last 30 days",
    icon: TrendingUpIcon,
    href: "/runs",
    trend: "↑ 2% from last week",
  },
]

const recentWorkflows = [
  {
    id: "wf-1",
    name: "Research & Summarize",
    status: "active" as const,
    nodeCount: 5,
    updatedAt: "2 hours ago",
  },
  {
    id: "wf-2",
    name: "Website Monitor",
    status: "draft" as const,
    nodeCount: 3,
    updatedAt: "Yesterday",
  },
  {
    id: "wf-3",
    name: "Lead Enrichment",
    status: "draft" as const,
    nodeCount: 0,
    updatedAt: "3 days ago",
  },
]

const recentRuns = [
  {
    id: "run-1",
    workflowName: "Research & Summarize",
    status: "completed" as const,
    time: "12 min ago",
    steps: "5/5",
  },
  {
    id: "run-2",
    workflowName: "Research & Summarize",
    status: "running" as const,
    time: "Just now",
    steps: "3/5",
  },
  {
    id: "run-3",
    workflowName: "Website Monitor",
    status: "failed" as const,
    time: "1 hour ago",
    steps: "2/3",
  },
  {
    id: "run-4",
    workflowName: "Research & Summarize",
    status: "completed" as const,
    time: "3 hours ago",
    steps: "5/5",
  },
]

const statusConfig = {
  active: { label: "Active", variant: "default" as const, className: "bg-emerald-600 hover:bg-emerald-600" },
  draft: { label: "Draft", variant: "secondary" as const, className: "" },
  archived: { label: "Archived", variant: "outline" as const, className: "" },
  completed: { label: "Completed", variant: "default" as const, className: "bg-emerald-600 hover:bg-emerald-600", icon: CheckCircle2Icon },
  running: { label: "Running", variant: "default" as const, className: "bg-blue-600 hover:bg-blue-600 animate-pulse", icon: ActivityIcon },
  failed: { label: "Failed", variant: "destructive" as const, className: "", icon: AlertCircleIcon },
  queued: { label: "Queued", variant: "secondary" as const, className: "", icon: ClockIcon },
  cancelled: { label: "Cancelled", variant: "outline" as const, className: "", icon: AlertCircleIcon },
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* ── Welcome header ── */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening with your automations.
          </p>
        </div>
        <Button asChild className="mt-3 sm:mt-0">
          <Link href="/workflows">
            <PlusIcon className="mr-2 size-4" />
            New Workflow
          </Link>
        </Button>
      </div>

      {/* ── Stats grid ── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href} className="group">
            <Card className="transition-shadow duration-200 group-hover:shadow-md">
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-2xl tabular-nums">
                  {stat.value}
                </CardTitle>
                <CardAction>
                  <stat.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* ── Main content: workflows + runs side by side ── */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Recent workflows */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Your Workflows</CardTitle>
            <CardDescription>
              Recently updated workflows
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/workflows">
                  View all <ArrowRightIcon className="ml-1 size-3.5" />
                </Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentWorkflows.map((wf) => {
                const cfg = statusConfig[wf.status]
                return (
                  <div
                    key={wf.id}
                    className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md bg-primary/10">
                        <WorkflowIcon className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {wf.name}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {wf.nodeCount} nodes · {wf.updatedAt}
                        </p>
                      </div>
                    </div>
                    <Badge variant={cfg.variant} className={cfg.className}>
                      {cfg.label}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent runs */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Runs</CardTitle>
            <CardDescription>Latest execution activity</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/runs">
                  View all <ArrowRightIcon className="ml-1 size-3.5" />
                </Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentRuns.map((run) => {
                const cfg = statusConfig[run.status]
                const StatusIcon = cfg.icon
                return (
                  <div
                    key={run.id}
                    className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      {StatusIcon && (
                        <StatusIcon
                          className={`size-4 ${
                            run.status === "completed"
                              ? "text-emerald-600"
                              : run.status === "running"
                                ? "text-blue-600"
                                : "text-destructive"
                          }`}
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {run.workflowName}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Steps {run.steps} · {run.time}
                        </p>
                      </div>
                    </div>
                    <Badge variant={cfg.variant} className={cfg.className}>
                      {cfg.label}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ── Quick actions ── */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="/workflows"
              className="flex items-center gap-3 rounded-lg border border-dashed p-4 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <PlusIcon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Create Workflow</p>
                <p className="text-xs text-muted-foreground">
                  Design a new automation
                </p>
              </div>
            </Link>
            <Link
              href="/agents"
              className="flex items-center gap-3 rounded-lg border border-dashed p-4 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <BotIcon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Configure Agent</p>
                <p className="text-xs text-muted-foreground">
                  Set up an AI agent
                </p>
              </div>
            </Link>
            <Link
              href="/runs"
              className="flex items-center gap-3 rounded-lg border border-dashed p-4 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <ZapIcon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">View Runs</p>
                <p className="text-xs text-muted-foreground">
                  Inspect execution history
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
