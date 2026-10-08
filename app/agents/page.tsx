import {
  BotIcon,
  PlusIcon,
  CircleDotIcon,
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

const agents = [
  {
    id: "agent-1",
    name: "Browser Agent",
    description: "Navigates websites, fills forms, extracts data from pages.",
    status: "idle" as const,
    capabilities: ["Web navigation", "Data extraction", "Form filling"],
    lastActiveAt: "12 min ago",
  },
  {
    id: "agent-2",
    name: "Analyst Agent",
    description: "Processes collected data, generates summaries, and identifies patterns.",
    status: "idle" as const,
    capabilities: ["Text analysis", "Summarization", "Pattern detection"],
    lastActiveAt: "1 hour ago",
  },
]

const statusConfig = {
  idle: { label: "Idle", dotColor: "text-emerald-500" },
  busy: { label: "Busy", dotColor: "text-blue-500" },
  offline: { label: "Offline", dotColor: "text-muted-foreground" },
}

export default function AgentsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Agents</h1>
          <p className="text-sm text-muted-foreground">
            Configure and monitor your AI agents.
          </p>
        </div>
        <Button className="mt-3 sm:mt-0">
          <PlusIcon className="mr-2 size-4" />
          New Agent
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => {
          const cfg = statusConfig[agent.status]
          return (
            <Card
              key={agent.id}
              className="group cursor-pointer transition-shadow duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <BotIcon className="size-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CircleDotIcon className={`size-3 ${cfg.dotColor}`} />
                    {cfg.label}
                  </div>
                </div>
                <CardTitle className="mt-2">{agent.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {agent.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {agent.capabilities.map((cap) => (
                    <Badge key={cap} variant="secondary" className="text-xs">
                      {cap}
                    </Badge>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Last active {agent.lastActiveAt}
                </p>
              </CardContent>
            </Card>
          )
        })}

        {/* Add agent card */}
        <Card className="flex cursor-pointer items-center justify-center border-dashed transition-colors hover:border-primary hover:bg-primary/5">
          <div className="flex flex-col items-center gap-2 p-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
              <PlusIcon className="size-6 text-primary" />
            </div>
            <p className="text-sm font-medium">Add Agent</p>
            <p className="text-xs text-muted-foreground">
              Configure a new AI agent
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
