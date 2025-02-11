import MainScreen from "./assets/MainScreen";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Modal, Fade, Box, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import mainStyles from "./assets/styling/mainStyles";

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

          {/* FULL BLACK SCREEN */}
          <Box sx={mainStyles.modalOverlay}>

            <div>
              {/* Close Button */}
              <div style={mainStyles.closeButtonContainer}>
                <IconButton
                  onClick={() => setAuthComponent(null)}
                  sx={mainStyles.closeButton}
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// import MainScreen from "./assets/MainScreen";
// import CssBaseline from "@mui/material/CssBaseline";
// import { useState } from "react";
// import { Modal, Fade, Box, IconButton, Paper } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";

// function App() {
//   const [authComponent, setAuthComponent] = useState(null);

//   return (
//     <>
//       <CssBaseline />
//       <MainScreen setAuthComponent={setAuthComponent} />

//       {/* Smooth Modal Transition */}
//       <Modal
//         open={Boolean(authComponent)}
//         onClose={() => setAuthComponent(null)}
//         closeAfterTransition
//       >
//         <Fade in={Boolean(authComponent)}>
//           <Box
//             sx={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               background: "rgba(0, 0, 0, 0.7)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               zIndex: 2000,
//             }}
//           >
//             <Paper
//               elevation={5}
//             >
//               {/* Close Button */}
//               <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                 <IconButton
//                   onClick={() => setAuthComponent(null)}
//                   sx={{ color: "black" }}
//                 >
//                   <CancelIcon />
//                 </IconButton>
//               </div>

//               {authComponent}
//             </Paper>
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// }

// export default App;

