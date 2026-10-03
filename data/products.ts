export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  amazonUrl?: string;
  flipkartUrl?: string;
  featured?: boolean;
  tags?: string[];
};

export const products: Product[] = [
  {
    id: "monk-toy-yellow",
    name: "Monk Yellow",
    image: "/products/monk-toy-yellow.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B07yndztn",
    featured: true,
    tags: ["buddha", "monk", "yellow", "dashboard", "toy", "decor"],
  },
  {
    id: "dashcam-70mai",
    name: "Dashcam 70mai",
    image: "/products/dashcam-70mai.png",
    category: "Car Essentials",
    amazonUrl: "https://link.amazon/B02bBvaA6",
    tags: ["camera", "dashcam", "70mai", "safety", "recording", "video"],
  },
  {
    id: "arm-rest-hyundai-exter",
    name: "Arm Rest for Hyundai Exter",
    image: "/products/arm-rest-hyundai-exter.jpg",
    category: "Car Essentials",
    amazonUrl: "https://link.amazon/B09GJviK7",
    tags: ["armrest", "hyundai", "exter", "comfort", "interior"],
  },
  {
    id: "wireless-car-play-adapter",
    name: "Wireless Car Play Adapter",
    image: "/products/wireless-car-play-adapter.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B0flM6mBL",
    tags: ["wireless", "carplay", "adapter", "bluetooth", "android auto", "music", "audio"],
  },
  {
    id: "sunflower-car-dashboard",
    name: "Sunflower Car Dashboard",
    image: "/products/sunflower-car-dashboard.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B076Oa44A",
    tags: ["sunflower", "flower", "dashboard", "decor", "toy", "cute"],
  },
  {
    id: "car-play-by-portronics",
    name: "Car Play by Portronics",
    image: "/products/car-play-by-portronics.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B064JBdCj",
    tags: ["portronics", "carplay", "adapter", "wireless", "audio", "music"],
  },
  {
    id: "car-charging-adapter",
    name: "Car Charging Adapter (12v to 80w)",
    image: "/products/car-charging-adapter.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B03eWxQCG",
    tags: ["charger", "adapter", "charging", "12v", "80w", "power", "usb"],
  },
  {
    id: "cute-couple",
    name: "Cute Couple Car Toy",
    image: "/products/cute-couple.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B0efH33U5",
    tags: ["couple", "toy", "dashboard", "decor", "cute", "romantic"],
  },
  {
    id: "portronics-powerbank",
    name: "Powerbank 10000mAh",
    image: "/products/portronics-pb.jpg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B0cXoOmtS",
    tags: ["powerbank", "charger", "battery", "portronics", "10000mah", "portable"],
  },
  {
    id: "grenaro-mic",
    name: "Wireless Mic (Grenaro)",
    image: "/products/grenaro-mic.jpeg",
    category: "gadgets",
    amazonUrl: "https://link.amazon/B0g8dWiLd",
    tags: ["mic", "microphone", "wireless", "grenaro", "audio", "recording", "vlog"],
  },
  {
    id: "bluetooth-selfie-stick",
    name: "Bluetooth Selfie Stick",
    image: "/products/bluetooth-selfie-stick.jpg",
    category: "gadgets",
    amazonUrl: "https://link.amazon/B0h9NCYIp",
    tags: ["selfie", "stick", "bluetooth", "tripod", "camera", "photography", "stand"],
  },
  {
    id: "sleeping-cat-car-toy",
    name: "Sleeping Cat Car Toy",
    image: "/products/sleeping-cat-car-toy.jpeg",
    category: "Car Accessories",
    amazonUrl: "https://link.amazon/B0bQn0gcH",
    tags: ["sleeping", "cat", "car", "toy", "dashboard", "decor", "cute"],
  }
];
