import Nav from "./components/nav";
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  );
}

export default App
