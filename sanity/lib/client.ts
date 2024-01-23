// import "server-only";
import { createClient, type ClientConfig, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

const config: ClientConfig = {
  apiVersion,
  dataset,
  projectId,
  useCdn: process.env.NODE_ENV === "development" ? true : false,
};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}
