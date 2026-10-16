export const CATEGORIES = [
  { slug: "raahi-setup", label: "Raahi Setup", description: "Meri Exter, Raahi, mein jo laga hai aur jo use kiya." },
  { slug: "shoot-like-me", label: "Shoot Like Me", description: "Camera, mic, mounts aur card jinse main shoot karta hoon." },
  { slug: "car-decor", label: "Car Decor", description: "Dashboard ko thoda cute banane ka saamaan." },
  { slug: "road-trip-essentials", label: "Road Trip Essentials", description: "Lambi drive pe saath rakhne wali cheezein." },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export type Product = {
  id: string;
  name: string;
  image: string;
  category: CategorySlug;
  amazonUrl?: string;
  flipkartUrl?: string;
  featured?: boolean;
  tags?: string[];
  /** One honest line from Milan's own use. Shown under the title (2 lines max). */
  note?: string;
  /** Short or video where the product appears. Optional. */
  videoUrl?: string;
};

export const products: Product[] = [
  {
    id: "monk-toy-yellow",
    name: "Sculpmart Solar Moving Buddha (Yellow)",
    image: "/products/monk-toy-yellow.jpg",
    category: "car-decor",
    amazonUrl: "https://link.amazon/B07yndztn",
    featured: true,
    tags: ["buddha", "monk", "yellow", "dashboard", "toy", "decor"],
    note: "Solar se chalta hai. Dhoop mile to sar aur haath hilata hai.",
  },
  {
    id: "dashcam-70mai",
    name: "70mai A510 3K Dual Channel Dashcam",
    image: "/products/dashcam-70mai.png",
    category: "raahi-setup",
    amazonUrl: "https://link.amazon/B02bBvaA6",
    tags: ["camera", "dashcam", "70mai", "safety", "recording", "video"],
    note: "1.5 saal se Raahi ka dashcam yahi hai.",
  },
  {
    id: "arm-rest-hyundai-exter",
    name: "VEMOTO Armrest for Hyundai Exter",
    image: "/products/arm-rest-hyundai-exter.jpg",
    category: "raahi-setup",
    amazonUrl: "https://link.amazon/B09GJviK7",
    tags: ["armrest", "hyundai", "exter", "comfort", "interior"],
    note: "Exter ke liye bana hai. Raahi mein 1.6 saal se laga hai.",
  },
  {
    id: "wireless-car-play-adapter",
    name: "PROODOS Wireless CarPlay & Android Auto Adapter",
    image: "/products/wireless-car-play-adapter.jpg",
    category: "raahi-setup",
    amazonUrl: "https://link.amazon/B0flM6mBL",
    tags: ["wireless", "carplay", "adapter", "bluetooth", "android auto", "music", "audio"],
    note: "1.5 saal se use kar raha hoon. Tune se compact, isliye isi pe shift hua.",
  },
  {
    id: "sunflower-car-dashboard",
    name: "FIDEO Sunflower Dashboard Decor (Set of 5)",
    image: "/products/sunflower-car-dashboard.jpg",
    category: "car-decor",
    amazonUrl: "https://link.amazon/B076Oa44A",
    tags: ["sunflower", "flower", "dashboard", "decor", "toy", "cute"],
    note: "5 phoolon ka set. Sar hila hila ke naachte hain, dashboard pe full vibe.",
  },
  {
    id: "car-play-by-portronics",
    name: "Portronics Tune Wireless CarPlay & Android Auto Receiver",
    image: "/products/car-play-by-portronics.jpg",
    category: "raahi-setup",
    amazonUrl: "https://link.amazon/B064JBdCj",
    tags: ["portronics", "carplay", "adapter", "wireless", "audio", "music"],
    note: "6 mahine use kiya. Sirf wired CarPlay/Android Auto wali cars ke liye.",
  },
  {
    id: "car-charging-adapter",
    name: "Portronics 80W Dual Port Car Charger",
    image: "/products/car-charging-adapter.jpg",
    category: "raahi-setup",
    amazonUrl: "https://link.amazon/B03eWxQCG",
    tags: ["charger", "adapter", "charging", "12v", "80w", "power", "usb"],
    note: "3 saal se saath hai. Purani car se Raahi tak shift hua.",
  },
  {
    id: "cute-couple",
    name: "STYLELOOP Cute Couple Dashboard Figures",
    image: "/products/cute-couple.jpg",
    category: "car-decor",
    amazonUrl: "https://link.amazon/B0efH33U5",
    tags: ["couple", "toy", "dashboard", "decor", "cute", "romantic"],
    note: "Balloon wala cute couple. Dashboard ka romance department.",
  },
  {
    id: "portronics-powerbank",
    name: "Portronics Ampbox 10K Power Bank (22.5W)",
    image: "/products/portronics-pb.jpg",
    category: "road-trip-essentials",
    amazonUrl: "https://link.amazon/B0cXoOmtS",
    tags: ["powerbank", "charger", "battery", "portronics", "10000mah", "portable"],
    note: "6 mahine se use kar raha hoon. 22.5W fast charging, digital display.",
  },
  {
    id: "grenaro-mic",
    name: "GRENARO S12 Wireless Mic",
    image: "/products/grenaro-mic.jpeg",
    category: "shoot-like-me",
    amazonUrl: "https://link.amazon/B0g8dWiLd",
    tags: ["mic", "microphone", "wireless", "grenaro", "audio", "recording", "vlog"],
    note: "8 mahine se use kar raha hoon.",
  },
  {
    id: "bluetooth-selfie-stick",
    name: "Kratos Bluetooth Selfie Stick with Tripod",
    image: "/products/bluetooth-selfie-stick.jpg",
    category: "shoot-like-me",
    amazonUrl: "https://link.amazon/B0h9NCYIp",
    tags: ["selfie", "stick", "bluetooth", "tripod", "camera", "photography", "stand"],
    note: "1 saal se use kar raha hoon. Tripod bhi ban jaata hai.",
  },
  {
    id: "sleeping-cat-car-toy",
    name: "Super Toy Sleeping Cat Plush",
    image: "/products/sleeping-cat-car-toy.jpeg",
    category: "car-decor",
    amazonUrl: "https://link.amazon/B0bQn0gcH",
    tags: ["sleeping", "cat", "car", "toy", "dashboard", "decor", "cute"],
    note: "Soft plush billi jo meow bolti hai. Tum drive karo, yeh so jaayegi.",
  },
  {
    id: "dji-osmo-5",
    name: "DJI Osmo Action 5 Pro",
    image: "/products/dji-osmo-5-pro.jpg",
    category: "shoot-like-me",
    amazonUrl: "https://link.amazon/B0cdojBh2",
    tags: ["camera", "dji", "dji 5", "osmo"],
    note: "3 mahine, zero issue. Makkhan ki tarah chal raha hai.",
  }, 
  {
    id: "ulanzi-suction-mount",
    name: "Ulanzi SC-02 Suction Cup Mount",
    image: "/products/ulanzi-suction-mount.jpg",
    category: "shoot-like-me",
    amazonUrl: "https://link.amazon/B0esnSTWL",
    tags: ["camera", "mount", "suction", "ulanzi"],
    note: "Abhi 20 din se test kar raha hoon. Pakka verdict thode time baad.",
  },
  {
    id: "sandisk-256",
    name: "SanDisk Extreme 256GB microSD Card",
    image: "/products/sandisk-256.jpg",
    category: "shoot-like-me",
    amazonUrl: "https://link.amazon/B07dK5U08",
    tags: ["memory", "card", "sd card", "sandisk"],
    note: "Dashcam + DJI mein 6 mahine se. 190MB/s read, 130MB/s write.",
  },
  {
    id: "ulanzi-tripod-gopro",
    name: "Ulanzi MT-09 Mini Tripod Grip",
    image: "/products/ulanzi-tripod-gopro.jpg",
    category: "shoot-like-me",
    amazonUrl: "https://link.amazon/B0eplNgs5",
    tags: ["tripod", "camera", "stand", "ulanzi"],
    note: "3 saal purana saathi. Pehle GoPro ke saath, ab DJI ke saath.",
  }
];
