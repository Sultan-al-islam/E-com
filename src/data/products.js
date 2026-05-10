import gc1 from "../assets/GamingChair/fadoul-m-CIs7k5TlOic-unsplash.jpg";
import gc2 from "../assets/GamingChair/fadoul-m-dTNOrVucutA-unsplash.jpg";
import gc3 from "../assets/GamingChair/hannes-kottner-Wxc0hAt0nQI-unsplash.jpg";

import c1 from "../assets/GamingConsole/billy-freeman-DPOdCl4bGJU-unsplash.jpg";
import c2 from "../assets/GamingConsole/erik-mclean-JHKrEcjXSi8-unsplash.jpg";
import c3 from "../assets/GamingConsole/igor-karimov-59MGmlUiqwA-unsplash.jpg";

import gh1 from "../assets/GamingHeadphone/andrey-matveev-huF_odQnpMo-unsplash.jpg";
import gh2 from "../assets/GamingHeadphone/fausto-sandoval-w5m3PIGvkqI-unsplash.jpg";
import gh3 from "../assets/GamingHeadphone/haidan-VzsbiM1HFJY-unsplash.jpg";

import gcard1 from "../assets/Grapicscard/download (1).jpg";
import gcard2 from "../assets/Grapicscard/download (2).jpg";
import gcard3 from "../assets/Grapicscard/download.jpg";

import kb1 from "../assets/keybord/dao-hi-u-oNtKMkE8riY-unsplash.jpg";
import kb2 from "../assets/keybord/jay-zhang-ZRoC_96HPnw-unsplash.jpg";
import kb3 from "../assets/keybord/jl-cabrera-oYUO3KAJky0-unsplash.jpg";

import m1 from "../assets/Mouse/download (6).jpg";
import m2 from "../assets/Mouse/download (7).jpg";
import m3 from "../assets/Mouse/download (8).jpg";

import pb1 from "../assets/powerbank/download (10).jpg";
import pb2 from "../assets/powerbank/download (11).jpg";
import pb3 from "../assets/powerbank/download (12).jpg";

import r1 from "../assets/Ram/download (3).jpg";
import r2 from "../assets/Ram/download (4).jpg";
import r3 from "../assets/Ram/download (5).jpg";

import sw1 from "../assets/Smartwatch/al-amin-mir-28fl492HCZc-unsplash.jpg";
import sw2 from "../assets/Smartwatch/andrey-matveev-UwbAo0SR3L0-unsplash.jpg";
import sw3 from "../assets/Smartwatch/daniel-tomlinson-fFJqJ_GWxxk-unsplash.jpg";

import tws1 from "../assets/TWS/arjun-anil-ymfiokQznTo-unsplash.jpg";
import tws2 from "../assets/TWS/dagny-reese-mx4oQdFJ2rY-unsplash.jpg";
import tws3 from "../assets/TWS/daniel-romero-6V5vTuoeCZg-unsplash.jpg";

export const products = [
  {
    id: 1,
    name: "ErgoPro RGB Gaming Chair",
    category: "GamingChair",
    price: 4500,
    salePrice: 3800,
    badge: "HOT",
    images: [gc1, gc2, gc3],
    description: "Experience ultimate comfort during long gaming sessions with the ErgoPro RGB.",
    specs: ["Adjustable Lumbar Support", "RGB Lighting", "150kg Weight Capacity"],
    brand: "Snapptek",
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "NextGen Gaming Console X",
    category: "GamingConsole",
    price: 45000,
    salePrice: null,
    badge: "NEW",
    images: [c1, c2, c3],
    description: "The ultimate next-generation gaming console with 4K output.",
    specs: ["4K 120fps", "1TB Custom NVMe SSD", "Ray Tracing Support"],
    brand: "GamerBrand",
    isBestSeller: false,
    isFeatured: true
  },
  {
    id: 3,
    name: "SonicPulse 7.1 Headset",
    category: "GamingHeadphone",
    price: 2500,
    salePrice: 1999,
    badge: "SALE",
    images: [gh1, gh2, gh3],
    description: "Immersive 7.1 surround sound for competitive gaming.",
    specs: ["7.1 Surround Sound", "Noise-Cancelling Mic", "Memory Foam Earpads"],
    brand: "AudioTech",
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 4,
    name: "RTX 4090 OC Edition",
    category: "GraphicsCard",
    price: 150000,
    salePrice: 145000,
    badge: null,
    images: [gcard1, gcard2, gcard3],
    description: "Unparalleled performance for gamers and creators.",
    specs: ["24GB GDDR6X", "DLSS 3.0", "Triple Fan Cooling"],
    brand: "Nvidia",
    isBestSeller: false,
    isFeatured: true
  },
  {
    id: 5,
    name: "MechStrike Pro Keyboard",
    category: "Keyboard",
    price: 3500,
    salePrice: 2999,
    badge: "HOT",
    images: [kb1, kb2, kb3],
    description: "Mechanical keyboard with hot-swappable switches and per-key RGB.",
    specs: ["Hot-Swappable", "PBT Keycaps", "Wired/Wireless"],
    brand: "KeyMaster",
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 6,
    name: "PrecisionAim Elite Mouse",
    category: "Mouse",
    price: 1800,
    salePrice: 1500,
    badge: "SALE",
    images: [m1, m2, m3],
    description: "Ultra-lightweight gaming mouse with pixel-perfect accuracy.",
    specs: ["26,000 DPI", "60g Weight", "Optical Switches"],
    brand: "AimLab",
    isBestSeller: true,
    isFeatured: false
  },
  {
    id: 7,
    name: "ChargeMax 20000mAh",
    category: "PowerBank",
    price: 2200,
    salePrice: 1800,
    badge: null,
    images: [pb1, pb2, pb3],
    description: "High-capacity power bank with fast charging support.",
    specs: ["20000mAh", "65W Fast Charge", "Triple Output"],
    brand: "VoltTech",
    isBestSeller: true,
    isFeatured: false
  },
  {
    id: 8,
    name: "HyperSpeed 32GB RAM Kit",
    category: "RAM",
    price: 8500,
    salePrice: 8000,
    badge: "NEW",
    images: [r1, r2, r3],
    description: "Blazing fast DDR5 memory for optimal system performance.",
    specs: ["32GB (2x16GB)", "DDR5 6000MHz", "RGB Heatsink"],
    brand: "MemCore",
    isBestSeller: false,
    isFeatured: true
  },
  {
    id: 9,
    name: "TechFit Pro Smartwatch",
    category: "Smartwatch",
    price: 5000,
    salePrice: 4500,
    badge: "HOT",
    images: [sw1, sw2, sw3],
    description: "Keep track of your health and notifications on the go.",
    specs: ["AMOLED Display", "Heart Rate Monitor", "14-Day Battery"],
    brand: "WearTech",
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 10,
    name: "AirBeat TWS Earbuds",
    category: "TWS",
    price: 2000,
    salePrice: 1499,
    badge: "SALE",
    images: [tws1, tws2, tws3],
    description: "True wireless earbuds with active noise cancellation.",
    specs: ["ANC", "30H Playtime", "Bluetooth 5.3"],
    brand: "AudioTech",
    isBestSeller: true,
    isFeatured: true
  }
];
