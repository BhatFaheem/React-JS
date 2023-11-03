import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/BhatFaheem')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="m-4 bg-gray-400 text-white p-4 text-3xl text-center">
      Github Followers : {data.followers}
      <img src= {data.avatar_url} alt="Pic" width={300} />
    </div>
  );
}

export default Github;
