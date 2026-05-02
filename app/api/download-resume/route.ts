import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  // 1. Locate the file on the server
  const filePath = path.join(process.cwd(), "public/files/Sarthak_Tambde_Resume_OL.pdf");
  
  // 2. Read the file into memory
  const fileBuffer = fs.readFileSync(filePath);

  // 3. Return the file with specific headers
  return new NextResponse(fileBuffer, {
    headers: {
      // Tells the browser it's a PDF
      "Content-Type": "application/pdf",
      // 'attachment' forces the download, 'filename' sets the name on the user's computer
      "Content-Disposition": "attachment; filename=Sarthak_Suresh_Tambde_Resume.pdf",
    },
  });
}