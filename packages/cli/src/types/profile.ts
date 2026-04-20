export type InitProfile = "default" | "math-physics";

export function resolveInitProfile(profile?: string): InitProfile {
  if (profile === "math-physics") {
    return profile;
  }

  return "default";
}
