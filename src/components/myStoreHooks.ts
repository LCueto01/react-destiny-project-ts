import { createTypedHooks } from "easy-peasy";
import {modelInterface} from "./model"

const typedHooks = createTypedHooks<modelInterface>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState