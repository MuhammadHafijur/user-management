import React, { useEffect, useState } from "react";
import PausedProfiles from "../../PausedProfiles/PausedProfiles";
import AddUser from "../AddUser/AddUser";
import Users from "../Users/Users";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://sheltered-anchorage-25040.herokuapp.com/profile")
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, [isLoading]);

  const handleStatus = (id) => {
    const singleProfile = profiles.find((profile) => profile._id === id);

    const updateInfo = {};

    if (singleProfile.status === true) {
      updateInfo.status = false;
    }
    if (singleProfile.status === false) {
      updateInfo.status = true;
    }

    const url = `https://sheltered-anchorage-25040.herokuapp.com/status/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Profile has been updated.");
          fetch("https://sheltered-anchorage-25040.herokuapp.com/profile")
            .then((res) => res.json())
            .then((data) => setProfiles(data));
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ?");
    if (proceed) {
      const url = `https://sheltered-anchorage-25040.herokuapp.com/profile/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Profile has been deleted.");
            const remaining = profiles.filter((profile) => profile._id !== id);
            setProfiles(remaining);
          }
        });
    }
  };

  return (
    <div>
      <AddUser isLoading={isLoading} setIsLoading={setIsLoading}></AddUser>
      <Users
        profiles={profiles}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      ></Users>
      <PausedProfiles
        profiles={profiles}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      ></PausedProfiles>
    </div>
  );
};

export default Home;
