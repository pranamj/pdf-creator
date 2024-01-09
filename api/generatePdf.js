const fs = require("fs");
const PDFDocument = require("pdfkit");

const doc = new PDFDocument();

const outputStream = fs.createWriteStream(
  path.join(__dirname, "public/output.pdf")
);

doc.pipe(outputStream);

const iconPath = "icon.png";
const pdfWidth = doc.page.width;
const iconWidth = 30;
const iconX = (pdfWidth - iconWidth) / 2;

doc.image(iconPath, iconX, 20, { width: iconWidth });
doc.fontSize(12).text("Hello, this is a sample PDF document!", 50, 80);

doc.end();
outputStream.on("finish", () => {
  console.log("PDF created successfully");
});

outputStream.on("error", (err) => {
  console.error("Error creating PDF:", err);
});
