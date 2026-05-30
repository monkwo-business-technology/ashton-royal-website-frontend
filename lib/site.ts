// Centralized site data + verified Unsplash imagery (subjects hand-checked).

const U = "https://images.unsplash.com/";
const img = (id: string, w = 1200) =>
  `${U}${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMAGES = {
  // People — care & community
  caregiverSenior: img("photo-1576765608535-5f04d1e3f289"), // caregiver + senior woman
  carePro: img("photo-1559839734-2b71ea197ec2"), // care professional, white coat
  cooking: img("photo-1556910103-1c02745aae4d"), // people cooking together
  // Portraits (team / testimonials)
  portraitW1: img("photo-1494790108377-be9c29b29330", 600),
  portraitW2: img("photo-1438761681033-6461ffad8d80", 600),
  portraitW3: img("photo-1573496359142-b8d87734a5a2", 600),
  portraitM1: img("photo-1556157382-97eda2d62296", 600),
  portraitM2: img("photo-1607990281513-2c110a25bd8c", 600),
  // Spaces
  roomVip: img("photo-1505693416388-ac5ce068fe85"), // elegant furnished bedroom
  roomStudio: img("photo-1522708323590-d24dbb6b0267"), // furnished studio
  lounge: img("photo-1631679706909-1844bbd07221"), // bright living room
  exterior: img("photo-1600585154340-be6161a56a0c"), // modern home exterior
  // Food
  mealPlate: img("photo-1490645935967-10de6ba17061"), // healthy plate
  mealJar: img("photo-1505576399279-565b52d4ac71", 600), // salad jar
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Our Services", href: "/our-services" },
  { label: "Inventory", href: "/inventory" },
  { label: "Contact Us", href: "/contact" },
];

export const CONTACT = {
  phone: "1 (832) 305-5595",
  phoneHref: "tel:+18323055595",
  email: "info@ashtonroyalliving.com",
  emailHref: "mailto:info@ashtonroyalliving.com",
  hours: "Mon–Sun · 8:00 AM – 8:00 PM",
  area: "Greater Houston, Texas",
};

export type Service = {
  no: string;
  title: string;
  short: string;
  body: string;
  image: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Meal Preparation",
    short: "Nourishing, home-cooked meals every day.",
    body: "Balanced, home-cooked meals prepared fresh by our staff. We accommodate dietary needs and make every mealtime a moment of community around the table.",
    image: IMAGES.mealPlate,
    points: ["Three meals daily", "Dietary accommodations", "Fresh, balanced menus"],
  },
  {
    no: "02",
    title: "VIP Private & Semi-Private Rooms",
    short: "Comfortable rooms with utilities included.",
    body: "Choose a private retreat or a sociable semi-private room. Every option includes utilities, climate control, and access to inviting shared common areas.",
    image: IMAGES.roomVip,
    points: ["Utilities included", "Private & semi-private", "Climate controlled"],
  },
  {
    no: "03",
    title: "Furnished Rooms",
    short: "Move in with ease — fully furnished.",
    body: "Spacious bedrooms arrive fully furnished, so you can settle in from day one. Comfortable beds, storage, and welcoming common spaces throughout.",
    image: IMAGES.roomStudio,
    points: ["Beds & storage", "Common areas", "Move-in ready"],
  },
  {
    no: "04",
    title: "Medication Assistance",
    short: "Personal care team supports your routine.",
    body: "Our personal care team — with 25+ years of combined experience — helps with medication management and daily routines, keeping health on track.",
    image: IMAGES.carePro,
    points: ["Medication management", "Personal care team", "Daily check-ins"],
  },
  {
    no: "05",
    title: "TV, WiFi & Laundry",
    short: "Stay connected and comfortable.",
    body: "High-speed WiFi and TV keep you connected and entertained, while convenient on-site laundry rooms keep everything fresh and easy.",
    image: IMAGES.lounge,
    points: ["High-speed WiFi", "TV lounge", "On-site laundry"],
  },
  {
    no: "06",
    title: "Grants & Flexible Payment",
    short: "No credit check — many ways to pay.",
    body: "No credit check, no problem. We welcome SSI, SSDI, private pay, and vouchers, and help you explore grant opportunities for extra support.",
    image: IMAGES.cooking,
    points: ["SSI / SSDI welcome", "Vouchers accepted", "Grant guidance"],
  },
];

export type Room = {
  name: string;
  tag: string;
  price: string;
  image: string;
  features: string[];
};

export const ROOMS: Room[] = [
  {
    name: "VIP Private Suite",
    tag: "Most Private",
    price: "Utilities included",
    image: IMAGES.roomVip,
    features: ["Private bedroom", "Furnished & climate controlled", "Priority care support", "All utilities included"],
  },
  {
    name: "Semi-Private Room",
    tag: "Most Social",
    price: "Best value",
    image: IMAGES.roomStudio,
    features: ["Shared with one roommate", "Fully furnished", "Shared common areas", "All utilities included"],
  },
  {
    name: "Furnished Studio",
    tag: "Independent",
    price: "Utilities included",
    image: IMAGES.lounge,
    features: ["Self-contained space", "Kitchenette & lounge", "Independent living", "All utilities included"],
  },
];

export const AMENITIES = [
  "TV & High-Speed WiFi",
  "On-Site Laundry Room",
  "VIP Furnished Rooms",
  "Grants Available",
  "Meal Preparation",
  "Medication Assistance",
  "Utilities Included",
  "24/7 Support",
  "Near Bus Stops",
  "Drug & Alcohol-Free",
  "Community Centers Nearby",
  "Equal Housing Opportunity",
];

export type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const TEAM: Member[] = [
  {
    name: "Patricia Adeyemi",
    role: "Director of Care",
    image: IMAGES.portraitW3,
    bio: "Leads our personal care team with over a decade of senior-care experience.",
  },
  {
    name: "Marcus Bell",
    role: "Resident Services Lead",
    image: IMAGES.portraitM2,
    bio: "Veteran advocate ensuring every resident feels supported and at home.",
  },
  {
    name: "Naomi Carter",
    role: "Wellbeing Coordinator",
    image: IMAGES.portraitW1,
    bio: "Designs daily routines, meals, and activities that keep our community thriving.",
  },
  {
    name: "David Okoro",
    role: "Operations Manager",
    image: IMAGES.portraitM1,
    bio: "Keeps every home running smoothly, safe, and welcoming around the clock.",
  },
];
