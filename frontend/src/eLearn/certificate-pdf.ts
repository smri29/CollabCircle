import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const templatePath = "/Certificate%20Design/CollabCircle%20Certificate%20Template.png";
const fontPath = "/fonts/great-vibes-latin-400-normal.woff";
const pageWidth = 1000;
const pageHeight = 707;

type CertificatePdfData = {
  learnerName: string;
  courseName: string;
  completedDate: string;
  certificateCode: string;
};

async function loadBytes(path: string) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Unable to load certificate asset: ${path}`);
  return response.arrayBuffer();
}

function drawCenteredText(
  page: ReturnType<PDFDocument["addPage"]>,
  text: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  size: number,
  y: number,
  maxWidth: number,
) {
  const initialTextWidth = font.widthOfTextAtSize(text, size);
  const fontSize = initialTextWidth > maxWidth ? Math.max(1, size * maxWidth / initialTextWidth) : size;
  const textWidth = font.widthOfTextAtSize(text, fontSize);

  page.drawText(text, {
    x: (pageWidth - textWidth) / 2,
    y,
    font,
    size: fontSize,
    color: rgb(0.02, 0.02, 0.02),
  });
}

export async function createCertificatePdf(data: CertificatePdfData) {
  const [templateBytes, nameFontBytes] = await Promise.all([
    loadBytes(templatePath),
    loadBytes(fontPath),
  ]);
  const pdf = await PDFDocument.create();

  pdf.registerFontkit(fontkit);

  const page = pdf.addPage([pageWidth, pageHeight]);
  const template = await pdf.embedPng(templateBytes);
  const nameFont = await pdf.embedFont(nameFontBytes);
  const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold);

  page.drawImage(template, {
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
  });

  drawCenteredText(page, data.learnerName, nameFont, 42, 523, 760);
  drawCenteredText(page, data.courseName, boldFont, 28, 395, 760);

  page.drawText(data.completedDate, {
    x: 80,
    y: 133,
    font: boldFont,
    size: 14,
    color: rgb(0.02, 0.02, 0.02),
  });
  page.drawText(`Certificate Code: ${data.certificateCode}`, {
    x: 80,
    y: 113,
    font: boldFont,
    size: 14,
    color: rgb(0.02, 0.02, 0.02),
  });

  return pdf.save();
}
