import React from "react";

import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SearchPage from "./SearchPage/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import {ThemeProvider, CssBaseline} from "@mui/material"
import {lightTheme} from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/> 
    <Box className="app">
      <Router>
        <Header />
        <Routes>
          {/* buvo switch */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>{" "}
        {/* buvo switch */}
        {/* <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes> */}
        <Footer />
      </Router>
    </Box>
    </ThemeProvider>
  );
};

export default App;
