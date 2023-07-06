import React from "react";
import "./index.scss";

export default function SearchUsers({ setIsSearch }) {
  return (
    <div className="search-users">
      <input placeholder="Search Users.." />
    </div>
  );
}
