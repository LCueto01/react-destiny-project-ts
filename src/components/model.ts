import { action,Action,createStore } from "easy-peasy";
import { headArmorData } from "./data";
import {armor} from "./Interfaces"

export interface modelInterface{
  items:armor[],
  addToVault: Action<modelInterface, armor>;
}

 const model:modelInterface = {
  items: headArmorData,

  addToVault: action((state, payload) => {
    state.items.push(payload);
  }),
};

const store = createStore<modelInterface>(model);
export default store
