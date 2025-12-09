import IngrImg from "../assets/images/ingridient.png";

export const ingredients = [
  {
    id: 1,
    slug: "citrak-plumbago-zeylanica",
    name: "Chitrak - Plumbago zeylanica (Sanskrit - चित्रक)",
    heroImage: IngrImg,

    longIntro:
      "Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body. It is great for boosting metabolism, enhancing skin health, and easing joint pain.",

    whyPoints: [
      "Chitrak is valued because it helps lower blood sugar, boosts digestion, and reduces anxiety.",
      "It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
      "It is most used in Ayurvedic medicines for indigestion.",
   
    ],

    tridoshaImpact: {
      vata: "Balanced",
      kapha: "Balanced",
      pitta: "Unbalanced",
    },

    benefits: [
      "Calms the nervous system and reduces anxiety.",
      "Reduces cholesterol and supports weight loss.",
      "Manages diabetes by lowering blood sugar levels.",
      "Beneficial in Hemorrhoids of Vata origin.",
      "Improves digestion and boosts metabolism.",
      "Prevents deposits in arteries, supporting heart health.",
      "Treats skin conditions like acne and dermatitis.",
      "Speeds up wound healing and promotes new skin growth."
    ],

    ayurvedicProps: [
      { label: "Rasa", value: "Katu (Pungent)" },
      { label: "Veerya", value: "Ushna (Hot)" },
      { label: "Guna", value: "Laghu, Ruksha, Tikshna" },
      { label: "Vipaka", value: "Katu (Pungent)" },
    ],

    importantFormulations: [
      "Chitrak Haritaki",
      "Chitrakadi Vati",
      "Kalyanagulam",
      "Chitrakadi Churna",
    ],

    therapeuticUses: [
      "Agnimandya",
      "Grahani Rog",
      "Arsha",
      "Udara Shula",
      "Gudasothas",
    ],

    plantParts: [
      { title: "Root", desc: "Digestion, skin support, controls sugar levels" },
      { title: "Root Bark", desc: "Weight loss & metabolism control" },
      { title: "Leaves", desc: "For skin diseases & wound healing" },
    ],

    combinedWith: ["Pippali", "Haritaki", "Guggulu","Punarnava","Amla", "Giloy"], 

    geoLocations: "It is native to tropical and subtropical regions worldwide, including India and Srilanka.",

    relatedProductIds: [1, 2, 3],
  },
];
export function getIngredientBySlug(slug) {
  return ingredients.find((ing) => ing.slug === slug);
}
