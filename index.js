const express = require("express");
const cors = require("cors");
const customerDummy = require("./dummy/customerDummy");
const app = express();

app.use(cors());

app.get("/customers", function (req, res) {
  res.send(customerDummy);
});
app.get("/customer/:id", function (req, res) {
  let customer = customerDummy.find((c) => c.id == req.params.id);
  res.send(customer);
});

app.listen(3000);
