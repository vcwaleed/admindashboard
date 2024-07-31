import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/share/layout";
import Dashboard from "./component/dashboard";
import Product from "./component/product";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route index element={<Dashboard/>} /> 
          <Route path="product" element={<Product/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
