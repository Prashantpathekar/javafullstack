import { ProductProvider } from "./seller/ProductContext";
import Routers from "./Routers";

function App() {
  return (
    <ProductProvider>
      <Routers />
    </ProductProvider>
  );
}

export default App;
