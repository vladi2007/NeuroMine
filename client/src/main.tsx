import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { routes } from "./config/routes";

import { rootStore } from "./stores/root.store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function start() {
  await rootStore.vk.init();

  createRoot(document.getElementById("root")!).render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
  );
}

start();