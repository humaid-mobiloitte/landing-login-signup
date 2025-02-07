import MainScreen from "./assets/MainScreen"
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./assets/login";
import { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';

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
          justifyContent: 'center', zIndex: 2000
        }}>
          <div>
            <div style={{display:'flex',justifyContent:'flex-end',margin:'0',padding:'0',color:'white',cursor:'pointer'}}><CancelIcon onClick={() => setAuthComponent(null)}/></div>
            {authComponent}
          </div>
        </div>
      )}
    </>
  );
}

export default App;