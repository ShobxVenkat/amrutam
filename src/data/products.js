// src/data/products.js

// Images (same jo Store.jsx me use ho rahi thi)
import hairSpaImg from "../assets/images/product-hair-spa.png";
import shampooImg from "../assets/images/product-shampoo.png";
import maltImg from "../assets/images/product-malt.png";

export const products = [
  {
    id: 1,
    slug: "amrutam-kuntal-care-hair-spa",
    name: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    image: hairSpaImg,

    // pricing + meta
    mrp: 840,
    price: 649, // ProductDetails me ₹ {price.toFixed(0)} use hoga
    size: "200 ml",
    rating: 5.0,
    reviewsCount: 52,
    shortTag: "Clinically tested • Clean label",

    // same description jo tu upar use kar raha tha
    description: `Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.
These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!
This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!
It's time to bring spa home and unwind.`,

    productHighlights: [
      "Controls hair fall and breakage",
      "Deeply nourishes scalp",
      "Improves hair texture and shine",
      "Makes hair soft and bouncy",
    ],

    keyIngredients: [
      { name: "Chitrak", slug: "citrak-plumbago-zeylanica" },
      { name: "Bhringraj", slug: "bhringraj-eclipta-alba" },
      { name: "Brahmi", slug: "brahmi-bacopa-monnieri" },
    ],

    howToUse:
      "Warm a small amount, apply on scalp and hair length, massage gently for 10–15 minutes. Leave for at least 30 minutes or overnight and wash with a mild shampoo.",

    generalInstructions:
      "For external use only. Store in a cool and dry place. Keep away from direct sunlight. Keep away from children.",

    faqs: [
      {
        question: "When should I start seeing visible difference in my hair?",
        answer:
          "With regular use you can start noticing improvement within 3–4 weeks.",
      },
      {
        question: "Is this suitable for chemically treated or coloured hair?",
        answer:
          "Yes, the formulation is gentle and suitable for coloured and chemically treated hair.",
      },
    ],

    // optional, ProductDetails me use kar sakta hai
    trustVideoUrl: "#",
  },

  {
    id: 2,
    slug: "amrutam-kuntal-care-herbal-shampoo",
    name:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    image: shampooImg,

    mrp: 840,
    price: 649,
    size: "200 ml",
    rating: 5.0,
    reviewsCount: 52,
    shortTag: "Clinically tested • Clean label",

    description: `A gentle ayurvedic shampoo formulated with herbs like Bhringraj, Brahmi and Triphala to cleanse the scalp without stripping natural oils.
Regular use helps control hair fall, improves texture and promotes healthy hair growth.`,

    productHighlights: [
      "Gently cleanses scalp",
      "Helps reduce hair fall",
      "Suitable for regular use",
      "Supports healthy hair growth",
    ],

    keyIngredients: [
      { name: "Bhringraj", slug: "bhringraj-eclipta-alba" },
      { name: "Brahmi", slug: "brahmi-bacopa-monnieri" },
      { name: "Triphala", slug: "triphala" },
    ],

    howToUse:
      "Apply on wet hair and scalp, massage gently to form lather and rinse thoroughly. Repeat if needed.",

    generalInstructions:
      "Avoid contact with eyes. If contact occurs, rinse immediately with water. For external use only.",

    faqs: [
      {
        question: "Is this shampoo sulphate and paraben free?",
        answer:
          "Yes, it is made with ayurvedic herbs and is free from harsh sulphates and parabens.",
      },
      {
        question: "Can I use this shampoo daily?",
        answer:
          "Yes, the gentle formulation makes it suitable for regular or frequent use as per your hair type.",
      },
    ],

    trustVideoUrl: "#",
  },

  {
    id: 3,
    slug: "amrutam-nari-sondarya-malt",
    name:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    image: maltImg,

    mrp: 840,
    price: 649,
    size: "200 ml",
    rating: 5.0,
    reviewsCount: 52,
    shortTag: "Supports hormonal balance • Women’s wellness",

    description: `Amrutam Nari Sondarya Malt is a classical ayurvedic formulation designed to support women's overall health, beauty and hormonal balance.
It helps improve skin health, supports better energy levels and promotes holistic wellbeing.`,

    productHighlights: [
      "Supports hormonal balance",
      "Helps improve skin health",
      "Boosts energy and stamina",
      "Holistic care for women",
    ],

    keyIngredients: [
      { name: "Shatavari", slug: "shatavari-asparagus-racemosus" },
      { name: "Ashoka", slug: "ashoka-saraca-asoca" },
      { name: "Lodhra", slug: "lodhra-symplocos-racemosa" },
    ],

    howToUse:
      "Take 1–2 teaspoons twice a day or as directed by your physician. Can be taken with warm water or milk.",

    generalInstructions:
      "Store in a cool and dry place. Keep the jar tightly closed. Not to be used without medical supervision during pregnancy.",

    faqs: [
      {
        question: "Who should use Amrutam Nari Sondarya Malt?",
        answer:
          "It is ideal for adult women looking for support in hormonal balance, skin health and overall wellbeing.",
      },
      {
        question: "How long should I take it to see results?",
        answer:
          "With regular use and proper lifestyle, benefits can usually be seen within 6–8 weeks.",
      },
    ],

    trustVideoUrl: "#",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByIds(ids = []) {
  return products.filter((p) => ids.includes(p.id));
}
