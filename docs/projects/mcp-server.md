---
name: "Self-describing MCP server"
order: 1
oneliner: "An MCP server that lets AI agents build on an enterprise workflow platform."
stack: [C#, .NET, MCP, Python, Playwright]
code: private
note: "Built at Akcelita. Public demo coming."
---

## Problem

Every new platform capability meant another hand-written tool, and agents only knew what they were given.

## What I built

A fixed set of generic verbs plus one introspection call over a declarative registry. The agent asks the system what exists and composes it. To tune the prompts, I built a benchmark: a hermetic agent runs the same task under each prompt version, a deterministic scorer grades the result, and a leaderboard shows the winner. I ran more than 30 experiments on it.

## The hard part

Keeping the tool surface fixed while the platform grows. Adding a capability can't mean adding a tool.
