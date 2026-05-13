import { createBrowserRouter } from "react-router";
import App from "./App";
import Component from "./Component";

export const routes =  createBrowserRouter([
  {
    Component:App,
    children:[
        {
            index:true,
            Component:Component
        }
    ]
  },
  
    
]);
