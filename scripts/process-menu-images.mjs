// One-shot image pipeline: PNG → WebP @ ≤800px → public/images/menu/
// Run with: node scripts/process-menu-images.mjs
import sharp from "sharp";
import { mkdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const SRC = "C:/Users/edwar/OneDrive/Pictures/Peblla";
const DEST = "public/images/menu";

// source path (relative to SRC) → output filename (no extension, .webp appended)
const MAP = [
  // All Day Brunch
  ["all day brunch/mozzarellasticks.PNG",       "mozzarella-sticks"],
  ["all day brunch/seasonedtwistedfries.png",   "seasoned-twisted-fries"],
  ["all day brunch/wafflefries.png",            "waffle-fries"],
  ["all day brunch/friedmandu.png",             "fried-mandu"],          // shared: chicken + beef
  ["all day brunch/minidogs.png",               "mini-hot-dogs"],
  ["all day brunch/honeypopcorn.png",           "honey-popcorn-chicken-with-corn-salad"],
  ["all day brunch/chickenpanini.png",          "chicken-panini"],
  ["all day brunch/hampanini.png",              "ham-pepperoni-panini"],
  ["all day brunch/chickenwaffle.png",          "chicken-waffle"],
  ["all day brunch/crispychicken.png",          "crispy-chicken-sandwich-with-fries"],
  ["all day brunch/avocadoblt.png",             "avocado-blt-sandwich"],
  ["all day brunch/chickenblt.png",             "chicken-blt-sandwich"],
  ["all day brunch/clubsandwich.png",           "club-sandwich"],
  ["all day brunch/sotteok.png",                "so-tteok-sausage-ricecake"],

  // All Day Breakfast
  ["alldaybreakfast/creamcheesebagel.png",          "cream-cheese-bagel"],
  ["alldaybreakfast/hambaconeggcheesebagel.png",    "ham-bacon-egg-cheese-bagel"],
  ["alldaybreakfast/hamcheesecroissant.png",        "ham-cheese-croissant"],

  // Coffee & Espresso
  ["coffee&espresso/brewedcoffee.png",          "brewed-coffee"],
  ["coffee&espresso/americano.png",             "americano"],
  ["coffee&espresso/caffelatte.png",            "cafe-latte"],
  ["coffee&espresso/vanillalatte.png",          "vanilla-latte"],
  ["coffee&espresso/hazelnutlatte.png",         "hazelnut-latte"],
  ["coffee&espresso/caramellatte.png",          "caramel-latte"],
  ["coffee&espresso/cappuccino.png",            "cappuccino"],
  ["coffee&espresso/caramelmacchiato.png",      "caramel-macchiato"],
  ["coffee&espresso/caffemocha.png",            "cafe-mocha"],
  ["coffee&espresso/whitemocha.png",            "white-mocha"],
  ["coffee&espresso/cinnamonmocha.png",         "cinnamon-mocha"],
  ["coffee&espresso/mintmocha.png",             "mint-mocha"],
  ["coffee&espresso/dalgonalatte.png",          "dalgona-latte"],
  ["coffee&espresso/roselatte.png",             "rose-latte"],
  ["coffee&espresso/espressomacchiato.png",     "espresso-macchiato"],
  ["coffee&espresso/espressoconpanna.png",      "espresso-con-panna"],
  ["coffee&espresso/pumpkinlatte.png",          "pumpkin-latte"],
  ["coffee&espresso/affogato.png",              "affogato"],
  ["coffee&espresso/horchatalatte.png",         "horchata-latte"],
  ["coffee&espresso/lavenderlatte.PNG",         "lavender-latte"],

  // Single Origin (files live in coffee&espresso subfolder)
  ["coffee&espresso/ethiopianatural.png",       "ethiopia-natural"],
  ["coffee&espresso/guatemalaantigua.png",      "guatemala-antigua"],

  // Specialty Drinks (files live in icedbeverage subfolder)
  ["icedbeverage/strawberrylatte.png",          "strawberry-latte"],
  ["icedbeverage/ubematchalatte.png",           "ube-matcha-latte"],
  ["icedbeverage/mangomatchalatte.png",         "mango-matcha-latte"],
  ["icedbeverage/strawberrymatchalatte.png",    "strawberry-matcha-latte"],
  ["icedbeverage/brownsugarmilktealattewboba.png", "brown-sugar-milk-tea-latte-w-boba"],
  ["icedbeverage/misugaru.png",                 "misugaru"],

  // Hot & Iced Beverage
  ["hot&icedbeverage/matchalatte.PNG",          "matcha-latte"],
  ["hot&icedbeverage/milktealatte.PNG",         "milk-tea-latte"],
  ["hot&icedbeverage/sweetpotatolatte.PNG",     "sweet-potato-latte"],
  ["hot&icedbeverage/tarolatte.PNG",            "taro-latte"],
  ["hot&icedbeverage/spicychailatte.PNG",       "spicy-chai-latte"],
  ["hot&icedbeverage/hotchocolate.PNG",         "hot-chocolate"],
  ["hot&icedbeverage/whitechocolate.PNG",       "white-chocolate"],
  ["hot&icedbeverage/cinnamonchocolate.PNG",    "cinnamon-chocolate"],
  ["hot&icedbeverage/mintchocolate.PNG",        "mint-chocolate"],
  ["hot&icedbeverage/purplesweetpotatolatte.PNG", "purple-sweet-potato-latte"],
  ["hot&icedbeverage/matchalavenderlatte.PNG",  "lavender-matcha-latte"],

  // Iced Beverage
  ["icedbeverage/calamansiade.png",             "calamansi-ade"],
  ["icedbeverage/freshorangejuice.png",         "fresh-orange-juice"],
  ["icedbeverage/tomatojuice.png",              "tomato-juice"],
  ["icedbeverage/watermelonjuice.png",          "watermelon-juice"],
  ["icedbeverage/grapejuice.png",               "grape-juice"],
  ["icedbeverage/orangegrapefruitjuice.png",    "orange-grapefruit-juice"],
  ["icedbeverage/strawberrylemonade.png",       "strawberry-lemonade"],
  ["icedbeverage/italiansodapassionfruit.png",  "italian-soda-passion-fruit"],
  ["icedbeverage/italiansodablackberry.png",    "italian-soda-blackberry"],
  ["icedbeverage/italiansodaraspberry.png",     "italian-soda-raspberry"],
  ["icedbeverage/peachtea.png",                 "peach-tea"],
  ["icedbeverage/pomegranatetea.png",           "pomegranate-tea"],
  ["icedbeverage/bluelemonade.png",             "blue-lemonade"],
  ["icedbeverage/grapefruitade.png",            "grapefruit-ade"],
  ["icedbeverage/strawberryade.png",            "strawberry-ade"],

  // Korean Traditional Tea (files live in tea subfolder)
  ["tea/gingertea.png",                         "ginger"],
  ["tea/honeyplumtea.png",                      "honey-plum"],
  ["tea/citrontea.png",                         "citron"],
  ["tea/jujubetea.png",                         "jujube"],

  // Tea
  ["tea/chamomiletea.png",                      "herb-chamomile"],
  ["tea/pepperminttea.png",                     "herb-peppermint"],
  ["tea/earlgreytea.png",                       "herb-earl-grey"],
  ["tea/englishbreakfasttea.png",               "english-breakfast"],
  ["tea/greentea.png",                          "japanese-sencha-green"],
  ["tea/decafceylontea.png",                    "decaf-ceylon"],
  ["tea/glazedlemonloaftea.png",                "glazed-lemon-loaf"],
  ["tea/hotcinnamonspicetea.png",               "hot-cinnamon-spice"],
  ["tea/organicpeachygreentea.png",             "organic-peachy-green"],
  ["tea/organiccitrongreentea.png",             "organic-citron-green"],
  ["tea/redraspberrytea.png",                   "red-raspberry"],
  ["tea/paristea.png",                          "paris-black"],

  // Espresso Tomnccino
  ["espressotomnccino/espressotomnccino.png",       "coffee-tomnccino"],
  ["espressotomnccino/vanillatomnccino.png",        "vanilla-tomnccino"],
  ["espressotomnccino/carameltomnccino.png",        "caramel-tomnccino"],
  ["espressotomnccino/mochatomnccino.png",          "mocha-tomnccino"],
  ["espressotomnccino/cinnamonmochatomnccino.png",  "cinnamon-mocha-tomnccino"],
  ["espressotomnccino/mintomochatomnccino.png",     "mint-mocha-tomnccino"],

  // Tomnccino
  ["tomnccino/oreotomnccino.png",                   "oreo-tomnccino"],
  ["tomnccino/greenteatomnccino.png",               "green-tea-tomnccino"],
  ["tomnccino/javachiptomnccino.png",               "javachip-tomnccino"],
  ["tomnccino/cinnamonchocolatetomnccino.png",      "cinnamon-chocolate-tomnccino"],
  ["tomnccino/mintochocolatetomnccino.png",         "mint-chocolate-tomnccino"],
  ["tomnccino/walnuttomnccino.png",                 "walnut-tomnccino"],

  // Smoothies
  ["smoothies/strawberrysmoothie.png",              "strawberry-smoothie"],
  ["smoothies/kiwismoothie.png",                    "kiwi-smoothie"],
  ["smoothies/mangosmoothie.png",                   "mango-smoothie"],
  ["smoothies/realfruitmangosmoothie.png",          "real-fruit-mango-smoothie"],
  ["smoothies/realfruitstrawberrysmoothie.png",     "real-fruit-strawberry-smoothie"],
  ["smoothies/realfruitbananasmoothie.png",         "real-fruit-banana-smoothie"],
  ["smoothies/realfruitkiwismoothie.png",           "real-fruit-kiwi-smoothie"],
  ["smoothies/realfruitpeachsmoothie.png",          "real-fruit-peach-smoothie"],
  ["smoothies/realfruitstrawberrybananasmoothie.png", "real-fruit-strawberry-banana-smoothie"],
  ["smoothies/plainyogurtsmoothie.png",             "plain-yogurt-smoothie"],
  ["smoothies/blacksesamesmoothie.png",             "black-sesame-smoothie"],
  ["smoothies/lemongreenapplesmoothie.png",         "lemon-green-apple-smoothie"],

  // Snow Flakes
  ["snowflakes/blacksesamesnowflake.png",           "black-sesame-snow-flake"],
  ["snowflakes/blueberrycheesecakesnowflake.png",   "blueberry-cheesecake-snowflake"],
  ["snowflakes/caramelsnowflake.png",               "caramel-snow-flake"],
  ["snowflakes/greenteasnowflake.png",              "green-tea-snow-flake"],
  ["snowflakes/mangosnowflake.png",                 "mango-snow-flake"],
  ["snowflakes/milksnowflake.png",                  "milk-snow-flake"],
  ["snowflakes/oreosnowflake.png",                  "oreo-snow-flake"],
  ["snowflakes/strawberrysnowflake.png",            "strawberry-snow-flake"],
  ["snowflakes/largeicecream.png",                  "large-ice-cream"],

  // Bread
  ["bread/chocolatebread.png",                      "chocolate-bread"],
  ["bread/cinnamonbread.png",                       "cinnamon-caramel-bread"],
  ["bread/garlicbread.png",                         "garlic-bread"],
  ["bread/honeywalnutbread.png",                    "honey-walnut-bread"],
  ["bread/mixedcheesebread.png",                    "mix-cheese-bread"],

  // Waffle (mini piece-count images are shared across flavors)
  ["waffles/tiramisuwaffle.png",                    "tiramisu-waffle"],
  ["waffles/blueberrycreamcheesewaffle.png",        "blueberry-cream-cheese-waffle"],
  ["waffles/nutellabananawaffles.png",              "nutella-banana-waffle"],
  ["waffles/strawberrywhipcreamwaffle.png",         "strawberry-whip-cream-waffle"],
  ["waffles/belgianwafflewithicecream.png",         "belgian-waffle-with-ice-cream"],
  ["bread/12piece.png",                             "mini-waffle-12"],   // shared: custard/red bean/nutella/taro
  ["bread/8piece.png",                              "mini-waffle-8"],    // shared: custard/red bean/nutella/taro
  ["bread/6piece.png",                              "mini-waffle-6"],    // mini bacon

  // Pretzels
  ["pretzels/buldakpretzel.png",                    "buldak-spicy-chicken-pretzel"],
  ["pretzels/cornpretzel.png",                      "corn-pretzel"],
  ["pretzels/delipretzel.png",                      "deli-pretzel"],
  ["pretzels/hawaiianpretzel.png",                  "hawaiian-pretzel"],
  ["pretzels/originalpretzel.png",                  "original-pretzel"],
  ["pretzels/pepperonipretzel.png",                 "pepperoni-pretzel"],
  ["pretzels/plainpretzel.png",                     "plain-pretzel"],
  ["pretzels/spicycheesytomndog.png",               "spicy-cheesy-tom-n-dog"],
  ["pretzels/sweetpotatopretzel.png",               "sweet-potato-pretzel"],
  ["pretzels/tomndog.png",                          "tom-n-dog-pretzel"],
  ["pretzels/hotpretzel.png",                       "hot-pretzel"],
  ["pretzels/bulgogipretzel.png",                   "bulgogi-pretzel"],

  // Pizza
  ["pizza/hawaiianpizza.png",                       "hawaiian-pizza"],
  ["pizza/pepperonipizza.png",                      "pepperoni-pizza"],
  ["pizza/sweetpotatopizza.png",                    "sweet-potato-pizza"],
  ["pizza/tortillapizza.png",                       "tortilla-pizza"],

  // Bakery
  ["bakery/redvelvetcake.PNG",                      "red-velvet-cake"],
  ["bakery/strawberrycheesecake.PNG",               "strawberry-cheesecake"],
  ["bakery/tiramisucake.PNG",                       "tiramisu-cake"],
  ["bakery/lemoncheesecake.PNG",                    "lemon-cheesecake"],
  ["bakery/vanillafruitcake.PNG",                   "fresh-fruit-chantilly-cream-cake"],
  ["bakery/carameltrestlechescake.PNG",             "caramel-tres-leches-cake"],
  ["bakery/peaches&creamcake.PNG",                  "peaches-cream-cake"],
  ["bakery/triplechocolatecake.PNG",                "triple-decker-chocolate-cake"],
  ["bakery/vanillarollcake.PNG",                    "vanilla-roll-cake"],
  ["bakery/greentearollcake.PNG",                   "green-tea-roll-cake"],
  ["bakery/chocolaterollcake.PNG",                  "chocolate-roll-cake"],
  ["bakery/strawberryrollcake.PNG",                 "strawberry-roll-cake"],
  ["bakery/macaron.PNG",                            "macaron"],
  ["bakery/macaron4pack.PNG",                       "macaron-4-pack"],
  ["bakery/minimanju.PNG",                          "mini-manju"],
  ["bakery/almondtuile.PNG",                        "almond-tuile-cookies"],
  ["bakery/madeleines.PNG",                         "madeleines"],
  ["bakery/redbeanbun.PNG",                         "red-bean-bun"],
  ["bakery/greenteamilkbun.PNG",                    "matcha-milk-bun"],
  ["bakery/vanillamilkbun.PNG",                     "vanilla-milk-bun"],
];

await mkdir(DEST, { recursive: true });

let ok = 0, errs = [];

for (const [rel, slug] of MAP) {
  const src = path.join(SRC, rel);
  const dest = path.join(DEST, `${slug}.webp`);

  if (!existsSync(src)) {
    errs.push(`MISSING SOURCE: ${rel}`);
    continue;
  }

  try {
    await sharp(src)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dest);
    ok++;
  } catch (e) {
    errs.push(`ERROR ${rel}: ${e.message}`);
  }
}

console.log(`\n✓ ${ok} / ${MAP.length} images written to ${DEST}/`);
if (errs.length) {
  console.log("\nErrors:");
  errs.forEach(e => console.log(" ", e));
} else {
  console.log("  No errors.");
}
