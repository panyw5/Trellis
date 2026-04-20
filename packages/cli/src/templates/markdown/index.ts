/**
 * Markdown templates for Trellis workflow
 *
 * These are GENERIC templates for new projects.
 * Structure templates use .md.txt extension as they are generic templates.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Read a template file from src/templates/markdown/
 */
function readLocalTemplate(filename: string): string {
  const filePath = join(__dirname, filename);
  return readFileSync(filePath, "utf-8");
}

// =============================================================================
// Root files for new projects
// =============================================================================

export const agentsMdContent: string = readLocalTemplate("agents.md");

// Workspace index template (developer work records)
export const workspaceIndexContent: string =
  readLocalTemplate("workspace-index.md");

// Backwards compatibility alias
export const agentProgressIndexContent = workspaceIndexContent;

// Gitignore (template file - .gitignore is ignored by npm)
export const workflowGitignoreContent: string =
  readLocalTemplate("gitignore.txt");

// =============================================================================
// Structure templates (generic templates from .txt files)
// These are NOT dogfooded - they are generic templates for new projects
// =============================================================================

// Backend structure (multi-doc format)
export const backendIndexContent: string = readLocalTemplate(
  "spec/backend/index.md.txt",
);
export const backendDirectoryStructureContent: string = readLocalTemplate(
  "spec/backend/directory-structure.md.txt",
);
export const backendDatabaseGuidelinesContent: string = readLocalTemplate(
  "spec/backend/database-guidelines.md.txt",
);
export const backendLoggingGuidelinesContent: string = readLocalTemplate(
  "spec/backend/logging-guidelines.md.txt",
);
export const backendQualityGuidelinesContent: string = readLocalTemplate(
  "spec/backend/quality-guidelines.md.txt",
);
export const backendErrorHandlingContent: string = readLocalTemplate(
  "spec/backend/error-handling.md.txt",
);

// Frontend structure (multi-doc format)
export const frontendIndexContent: string = readLocalTemplate(
  "spec/frontend/index.md.txt",
);
export const frontendDirectoryStructureContent: string = readLocalTemplate(
  "spec/frontend/directory-structure.md.txt",
);
export const frontendTypeSafetyContent: string = readLocalTemplate(
  "spec/frontend/type-safety.md.txt",
);
export const frontendHookGuidelinesContent: string = readLocalTemplate(
  "spec/frontend/hook-guidelines.md.txt",
);
export const frontendComponentGuidelinesContent: string = readLocalTemplate(
  "spec/frontend/component-guidelines.md.txt",
);
export const frontendQualityGuidelinesContent: string = readLocalTemplate(
  "spec/frontend/quality-guidelines.md.txt",
);
export const frontendStateManagementContent: string = readLocalTemplate(
  "spec/frontend/state-management.md.txt",
);

// Math-physics research structure
export const mathPhysicsObjectsIndexContent: string = readLocalTemplate(
  "spec/math-physics/objects/index.md.txt",
);
export const mathPhysicsObjectsNamingContent: string = readLocalTemplate(
  "spec/math-physics/objects/naming-and-notation.md.txt",
);
export const mathPhysicsObjectsCanonicalContent: string = readLocalTemplate(
  "spec/math-physics/objects/canonical-representations.md.txt",
);
export const mathPhysicsAlgorithmsIndexContent: string = readLocalTemplate(
  "spec/math-physics/algorithms/index.md.txt",
);
export const mathPhysicsAlgorithmsDesignContent: string = readLocalTemplate(
  "spec/math-physics/algorithms/algorithm-design.md.txt",
);
export const mathPhysicsAlgorithmsComplexityContent: string = readLocalTemplate(
  "spec/math-physics/algorithms/complexity-and-scaling.md.txt",
);
export const mathPhysicsVerificationIndexContent: string = readLocalTemplate(
  "spec/math-physics/verification/index.md.txt",
);
export const mathPhysicsVerificationSpecialCasesContent: string =
  readLocalTemplate("spec/math-physics/verification/special-cases.md.txt");
export const mathPhysicsVerificationLiteratureContent: string =
  readLocalTemplate(
    "spec/math-physics/verification/literature-crosscheck.md.txt",
  );
export const mathPhysicsExperimentsIndexContent: string = readLocalTemplate(
  "spec/math-physics/experiments/index.md.txt",
);
export const mathPhysicsExperimentsParameterSweepsContent: string =
  readLocalTemplate("spec/math-physics/experiments/parameter-sweeps.md.txt");
export const mathPhysicsExperimentsFailureCaptureContent: string =
  readLocalTemplate("spec/math-physics/experiments/failure-capture.md.txt");
export const mathPhysicsWritingIndexContent: string = readLocalTemplate(
  "spec/math-physics/writing/index.md.txt",
);
export const mathPhysicsWritingProofStyleContent: string = readLocalTemplate(
  "spec/math-physics/writing/theorem-proof-style.md.txt",
);
export const mathPhysicsWritingCitationsContent: string = readLocalTemplate(
  "spec/math-physics/writing/citation-and-references.md.txt",
);

// Guides structure
export const guidesIndexContent: string = readLocalTemplate(
  "spec/guides/index.md.txt",
);
export const guidesCrossLayerThinkingGuideContent: string = readLocalTemplate(
  "spec/guides/cross-layer-thinking-guide.md.txt",
);
export const guidesCodeReuseThinkingGuideContent: string = readLocalTemplate(
  "spec/guides/code-reuse-thinking-guide.md.txt",
);
export const guidesAbstractionToComputationContent: string = readLocalTemplate(
  "spec/math-physics/guides/abstraction-to-computation.md.txt",
);
export const mathPhysicsGuidesIndexContent: string = readLocalTemplate(
  "spec/math-physics/guides/index.md.txt",
);
export const guidesConjectureValidationContent: string = readLocalTemplate(
  "spec/math-physics/guides/conjecture-validation.md.txt",
);
export const guidesReuseExistingConstructionsContent: string =
  readLocalTemplate(
    "spec/math-physics/guides/reuse-existing-constructions.md.txt",
  );
