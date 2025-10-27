"use client";

import React, { useState } from "react";
import SearchPopup from "./SearchPopup";

const SearchInput = () => {
  const [openSearchPopup, setOpenSearchPopup] = useState(false);

  return (
    <>
      <div className="banner-input-form">
        <input
          type="text"
          id="bannerInput"
          placeholder="Looking for?"
          onFocus={() => setOpenSearchPopup(true)}
        />
        <button
          className="banner-search-btn btn"
          onClick={() => setOpenSearchPopup(true)}
        >
          Search
        </button>
      </div>
      {openSearchPopup && (
        <SearchPopup
          setOpenSearchPopup={setOpenSearchPopup}
          openSearchPopup={openSearchPopup}
        />
      )}
    </>
  );
};

export default SearchInput;
