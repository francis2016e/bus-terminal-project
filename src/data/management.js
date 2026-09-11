// Management team — generated from src/assets/managemrnt team images filenames.
// Preserve name/designation exactly as represented by filename; only underscores → spaces for display.
// To add a member: add image to src/assets/managemrnt team images with "Name_Designation.jpg" or "Designation_Name.jpg" and add entry here with category/order.

import abakpaManager from "../assets/managemrnt team images/Abakpa terminal manager_Mr. Ugwuike Ifeanyi.jpg";
import judeOkolo from "../assets/managemrnt team images/Dr. Jude Okolo_SPA to the managing Director.jpg";
import obiageliOnyia from "../assets/managemrnt team images/Dr. Obiageli P. Onyia_Director Finance and accounts.jpg";
import johnEgbo from "../assets/managemrnt team images/Hon. Dr. John N. Egbo_former Deputy Sheriff in the US_former commissioner of environment_transport_and_capital territory.jpg";
import amechiNkwuo from "../assets/managemrnt team images/Mr. Amechi Nkwuo_Head of Enforcement department.jpg";
import callistusOrji from "../assets/managemrnt team images/Mr. Callistus orji-ogbu_Terminal 1 manager.jpg";
import chidiebereEmeh from "../assets/managemrnt team images/Mr. Chidiebere Francis Emeh_Secretary EEBT.jpg";
import godfreyAkpugo from "../assets/managemrnt team images/Mr. Godfrey Somtochukwu Akpugo_Secretary EEBT.jpg";
import ikechukwuEdeh from "../assets/managemrnt team images/Mr. Ikechukwu Edeh_HOD Environment.jpg";
import josephOkenwa from "../assets/managemrnt team images/Mr. Joseph Nkwuo Okenwa_Manager terminal 2.jpg";
import onyiaDaniel from "../assets/managemrnt team images/secretary enforcement team_Mr. Onyia Daniel.jpg";

export const managementTeam = [
  {
    id: "hon-john-egbo",
    name: "Hon. Dr. John N. Egbo",
    designation: "former Deputy Sheriff in the US, former commissioner of environment, transport and capital territory",
    rawDesignation: "former Deputy Sheriff in the US_former commissioner of environment_transport_and_capital territory",
    image: johnEgbo,
    category: "md",
    order: 1,
  },
  {
    id: "jude-okolo",
    name: "Dr. Jude Okolo",
    designation: "SPA to the managing Director",
    rawDesignation: "SPA to the managing Director",
    image: judeOkolo,
    category: "spa",
    order: 2,
  },
  {
    id: "obiageli-onyia",
    name: "Dr. Obiageli P. Onyia",
    designation: "Director Finance and accounts",
    rawDesignation: "Director Finance and accounts",
    image: obiageliOnyia,
    category: "dfa",
    order: 3,
  },
  {
    id: "callistus-orji",
    name: "Mr. Callistus Orji-ogbu",
    designation: "Holy Ghost Bus Terminal 1 manager",
    rawDesignation: "Holy Ghost Bus Terminal 1 manager",
    image: callistusOrji,
    category: "terminal-managers",
    order: 4,
  },
  {
    id: "joseph-okenwa",
    name: "Mr. Nkwuo Joseph Okenwa",
    designation: "Manager Holy Ghost Bus Terminal 2",
    rawDesignation: "Manager Holy Ghost Bus Terminal 2",
    image: josephOkenwa,
    category: "terminal-managers",
    order: 5,
  },
  {
    id: "ugwuike-ifeanyi",
    name: "Mr. Ugwuike Ifeanyi",
    designation: "Abakpa terminal manager",
    rawDesignation: "Abakpa terminal manager",
    image: abakpaManager,
    category: "terminal-managers",
    order: 6,
  },
  {
    id: "chidiebere-emeh",
    name: "Mr. Chidiebere Francis Emeh",
    designation: "Secretary EEBT",
    rawDesignation: "Secretary EEBT",
    image: chidiebereEmeh,
    category: "eebt-secretaries",
    order: 7,
  },
  {
    id: "godfrey-akpugo",
    name: "Mr. Godfrey Somtochukwu Akpugo",
    designation: "Secretary EEBT",
    rawDesignation: "Secretary EEBT",
    image: godfreyAkpugo,
    category: "eebt-secretaries",
    order: 8,
  },
  {
    id: "ikechukwu-edeh",
    name: "Mr. Ikechukwu Edeh",
    designation: "HOD Environment",
    rawDesignation: "HOD Environment",
    image: ikechukwuEdeh,
    category: "department-heads",
    order: 9,
  },
  {
    id: "amechi-nkwuo",
    name: "Mr. Amechi Nkwuo",
    designation: "Head of Enforcement department",
    rawDesignation: "Head of Enforcement department",
    image: amechiNkwuo,
    category: "security-heads",
    order: 10,
  },
  {
    id: "onyia-daniel",
    name: "Mr. Onyia Daniel",
    designation: "Secretary Enforcement Team",
    rawDesignation: "secretary enforcement team",
    image: onyiaDaniel,
    category: "department-secretaries",
    order: 11,
  },
];

export const managementCategories = [
  { id: "md", label: "Managing Director" },
  { id: "spa", label: "SPA" },
  { id: "dfa", label: "DFA" },
  { id: "terminal-managers", label: "Terminal Managers" },
  { id: "eebt-secretaries", label: "Secretaries of EEBT" },
  { id: "department-heads", label: "Heads of Departments" },
  { id: "security-heads", label: "Security Department Heads" },
  { id: "department-secretaries", label: "Secretaries of Other Departments" },
];
