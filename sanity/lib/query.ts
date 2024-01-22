import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"]`;
export const landingContentQuery = groq`*[_type == "landingContent"]`;
