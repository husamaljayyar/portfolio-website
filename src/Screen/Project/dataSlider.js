import { v4 as uuidv4 } from "uuid";
import ECommerce from "../../Image/ECommerce.png";
import Restaurant from "../../Image/restaurant.png";

import Login from "../../Image/login.png"; //
import movies from "../../Image/movies.png"; //
import ToDoList from "../../Image/ToDoList.png";
import Flower from "../../Image/flower.png";
import ExpenseTracker from "../../Image/ExpenseTracker.png";
import Hotel from "../../Image/hotel.png";

const dataSlider = [
  {
    id: uuidv4(),
    title: "E-Commerce ",
    image: ECommerce,
    link: "https://ecommerce-two-silk.vercel.app",
  },
  {
    id: uuidv4(),
    title: "Restaurant",
    image: Restaurant,
    link: "https://restaurant-website-xi-two.vercel.app",
  },
  {
    id: uuidv4(),
    title: "Hotel website",
    image: Hotel,
    link: "https://hotel-website-eight-pink.vercel.app",
  },
  {
    id: uuidv4(),
    title: "movies",
    image: movies,
    link: "https://movies-blue.vercel.app",
  },
  {
    id: uuidv4(),
    title: "Flower",
    image: Flower,
    link: "https://photo-app-psi.vercel.app",
  },
  {
    id: uuidv4(),
    title: "ExpenseTracker",
    image: ExpenseTracker,
    link: "https://expense-tracker-zeta-one.vercel.app",
  },
  {
    id: uuidv4(),
    title: "Login",
    image: Login,
    link: "https://simple-login-eta.vercel.app",
  },

  {
    id: uuidv4(),
    title: "ToDoList ",
    image: ToDoList,
    link: "https://to-do-list-ten-vert.vercel.app",
  },
];

export default dataSlider;
