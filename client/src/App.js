import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import './App.css'
import { Auth } from "./pages/Auth";



function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <NavBar/>
      <Auth/>
      <AppRouter/>
    </BrowserRouter>
    </div>
  );
}

export default App;
