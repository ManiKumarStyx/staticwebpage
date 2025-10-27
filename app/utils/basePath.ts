// Helper function to add base path for GitHub Pages
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}
