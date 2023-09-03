import { defineField, defineType } from "@sanity-typed/types";

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
    defineField({
      name: "landingFooter",
      title: "Landing Footer",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        }),
        defineField({
          name: "text",
          title: "Footer text",
          type: "text",
        }),
        defineField({
          name: "buttonText",
          title: "Footer Button text",
          type: "string",
        }),
      ],
    }),
  ],
});
