/* Menu content for Smoke & Spice.
   Category order, groups, and diet rules follow menu-categories.json. */
 
const MENU = {
  brand: {
    name: "Smoke & Spice",
    tagline: "Tandoor, biryani, and the charcoal grill",
  },
  settings: {
    currency: "INR",
    locale: "en-IN",
    symbol: "₹",
  },
  groups: [
    { id: "veg", label: "Veg", order: 1 },
    { id: "non_veg", label: "Non Veg", order: 2 },
    { id: "extras", label: "Breads & Packs", order: 3 },
  ],
  categories: [
    {
      id: "cat_01",
      order: 1,
      name: "Veg Soup",
      short_label: "Soup",
      slug: "veg-soup",
      diet: "veg",
      group: "veg",
      items: [
        dish("vs1", "Veg Manchow Soup", "veg", [70, 100]),
        dish("vs2", "Veg Hot & Sour Soup", "veg", [80, 100]),
        dish("vs3", "Veg Royal Soup", "veg", [80, 110]),
        dish("vs4", "Veg Noodles Soup", "veg", [80, 110]),
        dish("vs5", "Veg Clear Soup", "veg", [70, 100]),
        dish("vs6", "Cream of Tomato Soup", "veg", 100),
        dish("vs7", "Palak Soup", "veg", 120),
      ],
    },
    {
      id: "cat_02",
      order: 2,
      name: "Veg Starter",
      short_label: "Starter",
      slug: "veg-starter",
      diet: "veg",
      group: "veg",
      items: [
        dish("vst1", "Veg Manchurian Dry", "veg", [100, 140]),
        dish("vst2", "Veg Manchurian Gravy", "veg", [120, 160]),
        dish("vst3", "Veg Chilly Dry", "veg", [100, 140]),
        dish("vst4", "Veg Schezwan Dry", "veg", [120, 160]),
        dish("vst5", "Veg Crispy", "veg", [130, 190]),
        dish("vst6", "Paneer Chilly / Manchurian Dry", "veg", [160, 220]),
        dish("vst7", "Paneer Crispy", "veg", [160, 220]),
        dish("vst8", "Paneer in Green / Schezwan Sauce", "veg", [160, 220]),
        dish("vst9", "Honey Chilli Potato", "veg", 159),
      ],
    },
    {
      id: "cat_03",
      order: 3,
      name: "Veg Tandoori Starter",
      short_label: "Tandoori Starter",
      slug: "veg-tandoori-starter",
      diet: "veg",
      group: "veg",
      items: [
        dish("vt1", "Hara Bhara Kabab (8 pc)", "veg", 210),
        dish("vt2", "Cheese Corn Ball (6 pc)", "veg", 280),
        dish("vt3", "Special Tikki (6 pc)", "veg", 280),
        dish("vt4", "Dil Khush Tikki (6 pc)", "veg", 260),
        dish("vt5", "Paneer Tikka", "veg", 280),
        dish("vt6", "Paneer Malai Tikka", "veg", 230),
        dish("vt7", "Paneer Banjara Tikka", "veg", 300),
        dish("vt8", "Paneer Pahadi Tikka", "veg", 320),
        dish("vt9", "Paneer Chilli Milli Tikka", "veg", 340),
      ],
    },
    {
      id: "cat_04",
      order: 4,
      name: "Papad",
      short_label: "Papad",
      slug: "veg-papad",
      diet: "veg",
      group: "veg",
      items: [
        dish("pp1", "Masala Papad", "veg", 50),
        dish("pp2", "Roasted Papad", "veg", 10),
        dish("pp3", "Oil Fry Papad", "veg", 15),
      ],
    },
    {
      id: "cat_05",
      order: 5,
      name: "Veg Main-course",
      short_label: "Main-course",
      slug: "veg-main-course",
      diet: "veg",
      group: "veg",
      items: [
        dish("vm1", "Mix Veg", "veg", 160),
        dish("vm2", "Veg Handi", "veg", 220),
        dish("vm3", "Veg Kadai", "veg", 180),
        dish("vm4", "Veg Makhanwala", "veg", 200),
        dish("vm5", "Mushroom Masala", "veg", 170),
        dish("vm6", "Mushroom Kadai", "veg", 180),
        dish("vm7", "Mushroom Tikka Masala", "veg", 220),
        dish("vm8", "Veg Tawa", "veg", 220),
        dish("vm9", "Veg Kolhapuri", "veg", 170),
        dish("vm10", "Veg Lababdar", "veg", 240),
        dish("vm11", "Veg Lajawab", "veg", 230),
        dish("vm12", "Veg Chilli Milli", "veg", 280),
        dish("vm13", "Sham Savera", "veg", 320),
        dish("vm14", "Veg Afghani", "veg", 300),
        dish("vm15", "Veg Kofta", "veg", 200),
        dish("vm16", "Veg Bhuna", "veg", 260),
        dish("vm17", "Veg Paigambari", "veg", 280),
        dish("vm18", "Veg Patiala", "veg", 280),
        dish("vm19", "Paneer Butter Masala", "veg", 220),
        dish("vm20", "Paneer Lababdar", "veg", 320),
        dish("vm21", "Paneer Handi", "veg", [280, 400]),
        dish("vm22", "Paneer Tawa", "veg", 260),
        dish("vm23", "Paneer Masala", "veg", 200),
        dish("vm24", "Paneer Kadai", "veg", 210),
        dish("vm25", "Paneer Lajawab", "veg", 300),
        dish("vm26", "Paneer Patiala", "veg", 320),
        dish("vm27", "Paneer Afghani", "veg", 310),
      ],
    },
    {
      id: "cat_06",
      order: 6,
      name: "Veg Dal & Rice",
      short_label: "Dal & Rice",
      slug: "veg-dal-rice",
      diet: "veg",
      group: "veg",
      items: [
        dish("vd1", "Dal Fry", "veg", 140),
        dish("vd2", "Dal Tadka", "veg", 160),
        dish("vd3", "Dal Makhni", "veg", 180),
        dish("vd4", "Dal Khichadi", "veg", 160),
        dish("vd5", "Dal Khichadi Tadka", "veg", 180),
        dish("vd6", "Jeera Rice", "veg", [100, 140]),
        dish("vd7", "Steam Rice", "veg", [80, 130]),
      ],
    },
    {
      id: "cat_07",
      order: 7,
      name: "Veg Fried Rice",
      short_label: "Fried Rice",
      slug: "veg-fried-rice",
      diet: "veg",
      group: "veg",
      items: [
        dish("vfr1", "Veg Fried Rice", "veg", [90, 140]),
        dish("vfr2", "Veg Schezwan Rice", "veg", [100, 160]),
        dish("vfr3", "Veg Combination Rice", "veg", [100, 160]),
        dish("vfr4", "Veg Triple Schezwan Rice", "veg", [130, 170]),
        dish("vfr5", "Veg Manchurian Rice", "veg", [140, 180]),
        dish("vfr6", "Veg Burnt Garlic Rice", "veg", [120, 180]),
        dish("vfr7", "Veg Hongkong Rice", "veg", [120, 180], {options: [{"label": "With gravy", "prices": [160, 220]}] }),
        dish("vfr8", "Veg Singapore Rice", "veg", [120, 180], {options: [{"label": "With gravy", "prices": [160, 220]}] }),
        dish("vfr9", "Soyabin Rice", "veg", [120, 180]),
        dish("vfr10", "Veg Sherpa Rice", "veg", 210),
        dish("vfr11", "Veg Paneer Rice", "veg", [160, 220]),
        dish("vfr12", "Paneer Chilly Rice", "veg", [150, 200]),
        dish("vfr13", "Paneer Fried Rice", "veg", [120, 180]),
        dish("vfr14", "Paneer Schezwan Rice", "veg", [140, 200]),
      ],
    },
    {
      id: "cat_08",
      order: 8,
      name: "Veg Noodle",
      short_label: "Noodle",
      slug: "veg-noodle",
      diet: "veg",
      group: "veg",
      items: [
        dish("vn1", "Veg Hakka Noodles", "veg", [100, 160]),
        dish("vn2", "Veg Schezwan Noodles", "veg", [120, 180]),
        dish("vn3", "Veg Triple Schezwan Noodles", "veg", [150, 200]),
        dish("vn4", "Veg Chilly Noodles", "veg", [150, 200]),
        dish("vn5", "Veg Manchurian Noodles", "veg", [150, 200]),
        dish("vn6", "Veg Hong Kong Noodles", "veg", [140, 200]),
        dish("vn7", "Veg Singapore Noodles", "veg", [140, 200]),
        dish("vn8", "Veg Shanghai Noodles", "veg", [140, 200]),
        dish("vn9", "Paneer Triple Noodles", "veg", [160, 220]),
        dish("vn10", "Paneer Chilly Noodles", "veg", [160, 220]),
        dish("vn11", "Paneer Noodles", "veg", [130, 190]),
        dish("vn12", "Paneer Schezwan Noodles", "veg", [160, 220]),
      ],
    },
    {
      id: "cat_09",
      order: 9,
      name: "Veg Biryani",
      short_label: "Biryani",
      slug: "veg-biryani",
      diet: "veg",
      group: "veg",
      items: [
        dish("vb1", "Veg Biryani", "veg", 150),
        dish("vb2", "Kashmiri Biryani Veg", "veg", 170),
        dish("vb3", "Paneer Biryani", "veg", 180),
        dish("vb4", "Paneer Kashmiri", "veg", 200),
        dish("vb5", "Veg Pulao", "veg", 140),
        dish("vb6", "Kashmiri Pulao", "veg", 180),
      ],
    },
    {
      id: "cat_10",
      order: 10,
      name: "Non Veg Soup",
      short_label: "Soup",
      slug: "non-veg-soup",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("ns1", "Chicken Clear Soup", "non_veg", [70, 100]),
        dish("ns2", "Chicken Manchow Soup", "non_veg", [70, 100]),
        dish("ns3", "Chicken Hot & Sour Soup", "non_veg", [70, 100]),
        dish("ns4", "Chicken Sweet Corn Soup", "non_veg", [70, 100]),
        dish("ns5", "Lung Fung Soup", "non_veg", 120),
      ],
    },
    {
      id: "cat_11",
      order: 11,
      name: "Non Veg Starter",
      short_label: "Starter",
      slug: "non-veg-starter",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("nst1", "Chicken Crispy", "non_veg", [150, 220]),
        dish("nst2", "Chicken Peri Peri", "non_veg", 250),
        dish("nst3", "Chicken Hong Kong", "non_veg", 250),
        dish("nst4", "Chicken Shingapuri", "non_veg", [150, 210]),
        dish("nst5", "Chicken Lollypop Oil Fry", "non_veg", [150, 250]),
        dish("nst6", "Chicken Lollypop Dry / Gravy", "non_veg", [200, 320]),
        dish("nst7", "Chicken Chilly Dry", "non_veg", [150, 220]),
        dish("nst8", "Chicken Chilly Gravy", "non_veg", [180, 250]),
        dish("nst9", "Chicken Manchurian Dry", "non_veg", [150, 220]),
        dish("nst10", "Chicken Manchurian Gravy", "non_veg", [180, 250]),
        dish("nst11", "Chinese Chicken Bhel", "non_veg", [100, 180]),
        dish("nst12", "Chicken 65 Dry", "non_veg", [150, 220]),
        dish("nst13", "Chicken Satay", "non_veg", 300),
      ],
    },
    {
      id: "cat_12",
      order: 12,
      name: "Non Veg Tandoori Starter",
      short_label: "Tandoori Starter",
      slug: "non-veg-tandoori-starter",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("nt1", "Chicken Tandoori", "non_veg", [290, 495]),
        dish("nt2", "Chicken Pahadi Tikka", "non_veg", 300),
        dish("nt3", "Chicken Banjara Tikka", "non_veg", 310),
        dish("nt4", "Chicken Seekh Kabab", "non_veg", 320),
        dish("nt5", "Chicken Tikka", "non_veg", 280),
        dish("nt6", "Chicken Malai Tikka", "non_veg", 330),
        dish("nt7", "Chicken Chilli Milli Kabab", "non_veg", 330),
        dish("nt8", "Chicken Pahadi Tandoori", "non_veg", [300, 430]),
      ],
    },
    {
      id: "cat_13",
      order: 13,
      name: "Non Veg Main-course",
      short_label: "Main-course",
      slug: "non-veg-main-course",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("nm1", "Chicken Moghlai", "non_veg", 260),
        dish("nm2", "Chicken Masala", "non_veg", 180),
        dish("nm3", "Chicken Kadai", "non_veg", 210),
        dish("nm4", "Chicken 2 Pyaza", "non_veg", 240),
        dish("nm5", "Butter Chicken", "non_veg", [250, 350]),
        dish("nm6", "Chicken Kolhapuri", "non_veg", 190),
        dish("nm7", "Chicken Handi", "non_veg", [280, 400]),
        dish("nm8", "Chicken Sukka", "non_veg", 220),
        dish("nm9", "Chicken Tikka Masala", "non_veg", [270, 379]),
        dish("nm10", "Chicken Afghani", "non_veg", 280),
        dish("nm11", "Chicken Murg Musallam", "non_veg", [450, 650]),
        dish("nm12", "Chicken Bhuna Masala", "non_veg", 280),
        dish("nm13", "Chicken Lababdar", "non_veg", 270),
        dish("nm14", "Chicken Lajawab", "non_veg", 280),
        dish("nm15", "Chicken Lapeta", "non_veg", 290),
        dish("nm16", "Chicken Patiala", "non_veg", 350),
        dish("nm17", "Keema Masala", "non_veg", 290),
        dish("nm18", "Chicken Curry", "non_veg", 190),
        dish("nm19", "Chicken Tawa", "non_veg", 250),
        dish("nm20", "Chicken Hyderabadi", "non_veg", 260),
        dish("nm21", "Chicken Pahadi Masala", "non_veg", 280),
        dish("nm22", "Chicken Seekh Masala", "non_veg", 300),
        dish("nm23", "Anda Masala", "non_veg", 150),
        dish("nm24", "Anda Curry", "non_veg", 260),
      ],
    },
    {
      id: "cat_14",
      order: 14,
      name: "Non Veg Dal & Rice",
      short_label: "Dal & Rice",
      slug: "non-veg-dal-rice",
      diet: "non_veg",
      group: "non_veg",
      items: [
        // No Non Veg Dal & Rice items on the printed menu yet.
      ],
    },
    {
      id: "cat_15",
      order: 15,
      name: "Non Veg Fried Rice",
      short_label: "Fried Rice",
      slug: "non-veg-fried-rice",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("nfr1", "Egg Fried Rice", "non_veg", [90, 160]),
        dish("nfr2", "Chicken Fried Rice", "non_veg", [90, 160]),
        dish("nfr3", "Egg Schezwan Rice", "non_veg", [100, 170]),
        dish("nfr4", "Chicken Schezwan Rice", "non_veg", [110, 170]),
        dish("nfr5", "Chicken Combination Rice", "non_veg", [110, 170]),
        dish("nfr6", "Chicken Triple Schezwan Rice", "non_veg", [140, 180]),
        dish("nfr7", "Chicken Manchurian Rice", "non_veg", [140, 200]),
        dish("nfr8", "Chicken Burnt Garlic Rice", "non_veg", [130, 190]),
        dish("nfr9", "Chicken Hongkong Rice", "non_veg", [130, 180], {options: [{"label": "With gravy", "prices": [180, 240]}] }),
        dish("nfr10", "Chicken Singapore Rice", "non_veg", [130, 180], {options: [{"label": "With gravy", "prices": [180, 240]}] }),
        dish("nfr11", "Chicken Shanghai Rice", "non_veg", [130, 180], {options: [{"label": "With gravy", "prices": [180, 240]}] }),
        dish("nfr12", "Chicken Chopper Rice", "non_veg", [170, 250]),
        dish("nfr13", "Special Chicken Rice", "non_veg", 280),
        dish("nfr14", "Cheese Rice", "non_veg", 200),
        dish("nfr15", "Chicken Sherpa Rice", "non_veg", 300),
        dish("nfr16", "Chicken Garlic Crispy Rice", "non_veg", 220),
      ],
    },
    {
      id: "cat_16",
      order: 16,
      name: "Non Veg Noodle",
      short_label: "Noodle",
      slug: "non-veg-noodle",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("nn1", "Egg Hakka Noodles", "non_veg", [100, 160]),
        dish("nn2", "Chicken Hakka Noodles", "non_veg", [100, 170]),
        dish("nn3", "Egg Schezwan Noodles", "non_veg", [110, 180]),
        dish("nn4", "Chicken Schezwan Noodles", "non_veg", [120, 180]),
        dish("nn5", "Egg Triple Schezwan Noodles", "non_veg", [140, 200]),
        dish("nn6", "Chicken Triple Schezwan Noodles", "non_veg", [150, 200]),
        dish("nn7", "Chicken Chilly Noodles", "non_veg", [160, 220]),
        dish("nn8", "Chicken Manchurian Noodles", "non_veg", [150, 200]),
        dish("nn9", "Chicken Hong Kong Noodles", "non_veg", [130, 190]),
        dish("nn10", "Chicken Singapore Noodles", "non_veg", [130, 190]),
        dish("nn11", "Chicken Shanghai Noodles", "non_veg", [130, 190]),
      ],
    },
    {
      id: "cat_17",
      order: 17,
      name: "Non Veg Biryani",
      short_label: "Biryani",
      slug: "non-veg-biryani",
      diet: "non_veg",
      group: "non_veg",
      items: [
        dish("nb1", "Chicken Biryani", "non_veg", [130, 180]),
        dish("nb2", "Hyderabadi Biryani", "non_veg", [140, 190]),
        dish("nb3", "Egg Biryani Rice", "non_veg", 160),
        dish("nb4", "Chicken Seekh Biryani", "non_veg", 280),
        dish("nb5", "Chicken Keema Biryani", "non_veg", 260),
      ],
    },
    {
      id: "cat_18",
      order: 18,
      name: "Roti & Bread",
      short_label: "Roti & Bread",
      slug: "roti-bread",
      diet: "both",
      group: "extras",
      items: [
        dish("rb1", "Chapati", "veg", [12, 20], {labels: ["Plain", "Butter"] }),
        dish("rb2", "Tandoori Roti", "veg", [20, 25], {labels: ["Plain", "Butter"] }),
        dish("rb3", "Tandoori Naan", "veg", [40, 50], {labels: ["Plain", "Butter"] }),
        dish("rb4", "Butter Garlic Naan", "veg", 60),
        dish("rb5", "Rice Bhakri", "veg", 25),
        dish("rb6", "Kulcha", "veg", [35, 45], {labels: ["Plain", "Butter"] }),
        dish("rb7", "Laccha Paratha", "veg", 50),
      ],
    },
    {
      id: "cat_19",
      order: 19,
      name: "Family Pack",
      short_label: "Family Pack",
      slug: "family-pack",
      diet: "both",
      group: "extras",
      items: [
        dish("fp1", "Veg Biryani", "veg", 800),
        dish("fp2", "1 kg Chicken Biryani", "non_veg", 1000),
        dish("fp3", "1 kg Tandoori Biryani", "non_veg", 1300),
        dish("fp4", "Chicken Tikka Biryani", "non_veg", 1400),
        dish("fp5", "Mutton Biryani", "non_veg", 1800),
        dish("fp6", "Paneer Biryani", "veg", 1100),
        dish("fp7", "Paneer Tikka Biryani", "veg", 1400),
      ],
    },
  ],
};
 
