import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<div>Home Page</div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
