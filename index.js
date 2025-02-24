const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Use Railway's assigned port

app.get("/", (req, res) => {
  res.send("Hello, Mutual Fund Advisor is live!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
