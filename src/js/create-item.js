import compileHandle from "../handle-item.hbs";
import baseForItem from "../menu.json";
const listForItems = document.querySelector(".js-menu");

const items = compileHandle(baseForItem);
export default listForItems.insertAdjacentHTML("beforeend", items);
