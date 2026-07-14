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
  "winston-sunbathing.jpeg": { caption: "Sunbathing champion", dateOverride: "2026-05-01" },
  "winston-couch-side.jpeg": { caption: "Beard game strong", dateOverride: "2026-05-08" },
  "winston-antler-1.jpeg": { caption: "Antler, obtained", dateOverride: "2026-06-27" },
  "winston-hat-sit.jpeg": { caption: "Dignified party guest", dateOverride: "2026-07-14" },
  "winston-grin.jpeg": { caption: "Say cheese!", dateOverride: "2026-07-14" },
  "winston-sausage-nap.jpeg": { caption: "Napping with sausage friends", dateOverride: "2026-04-24" },
  "winston-cozy-profile.jpeg": { caption: "Cozy profile study" , dateOverride: "2026-04-12"},
  "winston-antler-2.jpeg": { caption: "Serious antler business", dateOverride: "2026-06-27" },
  "winston-swing.jpeg": { caption: "Swing-set snuggles", dateOverride: "2026-04-07" },
  "winston-sausage-toys.jpeg": { caption: "Guarding the squad", dateOverride: "2026-04-24" },
  "winston-shark.jpeg": { caption: "Shark-attack Sunday", dateOverride: "2026-03-16" },
  "winston-lookup.jpeg": { caption: "Is that cake?", dateOverride: "2026-07-14" },
  "winston-profile.jpeg": { caption: "Regal profile", dateOverride: "2026-07-14" },
  "winston-hat-back.jpeg": { caption: "Contemplating the balloon", dateOverride: "2026-07-14" },
  "winston-raincoat.jpeg": { caption: "Rainy-day yellow" , dateOverride: "2026-01-22"},
  "winston_B6F4B376.jpeg": { caption: "CEO of Shark Corp" , dateOverride: "2026-04-01"},
  "winston_7CBFDB42.jpeg": { caption: "Pintjes met me papah" , dateOverride: "2026-03-05"},
  "winston_77851332.jpeg": { caption: "Belly-up bliss" , dateOverride: "2026-03-05"},
  "winston_A8B4BDC1.jpeg": { caption: "Donut-bed dreams", dateOverride: "2026-02-17" },
  "winston_1E117168.jpeg": { caption: "Good boy, muddy paws" , dateOverride: "2026-02-14"},
  "winston_53F2953B.jpeg": { caption: "Pawprint striker", dateOverride: "2026-02-12" },
  "winston_CCCD2D58.jpeg": { caption: "Toy patrol duty", dateOverride: "2026-02-12" },
  "winston_21CC33C4.jpeg": { caption: "Lantern-lit longing", dateOverride: "2026-02-12"},
  "winston_6857E528.jpeg": { caption: "Crate-cave cozy", dateOverride: "2026-02-09" },
  "winston_AD55EB3E.jpeg": { caption: "Bow-tie gentleman", dateOverride: "2025-12-27" },
  "winston_79407E9A.jpeg": { caption: "Buzz-worthy bee", dateOverride: "2026-01-22" },
  "winston_7366641E.jpeg": { caption: "First snow face", dateOverride: "2026-01-06" },
  "winston_B7C0F4A9.jpeg": { caption: "The classic pose", dateOverride: "2026-01-24" },
  "winston_DA7AD943.jpeg": { caption: "With oma", dateOverride: "2026-01-01" },
  "winston_E201976C.jpeg": { caption: "Sneaky side-eye", dateOverride: "2025-12-21" },
  "winston_878922A8.jpeg": { caption: "Family selfie", dateOverride: "2025-12-27" },
};
