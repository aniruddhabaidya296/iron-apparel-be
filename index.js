const app = require("./app")
const port = 3000;

module.exports = app.listen(port, async () => {
    console.log(`Server started on http://localhost:${port}`)
})
