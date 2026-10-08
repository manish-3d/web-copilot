import {
  SettingsIcon,
  KeyIcon,
  BotIcon,
  ShieldIcon,
  BellIcon,
  DatabaseIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage workspace settings, API credentials, and agent configurations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* API Credentials */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                <KeyIcon className="size-4 text-primary" />
              </div>
              <CardTitle>API Credentials</CardTitle>
            </div>
            <CardDescription>
              Configure LLM provider keys used by your workflow agents.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="gemini-key">Gemini API Key</Label>
              <div className="flex gap-2">
                <Input
                  id="gemini-key"
                  type="password"
                  placeholder="AIzaSy..."
                  defaultValue=""
                />
                <Button variant="outline" size="sm">
                  Save
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Stored locally or in your secure server environment.
              </p>
            </div>

            <Separator />

            <div className="space-y-1.5">
              <Label htmlFor="browser-endpoint">Browser Automation Service</Label>
              <div className="flex gap-2">
                <Input
                  id="browser-endpoint"
                  placeholder="ws://localhost:9222 or CDP endpoint"
                  defaultValue="ws://localhost:9222"
                />
                <Button variant="outline" size="sm">
                  Test
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Execution & Safety */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                <ShieldIcon className="size-4 text-primary" />
              </div>
              <CardTitle>Execution & Safety</CardTitle>
            </div>
            <CardDescription>
              Set guardrails and limits for autonomous browser actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Headless Browser Mode</Label>
                <p className="text-xs text-muted-foreground">
                  Run automation in the background without opening visible browser windows.
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Human-in-the-Loop Checkpoints</Label>
                <p className="text-xs text-muted-foreground">
                  Prompt for approval before sensitive actions (forms, payments, auth).
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Step Execution Timeout</Label>
                <p className="text-xs text-muted-foreground">
                  Maximum seconds allowed per single browser or AI action.
                </p>
              </div>
              <Badge variant="outline" className="font-mono">
                60s
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Workspace Info */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                <DatabaseIcon className="size-4 text-primary" />
              </div>
              <CardTitle>Workspace & Storage</CardTitle>
            </div>
            <CardDescription>
              Current project environment and persistence status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <p className="font-medium">WebPilot Local Prototype</p>
                <p className="text-xs text-muted-foreground">
                  Version 0.0.1 · In-memory state (Database persistence planned for M3)
                </p>
              </div>
              <Badge variant="secondary">Development Mode</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
