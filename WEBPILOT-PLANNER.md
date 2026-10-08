# WebPilot Planner

> A living roadmap for building WebPilot ourselves while learning. Update the checkboxes and notes as the project evolves.

## Project vision

WebPilot is a visual automation platform where a user designs a workflow and an AI agent executes it with browsers, APIs, and other tools.

Example direction:

```text
Trigger → open a site → search → collect information → ask AI to analyze it
        → save the result → notify the user
```

The long-term product should make powerful browser-and-tool agents understandable, inspectable, reusable, and safe.

## How we build and learn

- Build the product ourselves; do not copy implementation from tutorials or transcripts.
- Use tutorials/transcripts as curriculum, vocabulary, architecture references, and sources of questions only.
- Learn one concept, implement a small slice, inspect the result, test it, and explain it in our own words.
- Keep tasks bounded. Before each task, define the outcome and what files may change.
- Prefer simple, explicit designs before adding abstractions or infrastructure.
- After meaningful changes: review the diff, run checks, manually verify the feature, and record what was learned.
- Treat security, permissions, retries, observability, and failure states as product features—not later clean-up.
- Keep this file current: check completed items, add short notes, and record decisions or open questions.

## Working loop

```text
Understand → plan a small task → implement → inspect diff → test → explain → commit
```

## Milestones

### M0 — Orientation and project contract

**Goal:** Understand what we are building, how the repository works, and how we will learn.

**Learn:** product decomposition, repository structure, Git basics, agentic coding workflow, requirements vs implementation.

- [x] Explain WebPilot’s core user journey in our own words.
- [x] Map the current folders and identify where UI, hooks, libraries, and public assets belong.
- [x] Read the project guidance and confirm the local development/test commands.
- [x] Make the first small, bounded change and review its diff together.
- [x] Record the first architecture questions and decisions below.

**Notes / decisions:**

- Built core app shell using shadcn/ui and Next.js App Router with unified navigation and header.

### M1 — Foundation and product shell

**Goal:** Establish a clean, understandable app shell before building complex behavior.

**Learn:** Next.js App Router, TypeScript, server/client boundaries, Tailwind, shadcn/ui, component composition, accessibility, Git workflow.

- [x] Define the initial pages and navigation.
- [x] Establish a small visual language: layout, spacing, typography, colors, and states.
- [x] Build the first usable dashboard/workspace shell.
- [x] Add loading, empty, error, and responsive states where relevant.
- [x] Run lint/type checks and understand the important warnings.

### M2 — Workflow-builder experience

**Goal:** Let a user describe a workflow visually, even before it can execute.

**Learn:** graph data structures, React Flow-style editors, controlled state, node/edge modeling, selection, forms, validation, undo/redo considerations.

- [ ] Define the workflow, node, edge, and configuration types.
- [ ] Render a canvas with a small set of node types.
- [ ] Add create, connect, select, move, edit, and delete interactions.
- [ ] Add a node configuration panel with clear validation.
- [ ] Show an understandable empty state and an example workflow.
- [ ] Decide how workflows are serialized and versioned.

### M3 — Persistence and user-owned workflows

**Goal:** Save workflows so the builder becomes a real product rather than a temporary demo.

**Learn:** data modeling, PostgreSQL, Prisma or equivalent ORM, migrations, CRUD APIs, authentication, authorization, validation, optimistic UI.

- [ ] Choose and document the persistence/auth approach.
- [ ] Create the smallest schema for users, workflows, and workflow versions.
- [ ] Save, load, rename, duplicate, and delete workflows.
- [ ] Ensure users can access only their own data.
- [ ] Handle unsaved changes and failed saves clearly.
- [ ] Add basic test coverage for validation and ownership rules.

### M4 — AI/LLM layer

**Goal:** Introduce AI as a reliable, constrained part of the system.

**Learn:** prompts, structured outputs, tool calling, model boundaries, streaming, token/cost awareness, retries, hallucination controls, evaluation basics.

- [ ] Define the first AI-assisted workflow action with a narrow contract.
- [ ] Add typed input/output schemas and validate model responses.
- [ ] Keep model access behind a small replaceable service boundary.
- [ ] Show progress, errors, and partial results in the UI.
- [ ] Log enough information to debug behavior without exposing secrets.
- [ ] Create a few repeatable examples to evaluate quality.

### M5 — Workflow engine and agent loop

**Goal:** Execute a saved workflow deterministically and make its state visible.

**Learn:** interpreters/state machines, execution context, dependency ordering, agent loops, tool contracts, idempotency, timeouts, retries, cancellation, error recovery.

