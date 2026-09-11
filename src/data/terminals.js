// Central terminal data — single source of truth for all terminal-related components.
// Holy Ghost 1 and 2 are DISTINCT terminals within the Holy Ghost complex — do not merge.
// Images are authentic terminal photographs already in the project; easy to replace by updating imports.

import holyGhost1 from "../assets/terminal1img.jpg";
import holyGhost2 from "../assets/HolyGhost_Terminal_2.jpg";
import garikiImg from "../assets/Gariki_terminal.jpg";
import abakpaImg from "../assets/Abakpa_terminal.jpg";

export const terminals = [
  {
    id: "holy-ghost-terminal-1",
    name: "Holy Ghost Bus Terminal 1",
    label: "Headquarters",
    group: "holy-ghost",
    description:
      "The headquarters of Enugu East-Zone Bus Terminals and a major centre for town-service buses, State-owned BRT operations and selected mass-transit services.",
    image: holyGhost1,
    route: "/terminals/holy-ghost-terminal-1",
    phone: "08085555642",
    email: "enugueastbustterminals@gmail.com",
    connectionNote: null,
  },
  {
    id: "holy-ghost-terminal-2",
    name: "Holy Ghost Bus Terminal 2",
    label: "Interstate & Night Travel",
    group: "holy-ghost",
    description:
      "Connected to Terminal 1 by a pedestrian cart-walk/bridge, Terminal 2 serves a major share of interstate mass-transit and luxury bus operations, including a significant volume of night travel.",
    image: holyGhost2,
    route: "/terminals/holy-ghost-terminal-2",
    phone: "08085555642",
    email: "enugueastbustterminals@gmail.com",
    connectionNote: "Connected by pedestrian cart-walk/bridge",
  },
  {
    id: "gariki",
    name: "Gariki Bus Terminal",
    label: "Organising Transport Around Gariki",
    group: "gariki",
    description:
      "Located at Gariki, the terminal supports the reorganisation of transport activity around the Gariki Market area, helping to reduce congestion and improve the movement of people and goods.",
    image: garikiImg,
    route: "/terminals/gariki",
    phone: "08085555642",
    email: "enugueastbustterminals@gmail.com",
    connectionNote: null,
  },
  {
    id: "abakpa",
    name: "Abakpa Bus Terminal",
    label: "Improving Movement Along the Abakpa–Nike Axis",
    group: "abakpa",
    description:
      "Situated in Abakpa Nike, the terminal is intended to draw transport activity away from the major road, helping create a more orderly environment and freer movement for people and goods along the axis.",
    image: abakpaImg,
    route: "/terminals/abakpa",
    phone: "08085555642",
    email: "enugueastbustterminals@gmail.com",
    connectionNote: null,
  },
];

export const getTerminalById = (id) => terminals.find((t) => t.id === id);
