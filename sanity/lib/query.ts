import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project" && slug.current != "root"]`;
export const projectRootQuery = groq`*[_type == "project" && slug.current == "root"][0]`;
export const oneProjectQuery = groq`*[_type == "project" && slug.current == $slug][0]`;
export const landingContentQuery = groq`*[_type == "landingContent"][0]`;
