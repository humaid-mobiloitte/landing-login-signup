// import MainScreen from "./assets/MainScreen";
// import CssBaseline from '@mui/material/CssBaseline';
// import Login from "./assets/login";
// import { useState } from "react";
// import CancelIcon from '@mui/icons-material/Cancel';
// // import { useMediaQuery } from '@mui/material';

// function App() {
//   const [authComponent, setAuthComponent] = useState(null);
  
//   // Check if the screen is small (mobile)
//   // const isSmallScreen = useMediaQuery('(max-width:600px)');

//   return (
//     <>
//       <CssBaseline/>
//       {/* Pass setAuthComponent to MainScreen */}
//       <MainScreen setAuthComponent={setAuthComponent} />

//       {/* Render Login/Signup at the highest level */}
//       {authComponent && (
//         <div style={{
//           position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//           background: 'rgba(0, 0, 0, 0.7)', display: 'flex', 
//           alignItems: 'center', justifyContent: 'center', zIndex: 2000
//         }}>
//           <div>
//             <div style={{display:'flex',justifyContent:'flex-end',margin:'0',padding:'0',color:'white',cursor:'pointer'}}>
//               <CancelIcon onClick={() => setAuthComponent(null)}/>
//             </div>
//             {authComponent}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
import MainScreen from "./assets/MainScreen";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Modal, Fade, Box, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function App() {
  const [authComponent, setAuthComponent] = useState(null);

  return (
    <>
      <CssBaseline />
      <MainScreen setAuthComponent={setAuthComponent} />

      {/* Smooth Modal Transition */}
      <Modal
        open={Boolean(authComponent)}
        onClose={() => setAuthComponent(null)}
        closeAfterTransition
      >
        <Fade in={Boolean(authComponent)}>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
            }}
          >
            <div>
              {/* Close Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "0",
                  padding: "0",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <IconButton
                  onClick={() => setAuthComponent(null)}
                  sx={{ color: "white" }}
                >
                  <CancelIcon />
                </IconButton>
              </div>
              {authComponent}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default App;
