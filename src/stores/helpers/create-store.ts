import RootStore from "../root-store";
import {wrapRoot} from "mobx-easy";
import TodoService from "../../services/todo-service";

export interface RootEnv {
  todoService: TodoService;
  isDev: boolean;
}

// Helper function, so we have 1 clear place to initialize our RootStore and everything related to it.
export const createStore = () => {
  const env = {
    todoService: new TodoService(),
    isDev: process.env.NODE_ENV === 'development'
  };

  const rootStore = wrapRoot({
    RootStore: RootStore,
    env
  });

  return rootStore as RootStore;
};
