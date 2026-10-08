/**
 * Core domain types for WebPilot.
 *
 * These types represent the fundamental entities in the system.
 * They will grow as we move through milestones, but we start small
 * and explicit — only what M0/M1 actually needs.
 */

// ── Workflow ────────────────────────────────────────────────

export type WorkflowStatus = "draft" | "active" | "archived"

export interface Workflow {
  id: string
  name: string
  description: string
  status: WorkflowStatus
  nodeCount: number
  createdAt: string
  updatedAt: string
}

// ── Run ─────────────────────────────────────────────────────

export type RunStatus = "queued" | "running" | "completed" | "failed" | "cancelled"

export interface Run {
  id: string
  workflowId: string
  workflowName: string
  status: RunStatus
  startedAt: string
  completedAt: string | null
  stepCount: number
  stepsCompleted: number
}

// ── Agent ───────────────────────────────────────────────────

export type AgentStatus = "idle" | "busy" | "offline"

export interface Agent {
  id: string
  name: string
  description: string
  status: AgentStatus
  capabilities: string[]
  lastActiveAt: string
}

// ── Navigation ──────────────────────────────────────────────

export interface NavItem {
  title: string
  href: string
  icon: string
  badge?: string | number
}
