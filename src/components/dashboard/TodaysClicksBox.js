import React, { useState, useEffect } from "react";
import { Sheet, Typography } from "@mui/joy";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import CountUp from "react-countup";

export function TodaysClicksBox({ todaysClicks, yesterdaysClicks }) {
  const ArrowIcon =
   yesterdaysClicks > todaysClicks ? (
      <ArrowDropDown style={{ fill: "red", fontSize: "2em" }} size="lg" />
    ) : (
      <ArrowDropUp size="lg" style={{ fill: "green", fontSize: "2em" }} />
    );
  return (
    <Sheet
      sx={{
        minWidth: "300px",
        height: "100px",
        boxShadow: 3,
        padding: "16px",
      }}
      className={"shadow-lg flex flex-col items-center bg-cyan-600/50"}
    >
      <Typography
        sx={{
          fontSize: "1.5em",
          lineHeight: ".8em",
        }}
        className="font-bold text-white/80"
      >
        Today&apos;s Clicks
      </Typography>
      <div className="flex items-center">
        <Typography
          sx={{
            fontSize: "2em",
            marginLeft: "2rem",
            lineHeight: "1.25em",
          }}
          className="font-bold text-white/80"
        >
          <CountUp start={0} end={todaysClicks} duration={1.5}>
          </CountUp>
        </Typography>
        {ArrowIcon}
      </div>
      <Typography
        sx={{ fontSize: ".8em", lineHeight: ".8em" }}
        className="font-semibold text-white/80"
      >
        {yesterdaysClicks} Yesterday
      </Typography>
    </Sheet>
  );
}
