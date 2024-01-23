import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"]`;
export const landingContentQuery = groq`*[_type == "landingContent"]`;
export const oneProjectQuery = groq`*[_type == "project" && slug.current == $slug][0]`;
