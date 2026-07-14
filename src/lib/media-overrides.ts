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
  // --- Batch added via Claude (dates are ESTIMATES from photo content — please verify/correct) ---
  "winston-newborn-pile.jpg": { caption: "Day one: the whole squad", dateOverride: "2025-07-31" },
  "winston-first-cuddle.jpg": { caption: "First cuddle, instant deal", dateOverride: "2025-08-23" },
  "winston-lap-wink.jpg": { caption: "Already winking at the camera", dateOverride: "2025-08-23" },
  "winston-nose-kiss.jpg": { caption: "Nose-to-nose negotiations", dateOverride: "2025-09-23" },
  "winston-toy-squad-nap.jpg": { caption: "Fell asleep on guard duty", dateOverride: "2025-11-15" },
  "winston-bag-commute.jpg": { caption: "Traveling first class", dateOverride: "2025-09-17" },
  "winston-cart-smuggle.jpg": { caption: "Rules are for other dogs", dateOverride: "2025-10-05" },
  "winston-tartan-chew.jpg": { caption: "Paw: it's what's for dinner", dateOverride: "2025-10-09" },
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
  // --- Batch 2 via Claude (dates are ESTIMATES — please verify/correct) ---
  "winston-with-littermates.jpg": { caption: "Mama and the whole litter", dateOverride: "2025-08-10" },
  "winston-breeder-garden.jpg": { caption: "First taste of grass", dateOverride: "2025-08-20" },
  "winston-gotcha-day.jpg": { caption: "Gotcha day: the ride home", dateOverride: "2025-09-12" },
  "winston-baby-belly.jpg": { caption: "Fluff overload, send help", dateOverride: "2025-09-18" },
  "winston-puppy-eyes.jpg": { caption: "Weaponized puppy eyes", dateOverride: "2025-09-28" },
  "winston-pepperponi.jpg": { caption: "Pepperponi ❤️", dateOverride: "2025-10-08" },
  "winston-bunny-nap.jpg": { caption: "Co-pilot, off duty", dateOverride: "2025-10-15" },
  "winston-stitch-mode.jpg": { caption: "Experiment 626: Winston", dateOverride: "2025-10-31" },
  "winston-grandpa-time.jpg": { caption: "Quality time with opa", dateOverride: "2025-11-16" },
  "winston-toy-hoard.jpg": { caption: "One dog to hoard them all", dateOverride: "2025-12-05" },
  "winston-tartan-dreams.jpg": { caption: "Wrapped up for winter", dateOverride: "2025-12-20" },
  "winston-tweed-coat.jpg": { caption: "Tweed season, obviously", dateOverride: "2026-01-08" },
  "winston-snow-sprint.jpg": { caption: "Full speed through the snow", dateOverride: "2026-01-12" },
  "winston-city-stroll.jpg": { caption: "Met de manne", dateOverride: "2026-01-25" },
  "winston-cafe-lap.jpg": { caption: "Best seat on the terrace", dateOverride: "2026-02-15" },
  "winston-desk-buddy.jpg": { caption: "Chief of staff, napping division", dateOverride: "2026-03-10" },
  "winston-couch-royalty.jpg": { caption: "Throne acquired", dateOverride: "2026-06-05" },
  "winston-road-trip-grin.jpg": { caption: "Are we there yet?!", dateOverride: "2026-05-20" },
  "winston-shark-jacket.jpg": { caption: "Baby shark, doo doo", dateOverride: "2026-06-20" },
  "winston-lifeguard-duty.jpg": { caption: "Certified beach lifeguard", dateOverride: "2026-06-20"},
};
