import Link from "next/link"
import {
  PlusIcon,
  WorkflowIcon,
  SearchIcon,
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

// Mock data — same shape we'll use from the database later
const workflows = [
  {
    id: "wf-1",
    name: "Research & Summarize",
    description: "Search the web for a topic, collect key findings, and produce a summary report.",
    status: "active" as const,
    nodeCount: 5,
    lastRun: "12 min ago",
    updatedAt: "2 hours ago",
  },
  {
    id: "wf-2",
    name: "Website Monitor",
    description: "Check a website periodically and alert when content changes.",
    status: "draft" as const,
    nodeCount: 3,
    lastRun: "1 hour ago",
    updatedAt: "Yesterday",
  },
  {
    id: "wf-3",
    name: "Lead Enrichment",
    description: "Take a list of company names and enrich with website, employee count, and industry.",
    status: "draft" as const,
    nodeCount: 0,
    lastRun: null,
    updatedAt: "3 days ago",
  },
]

const statusConfig = {
  active: { label: "Active", variant: "default" as const, className: "bg-emerald-600 hover:bg-emerald-600" },
  draft: { label: "Draft", variant: "secondary" as const, className: "" },
  archived: { label: "Archived", variant: "outline" as const, className: "" },
}

export default function WorkflowsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Workflows</h1>
          <p className="text-sm text-muted-foreground">
            Design and manage your automation workflows.
          </p>
        </div>
        <Button className="mt-3 sm:mt-0">
          <PlusIcon className="mr-2 size-4" />
          New Workflow
        </Button>
      </div>

      {/* Workflow grid */}
      {workflows.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflows.map((wf) => {
            const cfg = statusConfig[wf.status]
            return (
              <Card
                key={wf.id}
                className="group cursor-pointer transition-shadow duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                      <WorkflowIcon className="size-4 text-primary" />
                    </div>
                    <Badge
                      variant={cfg.variant ?? "default"}
                      className={cfg.className}
                    >
                      {cfg.label}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{wf.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {wf.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{wf.nodeCount} nodes</span>
                    <span>Updated {wf.updatedAt}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {/* "Create new" card */}
          <Card className="flex cursor-pointer items-center justify-center border-dashed transition-colors hover:border-primary hover:bg-primary/5">
            <div className="flex flex-col items-center gap-2 p-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <PlusIcon className="size-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Create Workflow</p>
              <p className="text-xs text-muted-foreground">
                Start from scratch or use a template
              </p>
            </div>
          </Card>
        </div>
      ) : (
        /* Empty state */
        <Card className="flex items-center justify-center py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-muted">
              <WorkflowIcon className="size-7 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-medium">No workflows yet</h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Create your first workflow to start automating tasks with AI agents.
            </p>
            <Button className="mt-2">
              <PlusIcon className="mr-2 size-4" />
              Create Workflow
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
