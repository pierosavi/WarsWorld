export type Player = {
  id: string;
  name: string;
  games: number;
  wins: number;
  rating: number;
  streak: number;
};

export default function getTableData() {
  const data: Player[] = [
    {
      id: "2ca47f5d-6950-4b33-9b8c-3472db9a42be",
      name: "Humita",
      games: 123,
      wins: 75,
      rating: 1500,
      streak: 50,
    },
    {
      id: "5a48505a-635a-4d9d-bccf-6c1c8aee3a9a",
      name: "Example1",
      games: 456,
      wins: 300,
      rating: 1800,
      streak: 21,
    },
    {
      id: "d28f895d-d2d5-492e-89d2-0d9c7b9a22ab",
      name: "Example2",
      games: 789,
      wins: 500,
      rating: 1200,
      streak: 35,
    },
    {
      id: "860ef16f-774a-4099-89e5-c992eb563235",
      name: "Incuggarch",
      games: 200,
      wins: 150,
      rating: 1400,
      streak: 10,
    },
    {
      id: "fba8cfd9-28f3-446c-aeae-cd2b2d98f8d2",
      name: "Go7",
      games: 1000,
      wins: 600,
      rating: 1900,
      streak: 4,
    },
    {
      id: "e11f6829-797d-4b82-b7db-0cbbe7f8a23e",
      name: "Username1",
      games: 250,
      wins: 125,
      rating: 1600,
      streak: 8,
    },
    {
      id: "b0c4be1d-6862-432b-bab2-53a6e7db4d17",
      name: "Gamer123",
      games: 800,
      wins: 400,
      rating: 1700,
      streak: 20,
    },
    {
      id: "73e66316-00f2-481d-97c5-05f07414ab16",
      name: "ProGamer99",
      games: 600,
      wins: 300,
      rating: 1999,
      streak: 0,
    },
    {
      id: "f64c8990-00b7-4292-855f-dc1f1e4747db",
      name: "Clive",
      games: 150,
      wins: 75,
      rating: 1300,
      streak: 16,
    },
    {
      id: "98f14034-7a37-4e3b-8807-c11e84b9130e",
      name: "HiroshiHayashi",
      games: 300,
      wins: 300,
      rating: 2000,
      streak: 300,
    },
    {
      id: "e2001d41-5ef4-4ff9-bf8f-b50e82c508a0",
      name: "MasterChief",
      games: 700,
      wins: 400,
      rating: 1800,
      streak: 14,
    },
    {
      id: "2b619c61-7bb3-44d0-bb06-394a0efed728",
      name: "Mangs",
      games: 400,
      wins: 250,
      rating: 1500,
      streak: 12,
    },
    {
      id: "c2dbf9a5-7e0e-4e80-9b25-549c2b5e42ad",
      name: "Black",
      games: 180,
      wins: 80,
      rating: 1200,
      streak: 10,
    },
    {
      id: "c9725da9-96f6-4fd7-88fe-c36fc5bbca7d",
      name: "User1",
      games: 150,
      wins: 75,
      rating: 1300,
      streak: 0,
    },
    {
      id: "ad369953-7e24-4076-860d-bb01470834ce",
      name: "Player42",
      games: 300,
      wins: 200,
      rating: 1600,
      streak: 2,
    },
    {
      id: "a2b29dab-36e1-4a94-a8fb-1093d9cc1c94",
      name: "GamingMaster",
      games: 700,
      wins: 400,
      rating: 1800,
      streak: 2,
    },
    {
      id: "07fe14b3-56dd-44cd-a1d2-07efce8a8f34",
      name: "OnlineGamer",
      games: 400,
      wins: 250,
      rating: 1500,
      streak: 0,
    },
    {
      id: "5187e5a6-8082-4d59-a847-8e9983be5a1d",
      name: "CasualPlayer",
      games: 180,
      wins: 80,
      rating: 1200,
      streak: 3,
    },
    {
      id: "873b598d-9307-4166-bff0-51dbd1ac543a",
      name: "ProGamer2000",
      games: 1000,
      wins: 800,
      rating: 1950,
      streak: 5,
    },
    {
      id: "c7d246b5-5872-4fb0-9ae2-d1c31302f866",
      name: "GamingChamp",
      games: 600,
      wins: 450,
      rating: 1700,
      streak: 13,
    },
    {
      id: "f97998b7-6db6-4e63-9e26-169a9e5ebc2b",
      name: "SuperGamer",
      games: 250,
      wins: 200,
      rating: 1900,
      streak: 43,
    },
    {
      id: "409c1941-9cb7-445a-a9f4-45e3eb2af546",
      name: "CasualGamer",
      games: 400,
      wins: 150,
      rating: 1400,
      streak: 5,
    },
    {
      id: "e081ee0e-349c-4257-a0b3-417243f662b5",
      name: "ProPlayer123",
      games: 900,
      wins: 700,
      rating: 1800,
      streak: 23,
    },
    {
      id: "55c4f6a9-7f7c-4252-9581-2a0f076ed4c6",
      name: "Elysium",
      games: 250,
      wins: 180,
      rating: 1600,
      streak: 7,
    },
    {
      id: "01fd3c4d-0e9d-415a-9d12-3c859d634bfe",
      name: "NebulaX",
      games: 500,
      wins: 350,
      rating: 1800,
      streak: 0,
    },
    {
      id: "cfc8a36c-482a-4c9c-837a-10082e7ad6bc",
      name: "Spectron",
      games: 800,
      wins: 500,
      rating: 1950,
      streak: 5,
    },
    {
      id: "8b8b2f1e-3a6e-4e97-a7e1-2227d3a1e8f5",
      name: "Zephyrus",
      games: 400,
      wins: 275,
      rating: 1750,
      streak: 10,
    },
    {
      id: "f0dd1a6e-4823-43a6-93e7-09dd742bdc9e",
      name: "NovaStar",
      games: 600,
      wins: 400,
      rating: 1900,
      streak: 0,
    },
    {
      id: "2b1de4cd-3a3f-4972-ae0d-5d16c8e9e170",
      name: "Luminex",
      games: 350,
      wins: 200,
      rating: 1650,
      streak: 8,
    },
    {
      id: "a1f7390a-b438-4871-9c0f-60a6eb71f7be",
      name: "Chronos",
      games: 700,
      wins: 450,
      rating: 1850,
      streak: 3,
    },
    {
      id: "0f2e0aa4-1565-4fa7-9420-18e63508bdf0",
      name: "AuroraX",
      games: 450,
      wins: 350,
      rating: 1700,
      streak: 12,
    },
  ];
  return data;
}
