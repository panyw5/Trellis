#!/usr/bin/env node

/**
 * Cross-platform script to remove the CLI dist/ directory before rebuild.
 *
 * This prevents deleted template files from lingering in dist/templates/
 * and being shipped by `trellis init` after they have been removed from src/.
 */

import { existsSync, rmSync } from "node:fs";

const DIST_DIR = "dist";

if (existsSync(DIST_DIR)) {
  rmSync(DIST_DIR, { recursive: true, force: true });
  console.log("Removed dist/");
} else {
  console.log("dist/ does not exist, nothing to clean");
}
