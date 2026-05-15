import { makeAutoObservable, runInAction } from "mobx";

import bridge from "@vkontakte/vk-bridge";

export class VKStore {
  user: any = null;

  loading = true;

  initialized = false;

  constructor() {
    makeAutoObservable(this);
  }

  async init() {
    try {
      await bridge.send("VKWebAppInit");

      const user = await bridge.send(
        "VKWebAppGetUserInfo",
      );
      runInAction(() => {
        this.user = user;

        this.initialized = true;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}