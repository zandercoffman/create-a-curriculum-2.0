import type { PromptSchema } from "./types";

import { curriculumPrompts } from "./categories/curriculum";
import { shoppingPrompts } from "./categories/shopping";
import { learningPrompts } from "./categories/learning";
import { studyingPrompts } from "./categories/studying";
import { planningPrompts } from "./categories/planning";
import { activitiesPrompts } from "./categories/activities";
import { customPrompts } from "./categories/custom";

export const allPrompts: PromptSchema[] = [
  ...curriculumPrompts,
  ...shoppingPrompts,
  ...learningPrompts,
  ...studyingPrompts,
  ...planningPrompts,
  ...activitiesPrompts,
  ...customPrompts,
];

export {
  curriculumPrompts,
  shoppingPrompts,
  learningPrompts,
  studyingPrompts,
  planningPrompts,
  activitiesPrompts,
  customPrompts,
};
