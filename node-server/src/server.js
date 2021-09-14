const app = require("./app")
const port = 4000

app.listen(port, () => console.log(`The server is listening on port ${port}`))

const color = require("chalk")

app.listen(port, () =>
    console.log(`The server is listning on port ${color.green(port)}`)
)