const path = require("path")
const config = require("../../config")

const prompts = [
  {
    type: "input",
    name: "outDir",
    message: "Where is your code?",
    initial: "src",
  },
]

module.exports = {
  prompt: async ({ prompter, args }) => {
    console.log(process.cwd())
    const conf = await config.resolve(process.cwd())
    const answers = await prompter.prompt(
      prompts.filter((p) => !args[p.name] && !conf[p.name])
    )
    console.log(answers)

    const params = { ...conf, ...args, ...answers }
    params.outDir = path.resolve(process.cwd(), params.outDir)
    return params
  },
}
