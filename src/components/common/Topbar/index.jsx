import React, { useEffect, useState } from "react";
import MusicLogo from "../../../assets/musicLogo6.svg";
import user from "../../../assets/user.png";
import SearchUsers from "../SearchUsers";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GiThreeFriends } from "react-icons/gi";
import { getAllUsers } from "../../../api/FirestoreAPI";
import ProfilePopup from "../ProfilePopup";
import "./index.scss";

import MyoozikBlue from "../../../assets/myoozik-blue.svg";
import MyoozikOrange from "../../../assets/myoozik-orange.svg";
import MyoozikBlue2 from "../../../assets/myoozik2-blue.svg";
import MyoozikOrange2 from "../../../assets/myoozik2-orange.svg"

export default function Topbar({ currentUser }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState("");

  const findCurrentUser = async() => {
    await console.log(currentUser)
  }

  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPop = () => {
    setPopupVisible(!popupVisible);
  };

  const openUser = (user) => {
    navigate("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredUsers(searched);
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 1000);
    return () => clearTimeout(debounced);
  }, [searchInput]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}

    <img className="musicLogo" src={MusicLogo} alt="MusicLogo" />

      {isSearch ? (
        <SearchUsers
          setIsSearch={setIsSearch}
          setSearchInput={setSearchInput}
        />
      ) : (
        <div className="react-icons">
          <AiOutlineSearch
            size={30}
            className="react-icon"
            onClick={() => setIsSearch(true)}
          />
          <AiOutlineHome
            size={30}
            className="react-icon"
            onClick={() => goToRoute("/home")}
          />

          <img className="myoozik-topbar" src={MyoozikOrange} alt="Myoozik" />

          <AiOutlineUserSwitch
            size={30}
            className="react-icon"
            onClick={() => goToRoute("/connections")}
          />


          {/* <BsBriefcase size={30} className="react-icon" /> */}

          <GiThreeFriends
            size={30}
            className="react-icon"
            onClick={() => goToRoute("/friends")}
          />

        </div>
      )}
        {console.log(findCurrentUser())}
      <img
        className="user-logo"
        src={currentUser.imageLink}
        alt="user"
        onClick={displayPop}
      />

      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div className="search-results">
          {filteredUsers.length === 0 ? (
            <div>No Results Found.. </div>
          ) : (
            filteredUsers.map((user) => (
              <div className="search-inner" onClick={() => openUser(user)}>
                <img src={user.imageLink} />
                <p className="name">{user.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
