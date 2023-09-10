import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: '9c5b1193-b357-4712-897f-2148c44bac86', // Get this from tina.io
  token: 'bffef33d709240af76fe4af7069700db22d907bd', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name:'blog',
        label: 'blogs',
        path: 'src/pages/blogs',
        fields: [
          {
            type: 'string',
            name:'title',
            label:'标题',
            isTitle: true,
            required: true
          },
          {
            type: 'rich-text',
            name: 'body',
            label: '正文',
            isBody: true,
          },
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
