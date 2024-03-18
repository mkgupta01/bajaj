const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/bhfl", (req, res) => {
  const arr = req.body;
  var data = {
    name: "Mayank Kumar Gupta",
    email: "mayank1946.be21@chitkara.edu.in",
    roll_number: 2110991946,
    odd_number: [],
    even_number: [],
    alphabet: [],
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      data.even_number.push(arr[i]);
    } else {
      data.odd_number.push(arr[i]);
    }
    if (arr[i] >= 65 && arr[i] <= 90) {
      data.alphabet.push(arr[i]);
    }
  }
  res.status(200).json({
    is_success: true,
    data: data,
  });
});

app.listen(8080, function () {
  console.log("Server is running on 8080");
});
