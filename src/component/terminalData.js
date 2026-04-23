import t1shop1 from "../assets/T1shop1.jfif";
import t1shop2 from "../assets/T1shop2.jfif";
import t1shop3 from "../assets/T1shop3.jfif";
import t1shop4 from "../assets/T1shop4.jfif";
import t1shop5 from "../assets/T1shop5.jfif";




export const terminalData = [
  {
    id: 1,
    name: "Holy-Ghost Terminal 1",
    location: "Holy-Ghost Road, Enugu",
    description:
      "Holy-Ghost Terminal 1 is a major bus terminal located on Holy-Ghost Road in Enugu. It serves as a hub for various bus routes and transportation services in the city.",  
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400",
  },
  { 
    id: 2,
    name: "Holy-Ghost Terminal 2",
    location: "Main Street, Enugu",
    description:  
      "Holy-Ghost Terminal 2 is a secondary bus terminal in Enugu, providing transportation services to various destinations within and outside the city.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400",
  },
  {
    id: 3,
    name: "Abakpa Terminal",
    location: "Abakpa, Enugu",
    description:
      "Abakpa Terminal is a bus terminal located in the Abakpa area of Enugu, offering transportation services to commuters in the region.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400",
  },

  { 
    id: 4,
    name: "Gariki Terminal",
    location: "Gariki, Enugu",
    description:
      "Gariki Terminal is a bus terminal situated in Gariki, Enugu, providing transportation services to various destinations within and outside the city.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400",

  }
];


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