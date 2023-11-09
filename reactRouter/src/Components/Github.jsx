
import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github=()=>{
    const data=useLoaderData()
    // const [data, setData] = useState({});

    // useEffect(() => {
    //   (async () => {
    //     try {
    //       const response = await fetch(
    //         `https://api.github.com/users/moinuddin2004`
    //       );
    //       const responseData = await response.json();
    //       setData(responseData);
    //     } catch (error) {
    //       console.error("Error fetching currency data:", error);
    //     }
    //   })();
    // }, []);
    const [username, setUsername] = useState(""); // State to hold the input value
//   const [userData, setUserData] = useState(null); // State to store GitHub user data


    const handleButtonClick = async () => {
        try {
           await loaderinfo(username); // Call the loaderinfo function
        //   if (data) {
        //     setUserData(data); // Update user data state with the fetched data
        //   } else {
        //     console.error("User not found or API error.");
        //   }
        } catch (error) {
          console.error("Error fetching GitHub data:", error);
        }
      };
    




    return(
        <div>
        <p>
          GitHub Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleButtonClick}>Get User Data</button>
        </p>
        {data && (
          <div>
            <p>Github followers: {data.followers}</p>
            <img src={data.avatar_url} alt="" />
          </div>
        )}
      </div>
    )
}
export default Github

export const loaderinfo = async (username) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
  
      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } 
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      return null; // Return null or handle errors as needed
    }
  };
  

  