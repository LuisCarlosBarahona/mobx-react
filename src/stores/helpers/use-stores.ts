import {useContext} from "react";
import RootStore from "../root-store";
import {StoreContext} from "./store-context";

// custom hook that will get us the stores from React Context
export const useStores = () => {
    return useContext<RootStore>(StoreContext);
};
