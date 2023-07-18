import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./pages/home/Home";
import Navbar from "./pages/global/Navbar";
import Chair from "./pages/chair/Chair";
import Table from "./pages/table/Table";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ScrollToTop />
          <Navbar />
          <main className="content">
            <Box mx="20px" mt="65px" mb="45px">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/chair" element={<Chair/>} />
                <Route exact path="/table" element={<Table/>} />
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
