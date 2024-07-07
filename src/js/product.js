import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";



const id = getParam('product');
productDetails(id);
