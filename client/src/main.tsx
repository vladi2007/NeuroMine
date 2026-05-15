import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router/dom";
import { routes } from "./config/routes";

import { rootStore } from "./stores/root.store";

async function start() {
  await rootStore.vk.init()

  createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <RouterProvider router={routes} />
  </StrictMode>,
)

}


start();