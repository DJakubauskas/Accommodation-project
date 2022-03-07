import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./DataRangePick";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Box className="banner">
      <Box className="banner_search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Slėpti" : "Žiūrėti užimtumą"}
        </Button>
      </Box>

      <Box className="banner_info">
        <Typography variant="h5">
          <strong>Butų, studijų, loftų nuoma Vilniuje</strong>
        </Typography>

        <Typography component="h3">
          Visi nuomojami būstai yra Vilniuje, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          similiqueLorem ipsum dolor sit ame similique{" "}
        </Typography>

        <Button color="primary" onClick={() => navigate("/search")} variant="outlined">
          Žiūrėti laisvus
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
