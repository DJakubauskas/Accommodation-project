import React, { useState} from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './DataRangePick';
import { useNavigate} from "react-router-dom";

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch ] = useState
    (false);
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}


                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Slėpti" : "Žiūrėti užimtumą"}
                </Button>
             </div>
            
            <div className='banner_info'>
                <h1>Butų, studijų, loftų nuoma Vilniuje</h1>
               
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similiqueLorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique </h5>


                <Button onClick={() => navigate('/search')} variant='outlined'>Žiūrėti laisvus</Button>
                

            </div>
            
        </div>
    )
}

export default Banner
