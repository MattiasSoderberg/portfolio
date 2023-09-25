import { SanityValues } from "../../sanity.config";
import { client } from "../../sanity/lib/client";

type DataObject = {
  projects: SanityValues["project"][];
  landingContent: SanityValues["landingContent"];
};

const getData = async () => {
  const projects: SanityValues["project"][] = await client.fetch(
    `*[_type == "project"]`
  );
  const landingContent: SanityValues["landingContent"][] = await client.fetch(
    `*[_type == "landingContent"]`
  );

  const returnObject: DataObject = {
    projects,
    landingContent: landingContent[0],
  };

  return returnObject;
};

export default getData;
