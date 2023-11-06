import React from "react";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData(); // a better way to load apis check main.jsx
  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Faraz-mobin17")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <>
      <div className="bg-slate-800 text-white text-center text-3xl h-96">
        <p>Github Followers: {data.followers}</p>
        <img src={data.avatar_url} alt="img" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoUser = async () => {
  const response = await fetch("https://api.github.com/users/Faraz-mobin17");
  return response.json();
};
