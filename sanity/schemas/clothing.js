export default {
  name: "clothing",
  title: "Clothing",
  type: "document",
  fields: [
    {
      name: "images",
      title: "images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required().min(2).max(5),
    },
    {
      name: "name",
      title: "Clothing Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gender",
      title: "Gender",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Men", value: "men" },
          {
            title: "Women",
            value: "women",
          },
        ],
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
