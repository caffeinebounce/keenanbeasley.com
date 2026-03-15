/**
 * Safelist for @caffeinebounce/ui component classes
 * These classes are used in the shared component library's bundled .mjs output
 * but Tailwind v4's @source directive doesn't scan .mjs files by default.
 *
 * KEEP THIS IN SYNC with classes used by shared components.
 */
export const _safelist = [
  // StepFlow
  "md:grid-cols-12",
  "md:col-span-3",
  "md:inline",
  // LogoGrid
  "grid-cols-2",
  "md:grid-cols-4",
  "md:grid-cols-3",
  "md:grid-cols-5",
  "md:grid-cols-6",
  // Timeline
  "pl-8",
  // Navbar
  "md:flex",
  "md:hidden",
  "md:px-8",
  // Footer variant="brand"
  "md:flex-row",
  "md:py-20",
  // Section spacing
  "md:py-16",
  "md:py-24",
  "md:py-28",
  // Container
  "sm:px-6",
  "lg:px-8",
  // Button
  "dark:bg-input/30",
  "dark:border-input",
  "dark:hover:bg-input/50",
  "dark:aria-invalid:ring-destructive/40",
  // Card
  "dark:from-black/50",
  "dark:to-black/90",
  "dark:bg-white/[0.06]",
  "dark:hover:bg-white/[0.12]",
];
