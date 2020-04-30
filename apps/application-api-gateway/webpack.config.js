const { textSync } = require("figlet")

const applicationName = "Application\nApi Gateway"

const asciiOutput = textSync(applicationName, {
  font: "Ansi Shadow",
  horizontalLayout: "default",
  verticalLayout: "default",
})

console.log(`\n${asciiOutput}\n`)

module.exports = (config) => {
  return config
}
