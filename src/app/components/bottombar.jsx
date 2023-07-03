"use client"

import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Link from "next/link";

const Bottombar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar className="loll">
          <Link href="/">
            <IconButton>
              <HomeIcon fontSize="large" className="homeIconn" />
            </IconButton>
          </Link>
          <Link href="/foodlist">
            <IconButton>
              <ListAltIcon fontSize="large" className="listIconn" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

// const Bottombar = () => {

//     return <><div>the bottom bar</div></>
// }

export default Bottombar;
