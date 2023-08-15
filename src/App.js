/* eslint-disable no-unused-vars */
import style from './App.module.css';
import { Route, Switch, useLocation,Router,Routes} from "react-router-dom";
import Home from './views/Home/Home';
import Details from './views/Details/Details';
import Create from './views/Create/Create';
import Landing from './views/Landing/Landing';
import NavBar from './components/NavBar/NavBar';

function App() {

const location = useLocation();
  return (
    <div className={style.appContainer}>
        {location.pathname!=="/"? <NavBar/>:null}
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/create"} element={<Create/>}/>
        <Route path={"/details/:id"} element={<Details/>}/>
      </Routes>
    </div>
  );
}
export default App;
