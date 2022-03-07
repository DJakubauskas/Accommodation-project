import React, { useState, useEffect } from "react";
import "./Home.css";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Box from "@mui/material/Box";

const Home: React.FC = () => {
  const [accommodations, setAccommodations] = useState([]);
  useEffect(() => {
    //panaudoti accommodation service, kad parsitraukti visus duomenis
    // nustatytti gautus duomenis su f-ja setAccommodations
  }, []);

  return (
    <Box className="home">
      <Banner />
      <Box className="home__section">
        <Card
          src="https://aruodas-img.dgn.lt/object_62_101810366/vilnius-naujamiestis-kauno-g.jpg"
          title="Lofto nuoma Naujamiestyje"
          description="Vytenio g. 50"
          price="430 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Free parking · Washing Machine"
        />
        <Card
          src="https://i.kampas.lt/images/2022/01/14/30184785_600x450.jpg"
          title="Butas  Vilniaus centre"
          description="Mindaugo g. 30"
          price="530 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nob98qrrZqCCVIaxl-u6mkjIS5Q_nmFM7g&usqp=CAU`"
          title="1 kambario butas Subačiaus g. su terasa"
          description="Subačiaus g. 85"
          price="540 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine · Free parking"
        />
      </Box>
      <Box className="home__section">
        <Card
          src="https://www.kingmindaugas.lt/sites/default/files/1_loft_5_original.jpg"
          title="Erdvi studija Panerių g."
          description="Panerių g. 39"
          price="430 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine · Free parking"
        />
        <Card
          src="http://ifoto.delfi.lt/show_display.php?id=7521582&width=446&height=300&mode=-1"
          title="Loftas Kauno g."
          description="Kauno g. 30"
          price="330 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine"
        />
        <Card
          src="https://aruodas-img.dgn.lt/object_62_101185932/vilnius-zemieji-paneriai-titnago-g.jpg"
          title="Loftas Titnago g."
          description="Titnago g. 27"
          price="340 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Free parking"
        />
        <Card
          src="https://www.trumpam.lt/uploads/objects/objectPic_103680.jpg"
          title="2 kambarių butas Vilniaus centre"
          description="Mindaugo g. 27"
          price="640 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine"
        />
        <Card
          src="https://www.enuoma.lt/wp-content/uploads/2019/10/IMG_5000-500x333.jpg"
          title="2 kambarių butas L. Giros g."
          description="L. Giros g. 92"
          price="440 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine · Free parking"
        />
        <Card
          src="https://www.prohouse.lt/wp-content/uploads/2020/09/loftas-senamiestyje-dauksos-g-5-scaled.jpg"
          title="Studija Šnipiškėse"
          description="Giedraičių g. 18"
          price="270 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen"
        />
        <Card
          src="https://goodlife.lt/blog/wp-content/uploads/2019/11/Vytenio-lofto-interjero-fotografija-fotografai-goodlife-photography-NT-foto-05.jpg"
          title="Loftas Naujamiestyje"
          description="Vytenio g. 54"
          price="390 Eur/mėnesiui"
          perks="· Wi-fi · Kitchen · Washing Machine"
        />
      </Box>
    </Box>
  );
};

export default Home;
