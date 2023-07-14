@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");


.top{
  background-color: #0e1727;

  // background-image: url(../../../assets/colors.png);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.left{
  // background-color: #eee1d0;
  background-color: #0e1727;
  margin-left: 20px; 
}

.profile-card {
  width: auto;
  height: auto;
  background-color: #eee1d0;
  margin: 30px;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  box-shadow: 3px 3px 15px #747272;

  .profile-info {
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
    justify-content: flex-end;

    .profile-image {
      width: 200px;
      height: 200px;
      object-fit: contain;
      border-radius: 50%;
      border: 2px solid #cacaca;
      padding: 5px;
      cursor: pointer;
      object-fit: cover;
    }

    #music-button {
      margin: 20px; 
    }

    .music-button {
      display: flex;
      align-items: center;
    }

    .right-info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 30%;
      margin: 25px;
      margin-right: 20px;
      // border: 2px solid #cacaca;
      // padding: 20px; 
      border-radius: 5px;
      // background-color: #eee1d0;


      .college,
      .company {
        font-family: "Poppins";
        color: rgba(0, 0, 0, 0.9);
        font-size: 14px;
        font-weight: 600;
        line-height: 30px;
      }

      .company {
        margin-top: -15px;
      }
    }
  }

  .website {
    color: #004c75 !important;
    -webkit-link: #004c75;
  }

  .skill-label {
    font-weight: 600;
  }

  .edit-btn {
    position: absolute;
    right: 20px;

    .edit-icon {
      cursor: pointer;
      padding: 10px;
      background-color: rgb(197, 197, 197);
      border-radius: 50%;
    }

    .edit-icon:hover {
      background-color: white;
      padding: 10px;
      border-radius: 50%;
    }
  }

  .userName {
    font-family: "Poppins";
    // color: rgba(0, 0, 0, 0.9);
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-top: 10px;
  }

  .heading {
    margin-top: 15px;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    // width: 320px;
    line-height: 20px;
    border: 2px solid #cacaca;
    padding: 20px; 
    border-radius: 5px;
  }
}

.profile-card {
  width: auto;
  height: auto;
  background-color: whitesmoke;
  margin: 30px;
  border-radius: 5px;
  padding: 1.2rem;
  position: relative;
}

.profile-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-info {
  font-weight: 600px;
  margin-top: 30px;
  margin-right: 30px;
  line-height: 24px;
  align-items: right;
}

.username {
  font-family: "Poppins";
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  font-size: 24px;
  margin-top: -10px;
}

.location {
  margin-bottom: 20px;
  // font-size: 15px;
  // border: 2px solid #cacaca;
  // padding: 20px; 
  // border-radius: 5px;
  margin-top: -10px;
  font-family: "Poppins";
  // color: rgba(0, 0, 0, 0.404);
  color: white;
  font-size: 1rem;

}

.userEmail,
.expertise,
.intrest {
  margin-top: -25px;
  font-family: "Poppins";
  // color: rgba(0, 0, 0, 0.404);
  color: white;
  font-size: 1rem;
}

.expertise,
.intrest {
  font-size: 1.1rem;
  // color: rgba(0, 0, 0, 0.63);
  border: 2px solid #cacaca;
  padding: 20px; 
  border-radius: 5px;
}

.expertise {
  margin-top: -9px;
  margin-bottom: 25px;
}

.heading {
  margin-top: -15px;
  font-family: "Poppins";
  color: rgba(0, 0, 0, 0.575);
  font-size: 1rem;
  font-weight: 600px;
  // width: 400px;
  line-height: 20px;
}

.edit-btn {
  position: absolute;
  right: 20px;
  top: 25px;
}

.about {
  font-size: 1rem;
  border: 2px solid #cacaca;
  padding: 20px; 
  border-radius: 5px;
}


button {
  font-family: "Poppins";
  background-color: rgb(216, 216, 216);
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
}

button:hover {
  transition: 0.3s;
  background-color: rgb(66, 64, 64);
  color: white;
}
