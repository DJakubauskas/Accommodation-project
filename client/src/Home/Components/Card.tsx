import React from 'react'
import './Card.css'
import {Box, Typography} from '@mui/material'

type SearchResultProps = {
  src: string,
  title: string,
  description: string,
  price: string,
  perks: string
}

const Card: React.FC<SearchResultProps> = ({ src, title, description, price, perks }) => {
    return (
      <Box className="card">
        <img src={src} alt="" />
        <Box className="card_info">
          <Typography component="h2">{title}</Typography>
          <Typography component="h4">{description}</Typography>
          <Typography component="h3">{price}</Typography>
          <Typography component="h5">{perks}</Typography>
        </Box>
      </Box>
    );
  }
  
  export default Card;
