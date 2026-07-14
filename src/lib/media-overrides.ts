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
 *   "2025-08-14_beach.jpeg": {
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
  "winston_B6F4B376.jpeg": { caption: "CEO of Shark Corp" },
  "winston_7CBFDB42.jpeg": { caption: "Pintjes met me papah" },
  "winston_77851332.jpeg": { caption: "Belly-up bliss" },
  "winston_A8B4BDC1.jpeg": { caption: "Donut-bed dreams" },
  "winston_1E117168.jpeg": { caption: "Good boy, muddy paws" },
  "winston_53F2953B.jpeg": { caption: "Pawprint striker" },
  "winston_CCCD2D58.jpeg": { caption: "Toy patrol duty" },
  "winston_21CC33C4.jpeg": { caption: "Lantern-lit longing" },
  "winston_6857E528.jpeg": { caption: "Crate-cave cozy" },
  "winston_AD55EB3E.jpeg": { caption: "Bow-tie gentleman" },
  "winston_79407E9A.jpeg": { caption: "Buzz-worthy bee" },
  "winston_7366641E.jpeg": { caption: "First snow face" },
  "winston_B7C0F4A9.jpeg": { caption: "The classic pose" },
  "winston_DA7AD943.jpeg": { caption: "With oma" },
  "winston_E201976C.jpeg": { caption: "Sneaky side-eye" },
  "winston_878922A8.jpeg": { caption: "Family selfie" },
  // --- Batch added via Claude (dates are ESTIMATES from photo content — please verify/correct) ---
  "winston-newborn-pile.jpg": { caption: "Day one: the whole squad", dateOverride: "2025-07-20" },
  "winston-first-cuddle.jpg": { caption: "First cuddle, instant deal", dateOverride: "2025-08-30" },
  "winston-lap-wink.jpg": { caption: "Already winking at the camera", dateOverride: "2025-08-30" },
  "winston-nose-kiss.jpg": { caption: "Nose-to-nose negotiations", dateOverride: "2025-09-15" },
  "winston-toy-squad-nap.jpg": { caption: "Fell asleep on guard duty", dateOverride: "2025-09-20" },
  "winston-bag-commute.jpg": { caption: "Traveling first class", dateOverride: "2025-10-05" },
  "winston-cart-smuggle.jpg": { caption: "Rules are for other dogs", dateOverride: "2025-10-12" },
  "winston-tartan-chew.jpg": { caption: "Paw: it's what's for dinner", dateOverride: "2025-10-20" },
  "winston-belly-up-dreams.jpg": { caption: "Maximum trust achieved", dateOverride: "2025-11-08" },
  "winston-grinch-nap.jpg": { caption: "Napping with the Grinch", dateOverride: "2025-12-10" },
  "winston-movie-night.jpg": { caption: "Movie night critic", dateOverride: "2025-12-28" },
  "winston-winter-coat.jpg": { caption: "Dressed for the weather, unimpressed", dateOverride: "2026-01-05" },
  "winston-snow-inspector.jpg": { caption: "Snow: thoroughly inspected", dateOverride: "2026-01-10" },
  "winston-bad-hair-day.jpg": { caption: "Woke up like this", dateOverride: "2026-02-14" },
  "winston-pink-donut-nap.jpg": { caption: "Curled to perfection", dateOverride: "2026-03-01" },
  "winston-showroom-stroll.jpg": { caption: "Interior design consultant", dateOverride: "2026-03-20" },
  "winston-terrace-date.jpg": { caption: "Terrace season opener", dateOverride: "2026-04-25" },
  "winston-floor-flop.jpg": { caption: "Two beds, chose the floor", dateOverride: "2026-05-10" },
  "winston-forest-treats.jpg": { caption: "Forest picnic, treats included", dateOverride: "2026-06-14", },
  "winston-cooling-mat.jpg": { caption: "Summer survival mode", dateOverride: "2026-07-01" },
};
