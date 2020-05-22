const express = require("express");
const { PythonShell } = require("python-shell");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 4000;

app.get("/getDemand", (req, res) => {
  const pyshell = new PythonShell("script.py");

  pyshell.on("message", function (message) {
    res.send(message);
  });
});

app.post("/retrain", (req, res) => {
  const pyshell = new PythonShell("script1.py");

  console.log(req.body);

  pyshell.send(req.body);

  pyshell.on("message", function (message) {
    res.send(message);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
