import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./Components/SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p></p>
                <h1>Laisvi butai</h1>
                <Button variant="outlined">Nuomos atšaukimas</Button>
                
                <Button variant="outlined">Kainos</Button>
                <Button variant="outlined">kambarių skaičius</Button>
                <Button variant="outlined">Daugiau filtrų</Button>
            </div>
            <SearchResult
                img="https://aruodas-img.dgn.lt/object_62_101810366/vilnius-naujamiestis-kauno-g.jpg"
                location="Vytenio g. 50"
                title="Jaukus loftas Naujamiestyje"
                description="· Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="€430/month"
                
            />

            <SearchResult
                img="https://i.kampas.lt/images/2022/01/14/30184785_600x450.jpg"
                location="Mindaugo g. 30"
                title="Erdvi studija Vilniaus centre"
                description="· Wifi · Kitchen"
                star={4.3}
                price="€570/month"
              
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nob98qrrZqCCVIaxl-u6mkjIS5Q_nmFM7g&usqp=CAU"
                location="Subačiaus g. 85"
                title="1 kambario butas Subačiaus g. su terasa"
                description="· Free parking · Washing Machine"
                star={3.8}
                price="€540/month"
            
            />

        </div>
    )
}

export default SearchPage