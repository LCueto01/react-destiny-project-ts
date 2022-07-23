import { action } from "easy-peasy";
import { headArmorData } from "./data";
export const model = {
  items: headArmorData,
  addToVault: action((state, payload) => {
    state.items.push(payload);
    console.log(state);
  }),
};
