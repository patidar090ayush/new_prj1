// import React from "react";

// const Home = () => {

//   const getproducts = async () => {
//     try {
//       const res = await fetch("/products");
//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div>Home</div>
//       <button  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded mt-4" onClick={getproducts}>Get Products</button>
//     </>
//   );
// };

// export default Home;



import React from "react";
import api from "../utils/axios";


const Home = () => {

  const getproducts = async () => {
    try {
      const response = await api.get("/products/1");   // ⚡ ONLY THIS
      console.log("DATA AA GAYA:", response.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Home</h1>

      <button
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded"
        onClick={getproducts}
      >
        Get Products
      </button>
    </div>
  );
};

export default Home;