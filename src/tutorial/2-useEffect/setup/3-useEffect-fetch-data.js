import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async function () {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Can not get data");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  console.log(user);

  return (
    <>
      <ul className="users">
        {user.map((el) => {
          const { id, login, avatar_url, url } = el;
          return (
            <li key={id}>
              <img src={avatar_url} alt={avatar_url}></img>
              <h3>{login}</h3>
              <a href={url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
