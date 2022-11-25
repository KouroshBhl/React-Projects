import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getData = async function () {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          setIsLoading(false);
          setIsError(true);
          throw new Error("No Response!");
        }
        setIsLoading(false);
        setIsError(false);
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(`${error} 😢😢😢`);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Is Loading ...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error!</h1>
      </div>
    );
  }
  return (
    <div>
      <img src={user.avatar_url} />
      <p>{user.bio}</p>
      <a href={user.blog}>Blog</a>
      <p>{user.location}</p>
    </div>
  );
};

export default MultipleReturns;
