import express from "express"

const app = express()
const port = Number(process.env.PORT) || 6000

app.get("/", (request, response) => {
  response.send("Express + TypeScript Server")
})
app.listen(port, "0.0.0.0", () => {
  console.log("Backend running");
});