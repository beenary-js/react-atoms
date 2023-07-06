#!/usr/bin/env node

const path = require("path")
const hygen = require("hygen")

const templates = path.join(__dirname, "./templates")

hygen
  .runner(process.argv.slice(2), {
    templates,
    cwd: process.cwd(),
    logger: new hygen.Logger(console.log.bind(console)),
    debug: !!process.env.DEBUG,
    exec: (action, body) => {
      const opts = body && body.length > 0 ? { input: body } : {}
      return require("execa").command(action, { ...opts, shell: true })
    },
    createPrompter: () => require("enquirer"),
  })
  .then(({ success }) => process.exit(success ? 0 : 1))
