require("./cycle.js")
const orga = require("orga")
const _ = require("lodash")
const fs = require("fs")
const data = fs.readFileSync("./data.org").toString()
const ast = orga.parse(data)

console.log(JSON.stringify(JSON.decycle(ast), {}, 2))
