export type State = {
  name: string;
  cities: string[];
};

export type Country = {
  name: string;
  states: State[];
};

export const countries: Country[] = [
  {
    name: "Nigeria",
    states: [
      {
        name: "Lagos",
        cities: ["Ikeja", "Lekki", "Victoria Island", "Ikoyi", "Surulere", "Yaba", "Ajah", "Apapa", "Mushin", "Oshodi"]
      },
      {
        name: "Abuja",
        cities: ["Central Business District", "Garki", "Wuse", "Maitama", "Asokoro", "Gwarinpa", "Kubwa", "Nyanya", "Karu", "Jabi"]
      },
      {
        name: "Rivers",
        cities: ["Port Harcourt", "Obio-Akpor", "Eleme", "Okrika", "Bonny", "Oyigbo", "Etche", "Tai", "Gokana", "Khana"]
      },
      // Add more Nigerian states and cities
    ]
  },
  {
    name: "United States",
    states: [
      {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Oakland", "Fresno", "Long Beach"]
      },
      {
        name: "New York",
        cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany", "Yonkers", "White Plains"]
      },
      {
        name: "Texas",
        cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso", "Arlington", "Plano"]
      },
      // Add more US states and cities
    ]
  },
  {
    name: "United Kingdom",
    states: [
      {
        name: "England",
        cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Newcastle", "Bristol", "Oxford"]
      },
      {
        name: "Scotland",
        cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness", "Perth", "Stirling"]
      },
      {
        name: "Wales",
        cities: ["Cardiff", "Swansea", "Newport", "Bangor", "St Davids", "St Asaph"]
      },
      // Add more UK regions and cities
    ]
  },
  // Add more countries as needed
]; 