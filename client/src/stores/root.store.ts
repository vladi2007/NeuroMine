import { VKStore } from "./vk.store";

export class RootStore {
  vk = new VKStore();
}

export const rootStore = new RootStore();