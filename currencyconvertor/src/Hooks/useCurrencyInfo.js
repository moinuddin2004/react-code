

// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})

//     useEffect(() => {
// // (async()=>{ let response=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
// // await response.json()
// // setData(response[currency])
// // console.log(data);})()
// fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
// .then((res) => res.json())
// .then((res) => setData(res[currency]))
// console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;



import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const responseData = await response.json();
        setData(responseData[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    })();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
