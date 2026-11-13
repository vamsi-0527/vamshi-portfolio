export type Project = {
  slug: string
  number: string
  title: string
  category: string
  summary: string
  description: string
  stack: string[]
  accent: 'teal' | 'violet' | 'amber'
  status: string
  repo: string
  demo?: string
  problem: string
  approach: string[]
  architecture: { label: string; detail: string }[]
  challenges: string[]
  outcomes: string[]
  limitations: string[]
}
