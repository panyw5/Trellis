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
export const mathPhysicsDefinitionsIndexContent: string = readLocalTemplate(
  "spec/math-physics/definitions/index.md.txt",
);
export const mathPhysicsDefinitionsNotationContent: string = readLocalTemplate(
  "spec/math-physics/definitions/naming-and-notation.md.txt",
);
export const mathPhysicsDefinitionsCanonicalContent: string = readLocalTemplate(
  "spec/math-physics/definitions/canonical-representations.md.txt",
);
export const mathPhysicsCoreTestsIndexContent: string = readLocalTemplate(
  "spec/math-physics/core-tests/index.md.txt",
);
export const mathPhysicsCoreTestsQualityContent: string = readLocalTemplate(
  "spec/math-physics/core-tests/quality-and-regression.md.txt",
);
export const mathPhysicsCoreTestsCoverageContent: string = readLocalTemplate(
  "spec/math-physics/core-tests/interface-and-coverage.md.txt",
);
export const mathPhysicsMathTestsIndexContent: string = readLocalTemplate(
  "spec/math-physics/math-tests/index.md.txt",
);
export const mathPhysicsMathTestsSpecialCasesContent: string =
  readLocalTemplate("spec/math-physics/math-tests/special-cases.md.txt");
export const mathPhysicsMathTestsLiteratureContent: string = readLocalTemplate(
  "spec/math-physics/math-tests/literature-crosscheck.md.txt",
);
export const mathPhysicsPhyTestsIndexContent: string = readLocalTemplate(
  "spec/math-physics/phy-tests/index.md.txt",
);
export const mathPhysicsPhyTestsObservablesContent: string = readLocalTemplate(
  "spec/math-physics/phy-tests/observables-and-symmetries.md.txt",
);
export const mathPhysicsPhyTestsLimitsContent: string = readLocalTemplate(
  "spec/math-physics/phy-tests/limits-and-consistency.md.txt",
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
