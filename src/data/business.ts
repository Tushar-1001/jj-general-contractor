export interface GoogleReview {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  relativeTime: string;
  text: string;
  projectTag: string;
  ownerReply?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  typicalTimeline: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Bathrooms" | "Kitchens" | "Doors & Trim" | "Repairs & Upgrades";
  location: string;
  duration: string;
  summary: string;
  scope: string[];
  image: string;
}

export const BUSINESS_INFO = {
  name: "JJ General Contractor",
  owner: "Juan Valadez",
  tagline: "Precision Residential Remodeling & General Contracting in Irving & DFW",
  phoneDisplay: "(214) 213-9249",
  phoneRaw: "+12142139249",
  address: "3517 Esplendor Ave, Irving, TX 75062",
  cityState: "Irving, TX",
  serviceAreas: [
    "Irving",
    "Las Colinas",
    "Valley Ranch",
    "Coppell",
    "Grand Prairie",
    "Dallas",
    "Grapevine",
    "Arlington",
  ],
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 9:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  googleMapsUrl: "https://maps.app.goo.gl/QSX6axcRu1m4v8CM9",
  instagramUrl: "https://www.instagram.com/GCJUANVALADEZ",
  instagramHandle: "@GCJUANVALADEZ",
  rating: 4.9,
  totalReviews: 80,
  ratingBreakdown: [
    { stars: 5, count: 78 },
    { stars: 4, count: 0 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 1 },
  ],
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Christine Lambe",
    badge: "Local Guide · 59 reviews · 9 photos",
    rating: 5,
    relativeTime: "2 years ago",
    projectTag: "Bathroom Tile Installation",
    text: "Juan did a fantastic job on the tile installation in the bathroom. All the work he did was on a superior level. I am so grateful for Juan’s experience, expertise, and outstanding customer service! Juan has a great attention to detail and perfection.",
    ownerReply:
      "Thanks Cristine for letting me do the tile repairs and anything else you need I'm a phone call away. JJ General Contractor 214-213-9249",
  },
  {
    id: "rev-2",
    author: "Priyakant Patel",
    badge: "Local Guide · 41 reviews · 77 photos",
    rating: 5,
    relativeTime: "7 years ago",
    projectTag: "Wedi Shower & Bath Remodel",
    text: "JJ helped me remodel Bathroom remodel including floor tiles. For the shower, you must hire a correct guy who knows to waterproof, or you have to do it again! He recommended the Wedi shower system and also did extra waterproofing. Best work ever. Highly recommend, honest and always gives correct advise even though he needs to do more job. Check out my beautiful shower pictures.",
    ownerReply:
      "You're awesome. I couldn't have asked for a better Patel family to provide my remodeling services to. I enjoyed doing your master bath remodel, upstairs repair and all your counter tops.",
  },
  {
    id: "rev-3",
    author: "Keith Hooper",
    badge: "5 reviews",
    rating: 5,
    relativeTime: "6 months ago",
    projectTag: "Shower Door Installation",
    text: "Juan Valadez is awesome! He did a great job on our shower doors installations. He is very knowledgeable and detail oriented with his craft. I highly recommend his services.",
    ownerReply:
      "Thanks Keith for letting us do your shower door installations on your bathrooms. Bathrooms shower remodels and kitchens is one of our main expertise.",
  },
  {
    id: "rev-4",
    author: "Shannon Wages",
    badge: "Local Guide · 49 reviews · 35 photos",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Cooktop & Custom Trim",
    text: "JJ General Contractor was recommended by Home Depot to replace and install my elderly mom's new stainless steel gas cooktop along with 4 or 5 others. Juan (owner and operator) of JJ General Contractor stood tall above them all. Bringing his exceptional craftsmanship and professionalism to get the job done. Once started he continuously went above and beyond with the installation of the cooktop and a few extras that my mom thru out at him. For instance, my mom also wanted stainless steel panels installed behind stovetop to protect the wall and add a modern look. This did not faze him at all. He easily incorporated the extra work without missing a beat. Even when he ran into a couple of hiccups his quality of work never faultered to ensure i was satisfied. Juan kept my mom informed thru out the entire project. The pricing was fair and transparent with a detailed break down of costs. Because of his excellent attention to detail, outstanding quality of work and his time mangement skills, we (my mom and I) highly recommend JJ General Contractor for any future projects and ask for Juan!",
  },
  {
    id: "rev-5",
    author: "ROSITA KELIAT",
    badge: "2 reviews · 1 photo",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Range Hood Installation",
    text: "Juan installed the broan Nutone Range hood. He's so detail and knowledgeable. He goes beyond my expectations. Will definitely recommend his service to anyone.",
  },
  {
    id: "rev-6",
    author: "Jeneba Yovonie",
    badge: "4 reviews",
    rating: 5,
    relativeTime: "11 months ago",
    projectTag: "Gas Range Installation",
    text: "Juan and his team installed my gas ranger. I switched from electric to gas. The work was professional and neatly done with no issues in less than 24 hrs. Excellent work, great work ethic, and very professional. I will contact him again for any home improvement listed above and will hesitate to recommend him to a friend or colleague. Your work is greatly appreciated.",
  },
  {
    id: "rev-7",
    author: "Juli K",
    badge: "Local Guide · 17 reviews · 28 photos",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Custom Fence Replacement",
    text: "Juan and his son replaced our fence and were a great help in guiding me to choose the right supplies. He explained the process clearly, from tearing down the old fence to installing the new one. Juan did an excellent job and went the extra mile, even waiting for us to purchase additional materials to improve the look of the fence. He is easy to communicate with, has a strong work ethic, and I highly recommend him.",
  },
  {
    id: "rev-8",
    author: "Bobbi Dins",
    badge: "2 reviews",
    rating: 5,
    relativeTime: "9 months ago",
    projectTag: "Microwave & Electrical Rewiring",
    text: "We needed a new microwave installed and contacted JJ General contractor. But before that could occur, we needed extensive rewiring done. They immediately checked all the outlets To make sure they were up to code. Apparently, they were not all apparently they were not. It’s obvious they take pride in their work and making sure that everything is done correctly. It was a very good experience having them in our home and doing the job and we would definitely recommend them to anyone that needs any type of home repair work done thank you and I feel much safer now about the wiring in my house.",
  },
  {
    id: "rev-9",
    author: "Merlinda Rivera",
    badge: "Local Guide · 16 reviews · 6 photos",
    rating: 5,
    relativeTime: "3 years ago",
    projectTag: "Water Heater Replacement",
    text: "My water heater went out and I called Juan with JJ Contractors. He came out and replaced the water heater, he suggested that we add a filter which we did. Juan reran some of the tubs and insulated the pipes. He cleaned up everything after he was done. We are very pleased with all of his work.",
  },
  {
    id: "rev-10",
    author: "Kyra Barker",
    badge: "9 reviews",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Kitchen Sink Replacement",
    text: "Juan was the best at helping us replace our kitchen sink. He took the time to explain everything we needed to do and found us a perfect replacement. He is so easy to work with, quick, knowledgeable, and great pricing. Will definitely call him again for future projects! Thanks so much Juan.",
  },
  {
    id: "rev-11",
    author: "Antonio Rodiguez",
    badge: "2 reviews",
    rating: 5,
    relativeTime: "6 months ago",
    projectTag: "Attic Ladder & Cabinets",
    text: "Great job by Juan at a fair price. I will definitely be calling him soon for some more work around our home.",
  },
  {
    id: "rev-12",
    author: "James B",
    badge: "4 reviews · 6 photos",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Microwave Installation",
    text: "Juan did an amazing job installing my new microwave. He is not only super personable but also highly knowledgeable in this field.",
  },
  {
    id: "rev-13",
    author: "Morgan Williams",
    badge: "14 reviews",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Built-In Microwave & Trim",
    text: "Juan and his son were such a pleasure to work with! They replaced a broken built in microwave and ensured it was done perfectly and looked good with the trim kit from the old microwave. Price was fair and I will definitely use them in the future for other home repair needs.",
  },
  {
    id: "rev-14",
    author: "Todd Mury",
    badge: "1 review",
    rating: 5,
    relativeTime: "a year ago",
    projectTag: "Attic Door & Ladder",
    text: "Juan arrived to install an attic door for us. Was extremely professional and communicative. Completed the job quickly and efficiently. Made certain everything was cleaned up at the end of the job. Would recommend.",
  },
  {
    id: "rev-15",
    author: "Rick Schandevel",
    badge: "4 reviews",
    rating: 5,
    relativeTime: "7 months ago",
    projectTag: "Kitchen & Bath Remodel",
    text: "Fantastic attention to detail. Great communications. Above and beyond craftsmanship. Attentive to customer preferences. Excellent workmanship. We’d go with six stars if they let us",
  },
  {
    id: "rev-16",
    author: "Catherine Gantt",
    badge: "Local Guide · 18 reviews · 11 photos",
    rating: 5,
    relativeTime: "a month ago",
    projectTag: "Door Replacement & Framing",
    text: "Juan and team replaced a barn door with a standard door. I couldn't be happier with the results! They managed some challenges in the design of the bathroom, and the end result is a door that looks like it's always been in the space.",
  },
  {
    id: "rev-17",
    author: "charles brown",
    badge: "Local Guide · 17 reviews",
    rating: 5,
    relativeTime: "a month ago",
    projectTag: "Front Door Installation",
    text: "I’m blown away by how good of a job Juan did on my front door.",
  },
  {
    id: "rev-18",
    author: "Martha Duguay",
    badge: "8 reviews",
    rating: 5,
    relativeTime: "6 months ago",
    projectTag: "Home Renovation",
    text: "They did an excellent job. They are very professional and on time.",
  },
];

