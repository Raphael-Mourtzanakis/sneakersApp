// Imports des images de sneakers une par marque
  import airMax from '../assets/sneakers/airJordan.jpg';           // Jordan
  import forceZoom from '../assets/sneakers/airJordan.jpg';        // Jordan
  import airJordan from '../assets/sneakers/airJordan.jpg';        // Jordan
  import allStar from '../assets/sneakers/chuckTaylor.jpg';        // Converse
  import chuckTaylor from '../assets/sneakers/chuckTaylor.jpg';    // Converse
  import runStar from '../assets/sneakers/chuckTaylor.jpg';        // Converse
  import sneakersRouge from '../assets/sneakers/basketsPatch.jpg'; // Givenchy
  import basketsPatch from '../assets/sneakers/basketsPatch.jpg';  // Givenchy
  import urbanStreet from '../assets/sneakers/basketsPatch.jpg';   // Givenchy
  import airForce from '../assets/sneakers/airJordan.jpg';         // Jordan

export const sneakersList = [
  {
    id: '1',
    nom: 'Air Max Isla Sandal',
    marque: 'Nike',
    prix: 69.95,
    style: 'Casual',
    esthetique: 4,
    confort: 5,
    image: airMax,
    bestSeller : true
  },
  {
    id: "2",
    nom: "Force Zoom Trout 7 Pro",
    marque: "Nike",
    prix: 84.95,
    style: "Training",
    esthetique: 3,
    confort: 4,
    image: forceZoom,
    bestSeller : false
  },
  {
    id: "3",
    nom: "Air Jordan 4 RM",
    marque: "Nike",
    prix: 115,
    style: "Streetwear",
    esthetique: 5,
    confort: 3,
    image: airJordan,
    bestSeller : false
  },
  {
    id: "4",
    nom: "All Star",
    marque: "Converse",
    prix: 69.99,
    style: "Casual",
    esthetique: 4,
    confort: 4,
    image: allStar,
    bestSeller : false
  },
  {
    id: "5",
    nom: "Chuck Taylor All Star Lift",
    marque: "Converse",
    prix: 85,
    style: "Streetwear",
    esthetique: 4,
    confort: 1,
    image: chuckTaylor,
    bestSeller : false
  },
  {
    id: "6",
    nom: "Run Star Hike Platform",
    marque: "Converse",
    prix: 110,
    style: "Streetwear",
    esthetique: 3,
    confort: 1,
    image: runStar,
    bestSeller : false
  },
  {
    id: "7",
    nom: "Sneakers Rouge Vif",
    marque: "Givenchy",
    prix: 438,
    style: "Mode",
    esthetique: 5,
    confort: 4,
    image: sneakersRouge,
    bestSeller : false
  },
  {
    id: "8",
    nom: "Baskets à Patch Logo",
    marque: "Givenchy",
    prix: 374,
    style: "Urbain",
    esthetique: 4,
    confort: 4,
    image: basketsPatch,
    bestSeller : true
  },
  {
    id: "9",
    nom: "Urban Street Sneaker",
    marque: "Givenchy",
    prix: 450,
    style: "Mode",
    esthetique: 5,
    confort: 2,
    image: urbanStreet,
    bestSeller : false
  },
  {
    id: "10",
    nom: "Air Force 1",
    marque: "Nike",
    prix: 119.99,
    style: "Streetwear",
    esthetique: 3,
    confort: 5,
    image: airForce,
    bestSeller : true
  }
];