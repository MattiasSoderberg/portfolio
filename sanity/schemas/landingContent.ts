import { defineField, defineType } from "sanity";

export default defineType({
  name: "landingContent",
  title: "Landing Content",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
    }),
  ],
});
