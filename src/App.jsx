

import "./App.css";


// importamos las rutas de la aplicación y el RouterProvider
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
