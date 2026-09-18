import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CLAUDE.md is this project's hand-authored design/dev rulebook (see repo root) —
  // disable Next.js 16's automatic "agent rules" injection so `next dev` doesn't append to it.
  agentRules: false,
};

export default nextConfig;
