import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";

const getImageUrl = (image: any) => {
  const builder = imageUrlBuilder(client);
  const url = builder.image(image).url();

  return url;
};

export default getImageUrl;
