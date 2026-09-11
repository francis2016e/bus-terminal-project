import t1shop1 from "../assets/enugu_bus_terminal_bay.webp";
import t1shop2 from "../assets/enugu_bus_terminal_hall.webp";
import t1shop3 from "../assets/Gariki_terminal.jpg";
import t1shop4 from "../assets/Abakpa_terminal.jpg";
import t1shop5 from "../assets/HolyGhost_Terminal_2.jpg";




// Central terminal source is now src/data/terminals.js — keep this export for backward compatibility.
// This ensures ONE central data structure while legacy components (Locations) can still import `terminalData`.
import { terminals as centralTerminals } from "../data/terminals";

export const terminalData = centralTerminals.map((t) => ({
  id: t.id,
  name: t.name,
  location: t.label,
  description: t.description,
  image: t.image,
  route: t.route,
}));


export const shops = [
  {
    id: 1,
    image: t1shop5,
    name: "Luxury Boutique Space",
    // price: "$500/mo",
    // location: "Terminal 1",
    imageArray: [t1shop1, t1shop2, t1shop3, t1shop4],
  },
  {
    id: 2,
    image: t1shop2,
    name: "Express Coffee Kiosk",
    // price: "$350/mo",
    // location: "Terminal 2",
    imageArray: [t1shop2, t1shop3, t1shop4, t1shop1],
  },
  {
    id: 3,
    image: t1shop3,
    name: "Tech & Gadget Hub",
    // price: "$600/mo",
    // location: "Abakpa Terminal",
    imageArray: [t1shop3, t1shop4, t1shop1, t1shop2],
  },
  {
    id: 4,
    image: t1shop4,
    name: "Bookstore & Stationery",
    // price: "$450/mo",
    // location: "Gariki Terminal",
    imageArray: [t1shop4, t1shop1, t1shop2, t1shop3],
  },
];

export const shopListings = [
  {
    id: 1,
    image: t1shop5,
    location: "Terminal 1",
    
  },
  {
    id: 2,
    image: t1shop2,
    location: "Terminal 2",
  },
  { 
    id: 3,
    image: t1shop3,
    location: "Abakpa Terminal",
  },
  {
    id: 4,
    image: t1shop4,
    location: "Gariki Terminal",
  },
];