const OFFERS = [
  {
    id: "off-lunch",
    kicker: "Weekdays, 12–3:30",
    title: "15% off veg mains",
    detail: "Paneer gravies, kofta, and dal bowls through the lunch hour.",
    code: "EMBER15",
    itemIds: ["vm19", "vm24", "vm15", "vd3"],
  },
  {
    id: "off-biryani",
    kicker: "After 7 pm",
    title: "Smoke-pot biryani",
    detail: "Chicken dum biryani at a lower evening price, with raita.",
    code: "POT299",
    itemIds: ["nb1"],
  },
  {
    id: "off-family",
    kicker: "Family table",
    title: "Breads on the house",
    detail: "Every family pack includes four butter naans.",
    code: "TABLE",
    itemIds: ["fp1", "fp2", "fp6", "fp5"],
  },
  {
    id: "off-grill",
    kicker: "From the tandoor",
    title: "Pair the grill",
    detail: "10% off when any two tandoori starters land on the same table.",
    code: "CHAR10",
    itemIds: ["vt5", "nt1", "nt5", "nt4"],
  },
];
 
function item(id, name, description, price, diet, extra) {
  return Object.assign(
    { id, name, description, price, diet },
    extra || {}
  );
}
 
// Menu entry without a description. `prices` is one number, or several
// printed as "a / b" on the menu (lowest first). `price` always holds the lowest.
function dish(id, name, diet, prices, extra) {
  const list = Array.isArray(prices) ? prices : [prices];
  const entry = item(id, name, "", list[0], diet, extra);
  if (list.length > 1) entry.prices = list;
  return entry;
}
 
function formatPrices(entry) {
  const list = entry.prices || [entry.price];
  return list.map(formatPrice).join(" / ");
}
 
function formatPrice(amount) {
  return MENU.settings.symbol + Number(amount).toLocaleString(MENU.settings.locale);
}
 
function allItems() {
  const list = [];
  MENU.categories.forEach((category) => {
    category.items.forEach((entry) => {
      list.push({ ...entry, category });
    });
  });
  return list;
}
 
function offerIds() {
  const ids = new Set();
  OFFERS.forEach((offer) => offer.itemIds.forEach((id) => ids.add(id)));
  return ids;
}
 
function findItem(id) {
  return allItems().find((entry) => entry.id === id) || null;
}
 
function categoryVisible(category, diet) {
  if (!category.items.length) return false;
  if (diet === "all" || category.diet === "both") return true;
  return category.diet === diet;
}
 
function tabLabel(category, diet) {
  if (diet === "all" && category.diet !== "both") {
    const prefix = category.diet === "veg" ? "Veg" : "Non Veg";
    return prefix + " " + category.short_label;
  }
  return category.short_label;
}