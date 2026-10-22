export type VariableType =
  | "text"
  | "textarea"
  | "number"
  | "date"
  | "select"
  | "boolean"

export type PromptVariable = {
  label: string
  question: string
  type: VariableType
  placeholder?: string
  options?: string[]
  required?: boolean
}

export interface PromptSchema {
  displayTitle: string
  displayDescription: string
  id: string
  prompt: string
  description: string
  category: string
  variables: Record<string, PromptVariable>
}
