/**
 * ✏️  THE ONLY FILE YOU EVER NEED TO EDIT BY HAND (and even that is optional).
 *
 * Photos and videos are discovered automatically. Use this file to:
 *   • give a photo/video a caption
 *   • set/fix its date when the photo has no EXIF metadata
 *     (WhatsApp & social apps strip metadata — originals from your
 *      camera roll keep it)
 *   • hide a file without deleting it
 *
 * The key is the file's original filename. All fields are optional:
 *
 *   "2025-08-14_beach.jpg": {
 *     caption: "First beach day",
 *     dateOverride: "2025-08-14",   // YYYY-MM-DD — wins over EXIF
 *     hidden: false,
 *   },
 */

export const MEDIA_OVERRIDES: Record<
  string,
  { caption?: string; dateOverride?: string; hidden?: boolean }
> = {
  "winston-hat-smile.jpeg": { caption: "The birthday grin", dateOverride: "2026-07-14" },
  "winston-tongue.jpeg": { caption: "Tongue out, living best life", dateOverride: "2026-07-14" },
  "winston-balloon.jpeg": { caption: "One whole year", dateOverride: "2026-07-14" },
  "winston-jump.jpeg": { caption: "Pure joy in motion", dateOverride: "2026-07-14" },
  "winston-sunbathing.jpeg": { caption: "Sunbathing champion" },
  "winston-couch-side.jpeg": { caption: "Beard game strong" },
  "winston-antler-1.jpeg": { caption: "Antler, obtained" },
  "winston-hat-sit.jpeg": { caption: "Dignified party guest", dateOverride: "2026-07-14" },
  "winston-grin.jpeg": { caption: "Say cheese!", dateOverride: "2026-07-14" },
  "winston-sausage-nap.jpeg": { caption: "Napping with sausage friends" },
  "winston-cozy-profile.jpeg": { caption: "Cozy profile study" },
  "winston-antler-2.jpeg": { caption: "Serious antler business" },
  "winston-swing.jpeg": { caption: "Swing-set snuggles" },
  "winston-sausage-toys.jpeg": { caption: "Guarding the squad" },
  "winston-shark.jpeg": { caption: "Shark-attack Sunday" },
  "winston-lookup.jpeg": { caption: "Is that cake?", dateOverride: "2026-07-14" },
  "winston-profile.jpeg": { caption: "Regal profile", dateOverride: "2026-07-14" },
  "winston-hat-back.jpeg": { caption: "Contemplating the balloon", dateOverride: "2026-07-14" },
  "winston-raincoat.jpeg": { caption: "Rainy-day yellow" },
  "winston_B6F4B376.jpg": { caption: "CEO of Shark Corp" },
  "winston_7CBFDB42.jpg": { caption: "Pintjes met me papah" },
  "winston_77851332.jpg": { caption: "Belly-up bliss" },
  "winston_A8B4BDC1.jpg": { caption: "Donut-bed dreams" },
  "winston_1E117168.jpg": { caption: "Good boy, muddy paws" },
  "winston_53F2953B.jpg": { caption: "Pawprint striker" },
  "winston_CCCD2D58.jpg": { caption: "Toy patrol duty" },
  "winston_21CC33C4.jpg": { caption: "Lantern-lit longing" },
  "winston_6857E528.jpg": { caption: "Crate-cave cozy" },
  "winston_AD55EB3E.jpg": { caption: "Bow-tie gentleman" },
  "winston_79407E9A.jpg": { caption: "Buzz-worthy bee" },
  "winston_7366641E.jpg": { caption: "First snow face" },
  "winston_B7C0F4A9.jpg": { caption: "The classic pose" },
  "winston_DA7AD943.jpg": { caption: "With oma" },
  "winston_E201976C.jpg": { caption: "Sneaky side-eye" },
  "winston_878922A8.jpg": { caption: "Family selfie" },
};
