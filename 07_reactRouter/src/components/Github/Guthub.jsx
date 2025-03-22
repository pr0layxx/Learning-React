import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function Guthub() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https:/api.github.com/users/pr0layxx")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <div className="bg-gray-600 m-4 text-center text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" width={200} />
    </div>
  );
}

export default Guthub;
export const githubInfoLoader = async () => {
  const response = await fetch("https:/api.github.com/users/pr0layxx");
  return response.json();
};
