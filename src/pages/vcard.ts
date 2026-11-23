import { readFile } from "node:fs/promises";
import { join } from "node:path";

import sharp from "sharp";
import VCardModule from "vcard-creator";

import { USER } from "@/data/user";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

export async function GET() {
  // vcard-creator is CommonJS; the class may sit on `.default`.
  const VCard = ((VCardModule as unknown as { default?: typeof VCardModule })
    .default ?? VCardModule) as typeof VCardModule;
  const card = new VCard();

  card
    .addName(USER.lastName, USER.firstName)
    .addPhoneNumber(decodePhoneNumber(USER.phoneNumber))
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.email))
    .addURL(USER.website);

  try {
    const avatar = await readFile(join(process.cwd(), "public", USER.avatar));
    const jpeg = await sharp(avatar)
      .resize(256, 256)
      .jpeg({ quality: 85, mozjpeg: true })
      .toBuffer();
    card.addPhoto(jpeg.toString("base64"), "jpeg");
  } catch {
    // Photo is optional.
  }

  if (USER.jobs.length > 0) {
    card.addCompany(USER.jobs[0].company).addJobtitle(USER.jobs[0].title);
  }

  return new Response(card.toString(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  });
}
