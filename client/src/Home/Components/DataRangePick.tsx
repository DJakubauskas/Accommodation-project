import React, { useState } from "react";
import "./DataRangePick.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Box from "@mui/material/Box";

const DataRangePick: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <Box className="search">
      <DateRangePicker ranges={[selectionRange]} />
    </Box>
  );
};

export default DataRangePick;
