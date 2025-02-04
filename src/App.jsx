import MainScreen from "./assets/MainScreen"
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./assets/login";
import { useState } from "react";

function App() {
  const [authComponent, setAuthComponent] = useState(null);

  return (
    <>
      <CssBaseline/>
      {/* Pass setAuthComponent to MainScreen */}
      <MainScreen setAuthComponent={setAuthComponent} />

      {/* Render Login/Signup at the highest level */}
      {authComponent && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 1000
        }}>
          <div>
            {authComponent}
            {/* YE NHI CHAHIYE, UPAR CROSS CHAHIYE */}
{/*             
            <button onClick={() => setAuthComponent(null)} style={{
              marginTop: '10px', display: 'block', width: '100%',
              padding: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '5px'
            }}>Close</button> */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;