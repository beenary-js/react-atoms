const config = require("../../config")

const prompts = [
  {
    type: "input",
    name: "outDir",
    message: "Where do your components live?",
    initial: "src/atoms",
  },
]

module.exports = {
  prompt: async ({ prompter, args }) => {
    const conf = await config.resolve(process.cwd())
    console.log(conf)
    const answers = prompter.prompt(
      prompts.filter((p) => !args[p.name] && !conf[p.name])
    )

    return { ...conf, ...args, ...answers }
  },
}
