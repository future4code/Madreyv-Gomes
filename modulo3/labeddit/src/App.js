import React from "react";
import RouterPages from "./routes/RouterPages.js";

import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'//theme
import 'primereact/resources/primereact.min.css'//core css
import 'primeicons/primeicons.css'//icons
 

function App() {
  return (
    <div >
      <RouterPages/>
    </div>
  );
}

export default App;
