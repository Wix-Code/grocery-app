import { ImageSourcePropType } from "react-native";

interface Data {
  id: number;
  name: string;
  ml: string;
  price: number;
  img: ImageSourcePropType; // image path or url
  link: string // image path or url
}

interface Product {
  id: number;
  name: string;
  img: ImageSourcePropType; // image path or url
  link: string
}

export const data: Data[] = [
  {
    id: 1,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/ban.png"),
    link: "/beverages"
  },
  {
    id: 2,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/ban.png"),
    link: "/beverages"
  },
  {
    id: 3,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/pro2.png"),
    link: "/beverages"
  },
  {
    id: 4,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    link: "/beverages",
    img: require("../../assets/images/pro3.png")
  },
  {
    id: 5,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/pro.png"),
    link: "/beverages"
  },
  {
    id: 6,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/pro1.png"),
    link: "/beverages"
  },
  {
    id: 7,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/pro2.png"),
    link: "/beverages"
  },
  {
    id: 8,
    name: "Diet Coke",
    ml: "355ml, Price",
    price: 1.99,
    img: require("../../assets/images/pro3.png"),
    link: "/beverages"
  },
]

export const product:Product[] = [
  {
    id: 1,
    img: require("../../assets/images/foo.png"),
    name: "Meat & Fish",
    link: "/beverages"
  },
  {
    id: 2,
    img: require("../../assets/images/foo2.png"),
    name: "Beverages",
    link: "/beverages"
  },
  {
    id: 3,
    img: require("../../assets/images/foo1.png"),
    name: "Drinks",
    link: "/beverages"
  },
  {
    id: 4,
    img: require("../../assets/images/foo4.png"),
    name: "Pastaries",
    link: "/beverages"
  },
  {
    id: 5,
    img: require("../../assets/images/foo3.png"),
    link: "/beverages",
    name: "Bakery & Snacks"
  },
  {
    id: 6,
    img: require("../../assets/images/foo2.png"),
    link: "/beverages",
    name: "Cooking Oil & Ghee",
  },
  {
    id: 7,
    img: require("../../assets/images/foo1.png"),
    name: "Bakery & Snacks",
    link: "/beverages"
  },
  {
    id: 8,
    img: require("../../assets/images/foo.png"),
    name: "Frash Fruits Vegetable",
    link: "/beverages"
  },
]
//https://www.figma.com/design/ujdeCVhgfPqWAsEBkBcNA1/Online-Groceries-App-UI-(Community)?node-id=1-2&p=f&t=7cNcyLIIsewwlOtU-0

//https://www.figma.com/design/Nnk3Cx6Da6CdwV6hBnDZqr/Coffee-Shop-Mobile-App-Design-(Community)?t=3F9l9PdxcvRAPZ5z-0

//https://www.figma.com/design/RUNkmlI0Ecb2pmfK8rlINH/Food-Delivery-App-(Community)?node-id=0-1&p=f&t=hsR4U5RFCuiqxXXh-0

//https://www.figma.com/design/VoMIFLXse05eKt7OphrcuJ/WhatsApp-UI-Screens-(Community)?node-id=0-8102&p=f&t=1A9wfX6Qsx8LHT8k-0