import { createStore } from "redux";
import cartReducer from "./CartReducer";

const Store = createStore(cartReducer);

export default Store;
