const path = require("path")
const fs = require("fs")

const uniq = (arr) => arr.filter((elem, pos, a) => a.indexOf(elem) === pos)
const reversePathsToWalk = (folder) => {
  const resolved = path.resolve(folder)
  const parts = resolved.split(path.sep)
  const results = parts.map((_, idx, arr) =>
    arr.slice(0, idx + 1).join(path.sep)
  )
  results[0] = results[0] || "/"
  return results.reverse()
}

const configLookup = (file, folder) =>
  uniq(reversePathsToWalk(folder).map((p) => path.join(p, file)))

class ConfigResolver {
  constructor(configFile) {
    this.configFile = configFile
  }

  async resolve(from) {
    const configCandidates = configLookup(this.configFile, from)
    for (const candidate of configCandidates) {
      if (fs.existsSync(candidate)) {
        return import(candidate).then((mod) => mod.default)
      }
    }
    return {}
  }
}

const resolve = (cwd) => new ConfigResolver("atoms.config.js").resolve(cwd)

module.exports = { resolve }