export const REVIEW_TOPICS = [
  { label: "Remodeling", count: 12 },
  { label: "Attention to detail", count: 11 },
  { label: "Quality of work", count: 9 },
  { label: "Fair pricing", count: 6 },
  { label: "Immaculate job", count: 4 },
  { label: "On-time completion", count: 2 },
  { label: "Water heater replacement", count: 2 },
  { label: "Microwave installation", count: 2 },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling & Waterproofing",
    shortTitle: "Bathroom Remodels",
    tagline: "Wedi-certified waterproofing, custom tile & frameless glass.",
    description:
      "Complete master and guest bath transformations built from the studs up. We use proven Wedi waterproofing systems, precision large-format tile setting, custom niches, and frameless glass shower enclosures that never leak.",
    image: "/images/bath-remodel.jpg",
    highlights: [
      "Full demo, framing, and Wedi waterproof board systems",
      "Custom porcelain, marble, and herringbone tile work",
      "Frameless shower door & safety grab-bar installation",
      "Vanity, plumbing fixture, and recessed lighting upgrades",
    ],
    typicalTimeline: "1 – 3 Weeks",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Renovations & Backsplash",
    shortTitle: "Kitchen Renovations",
    tagline: "Cabinetry, stone countertops, tile backsplash & appliance installs.",
    description:
      "Functional, high-value kitchen updates tailored to how your family cooks and gathers. From precision shaker cabinet installation and tile backsplashes to over-the-range microwaves, disposals, and lighting.",
    image: "/images/kitchen-island.jpg",
    highlights: [
      "Custom cabinet installation, alignment & hardware",
      "Subway, mosaic, and slab backsplash tilework",
      "Under-cabinet LED lighting & electrical updates",
      "Microwave, dishwasher, and garbage disposal installs",
    ],
    typicalTimeline: "2 – 4 Weeks",
  },
  {
    slug: "doors-carpentry",
    title: "Exterior & Interior Doors, Trim & Carpentry",
    shortTitle: "Doors & Carpentry",
    tagline: "Plumb, square, weather-tight doors that look original to your home.",
    description:
      "Whether upgrading a Texas front entry door for curb appeal or framing out a bathroom barn-to-standard door conversion, we handle tricky jambs, custom casing, baseboards, and solid-core interior doors.",
    image: "/images/front-door.jpg",
    highlights: [
      "Custom front entry door & weatherstripping installation",
      "Barn-to-hinged door conversions & structural framing",
      "Baseboards, crown molding, and window casing",
      "Engineered hardwood & LVP flooring installation",
    ],
    typicalTimeline: "1 – 5 Days",
  },
  {
    slug: "repairs-installations",
    title: "Home Repairs, Painting & Mechanical Upgrades",
    shortTitle: "Home Repairs & Installs",
    tagline: "Reliable, detail-oriented solutions for punch-list & utility jobs.",
    description:
      "You shouldn't have to chase three different trades for quality work. We handle water heater replacements, drywall patching, interior/exterior painting, and precision appliance installations with the same care as full remodels.",
    image: "/images/carpentry-trim.jpg",
    highlights: [
      "Tank & tankless water heater replacements",
      "Drywall repair, texture matching & interior/exterior paint",
      "Built-in microwave, disposal & fixture replacements",
      "Pre-sale home refresh & punch-list completion",
    ],
    typicalTimeline: "1 – 3 Days",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Master Walk-In Shower & Wedi Waterproofing",
    category: "Bathrooms",
    location: "Las Colinas, Irving TX",
    duration: "10 Days",
    summary:
      "Converted an aging fiberglass tub insert into a curbed walk-in porcelain tile shower with a recessed niche, brushed brass fixtures, and custom frameless glass door.",
    scope: ["Wedi System", "Large-Format Tile", "Frameless Glass", "Plumbing"],
    image: "/images/bath-remodel.jpg",
  },
  {
    id: "proj-2",
    title: "Open-Concept Kitchen & White Oak Island",
    category: "Kitchens",
    location: "Valley Ranch, Irving TX",
    duration: "3 Weeks",
    summary:
      "Full kitchen refresh featuring custom cabinetry alignment, quartz waterfall island, under-cabinet lighting, and integrated appliance installation.",
    scope: ["Cabinetry", "Quartz Island", "Under-Cabinet LED", "Appliances"],
    image: "/images/hero-remodel.jpg",
  },
  {
    id: "proj-3",
    title: "Mahogany Craftsman Front Entry Door",
    category: "Doors & Trim",
    location: "Irving, TX 75062",
    duration: "2 Days",
    summary:
      "Removed a warped builder-grade entry door, squared the rough opening, and installed a custom mahogany and frosted-glass door with new threshold and trim.",
    scope: ["Rough Framing", "Weatherproofing", "Exterior Trim", "Hardware"],
    image: "/images/front-door.jpg",
  },
  {
    id: "proj-4",
    title: "Bathroom Door Conversion & Trim Carpentry",
    category: "Doors & Trim",
    location: "Coppell, TX",
    duration: "2 Days",
    summary:
      "Replaced a noisy sliding barn door with a framed solid-core hinged door, matching existing wall texture, baseboards, and casing seamlessly.",
    scope: ["Door Framing", "Solid-Core Door", "Casing & Paint", "Hardware"],
    image: "/images/carpentry-trim.jpg",
  },
  {
    id: "proj-5",
    title: "Quartzite Backsplash & Appliance Suite",
    category: "Kitchens",
    location: "Grapevine, TX",
    duration: "4 Days",
    summary:
      "Installed precision tile backsplash, vented over-the-range microwave, high-output garbage disposal, and new brass sink fixtures.",
    scope: ["Tile Backsplash", "Microwave Install", "Disposal", "Electrical"],
    image: "/images/kitchen-island.jpg",
  },
  {
    id: "proj-6",
    title: "Pre-Listing Home Refresh & Mechanicals",
    category: "Repairs & Upgrades",
    location: "Irving, TX",
    duration: "5 Days",
    summary:
      "Completed water heater replacement, drywall texture repairs, full interior paint touch-ups, and bath safety bar installations ahead of market listing.",
    scope: ["Water Heater", "Drywall & Paint", "Safety Bars", "Punch List"],
    image: "/images/craftsman-detail.jpg",
  },
];
