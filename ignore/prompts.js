const prompts = [
  {
    frontMatterPath: "/tags",
    inquirer: {
      type: "checkbox",
      name: "fooPrompt",
      message: "Foo message:",
      choices: [
        {
          name: "Asdf choice",
          value: "asdfChoice",
        },
      ],
    },
    usages: ["front matter"],
  },
  {
    frontMatterPath: "/tags/-",
    inquirer: {
      type: "rawlist",
      name: "barPrompt",
      message: "Bar message:",
      choices: [
        {
          name: "Pippo choice",
          value: "pippoChoice",
        },
      ],
    },
    usages: ["front matter"],
  },
];

export default prompts;
