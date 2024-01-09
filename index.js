const express = require("express");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/generate-pdf", (req, res) => {
  const pdfProcess = spawn("node", ["api/generatePdf.js"]);

  pdfProcess.on("close", () => {
    const pdfPath = path.join(__dirname, "output.pdf");
    res.sendFile(pdfPath);
  });
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
