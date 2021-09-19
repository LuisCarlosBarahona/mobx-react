// We will use React Context so we can get the root store from all of our components
import {createContext} from "react";
import RootStore from "../root-store";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
