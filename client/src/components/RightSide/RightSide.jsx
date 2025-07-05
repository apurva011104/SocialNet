import React, { useState } from "react";
import "./RightSide.css";

import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import LogoSearch from "../LogoSearch/LogoSearch";
import NavIcons from "../NavIcons/NavIcons";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">

      {/*Navbar */}
      <NavIcons />
      <LogoSearch/>
      {/* TrendCard */}
      <TrendCard />
      {/*Post button*/}
      <button className="button r-button" onClick={() => setModalOpened(true)}>Post</button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
