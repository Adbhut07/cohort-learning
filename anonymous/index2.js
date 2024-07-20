const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  //const kidneyLength = kidneys.length;

  res.send({ response });
});

app.use(function (err, req, res, next) {
  res.json({ msg: "Sorry something up with our server!" });
});

app.listen(3000);
