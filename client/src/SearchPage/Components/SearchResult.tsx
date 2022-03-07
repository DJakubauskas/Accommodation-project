import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { Box, Typography } from "@mui/material";

type SearchResultProps = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
};

const SearchResult: React.FC<SearchResultProps> = ({
  img,
  location,
  title,
  description,
  star,
  price,
}) => {
  return (
    <Box className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult_heart" />

      <Box className="searchResult_info">
        <Box className="searchResult_infoTop">
          <Typography>{location}</Typography>
          <Typography component="h3">{title}</Typography>
          <Typography>____</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box className="searchResult_infoBottom">
          <Box className="searchResult_stars">
            <StarIcon className="searchResult_star" />
            <Typography>{star}</Typography>
            <Box className="searchResult_price">
              <Typography component="h2">{price}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResult;
