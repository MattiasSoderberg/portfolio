import { type SchemaTypeDefinition } from "sanity";

import project from "./schemas/project";
import landingContent from "./schemas/landingContent";

export const schema = {
  types: [project, landingContent],
};
