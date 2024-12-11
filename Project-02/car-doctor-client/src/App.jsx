import { Route, Routes } from "react-router";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home/>}/>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
