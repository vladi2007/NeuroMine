import { Outlet } from 'react-router-dom';
import { rootStore } from "./stores/root.store";
function App() {
  const { vk } = rootStore;
  console.log(JSON.parse(JSON.stringify(vk.user)))
  if (vk.loading) {
    return <div>Loading...</div>;
  }
  return <Outlet />
  
}

export default App