- [ ] Define execution states, events, run IDs, and result formats.
- [ ] Execute a minimal linear workflow from start to finish.
- [ ] Pass typed data between nodes through an execution context.
- [ ] Add validation before a run begins.
- [ ] Add pause/cancel/retry behavior with safe boundaries.
- [ ] Persist run history and make each step inspectable.
- [ ] Test success, failure, timeout, and retry paths.

### M6 — Browser automation and tool system

**Goal:** Give workflows useful real-world capabilities through safe, explicit tools.

**Learn:** browser automation, selectors and page state, APIs, tool schemas, permissions, secrets, sandboxing, rate limits, prompt injection, safe automation.

- [ ] Define a common tool interface and capability/permission model.
- [ ] Implement one browser action end to end.
- [ ] Add a small, explicit tool registry rather than hidden magic.
- [ ] Handle navigation failure, changing pages, timeouts, and rate limits.
- [ ] Keep credentials out of source code, logs, and client bundles.
- [ ] Show the user what the agent is about to do and what it did.
- [ ] Document known browser and security limitations.

### M7 — Realtime execution experience

**Goal:** Make a running workflow feel observable and trustworthy.

**Learn:** background jobs, queues, realtime events, WebSockets/SSE, polling tradeoffs, event schemas, logs, tracing, notifications.

- [ ] Move long-running work out of the request/response path.
- [ ] Stream run status and step events to the workspace.
- [ ] Add an execution timeline with inputs, outputs, and errors.
- [ ] Support reconnects and refreshes without losing run state.
- [ ] Add basic structured logs and health/error visibility.
- [ ] Define retention and cleanup rules for run data.

### M8 — Product hardening and usable beta

**Goal:** Turn the prototype into a small, dependable product.

**Learn:** testing strategy, performance, accessibility, threat modeling, deployment, environment configuration, monitoring, UX iteration, documentation.

- [ ] Add unit, integration, and focused end-to-end tests for critical paths.
- [ ] Review authentication, authorization, secrets, tool permissions, and abuse cases.
- [ ] Improve keyboard navigation, screen-reader labels, and mobile/responsive behavior.
- [ ] Add rate limits, sensible quotas, and cost controls.
- [ ] Create setup, architecture, troubleshooting, and user documentation.
- [ ] Deploy a test environment and verify the full workflow path.
- [ ] Gather feedback from a small set of real tasks and prioritize fixes.

### M9 — WebPilot 2.0 / Hermes-like direction

**Goal:** Explore a more capable personal agent platform after the core system is stable.

This is a direction, not an implementation promise. We earn it by making the fundamentals reliable first.

**Possible capabilities:**

- [ ] Persistent user context and carefully scoped memory.
- [ ] Reusable skills/playbooks composed from verified tools and workflows.
- [ ] Multi-step planning with a visible plan the user can approve or edit.
- [ ] Browser, API, files, notifications, and other tools behind one permission model.
- [ ] Human-in-the-loop checkpoints for sensitive or irreversible actions.
- [ ] Scheduling, triggers, recurring tasks, and resumable runs.
- [ ] Multi-agent or specialist delegation only where it improves reliability.
- [ ] Strong audit history: what was planned, what ran, what changed, and why.
- [ ] Evaluation suites for task success, safety, cost, and regression detection.
- [ ] A plugin/skill ecosystem with versioning, isolation, and trust boundaries.

## Definition of progress

A milestone is complete when:

- [ ] The feature works in the intended user flow.
- [ ] The main failure state is handled clearly.
- [ ] The implementation is understandable enough for us to explain.
- [ ] Relevant checks/tests pass.
- [ ] The diff has been reviewed and unrelated files were not changed.
- [ ] We have written down the important lesson or decision.

## Current focus

**Milestone:** M2 — Workflow-builder experience  
**Next small task:** Define node & edge schemas and canvas architecture for the workflow visual builder.  
**Last updated:** 2026-10-08

## Architecture decisions and open questions

| Date | Decision / question | Reason or next action |
|---|---|---|
| 2026-10-08 | Build from first principles; tutorials are curriculum/reference only. | Keep learning and implementation ownership with us. |
| 2026-10-08 | Start with a visual workflow product, then add execution, tools, and AI incrementally. | Keeps the system understandable and testable. |
| 2026-10-08 | Completed M1 app shell (Dashboard, Workflows, Agents, Runs, Settings, Domain types). | Establishes coherent UI foundation and navigation before canvas complexity. |


