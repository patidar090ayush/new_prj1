// // import { useContext } from "react";
// // import { RecipeContext } from "../context/RecipeContext";
// // import { useParams } from "react-router-dom";

// // const SingleRecipe = () => {

// //   const { recipes } = useContext(RecipeContext);
// //   const params = useParams();

// //   const recipe = recipes.find((r) => r.id === Number(params.id));

// //   if (!recipe) {
// //     return <h2 className="text-center mt-10 text-xl">Recipe not found</h2>;
// //   }

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold">{recipe.title}</h1>
// //       <img className="w-80 rounded mt-4" src={recipe.image} alt="" />
// //       <p className="mt-4">{recipe.desc}</p>
// //       <h3 className="text-red-400 mt-2">Chef: {recipe.chef}</h3>
// //     </div>
// //   );
// // };

// // export default SingleRecipe;

// import { useContext } from "react";
// import { RecipeContext } from "../context/RecipeContext";
// import { useParams } from "react-router-dom";
// import { useForm } from "react-hook-form";

// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const SingleRecipe = () => {
//    const navigate = useNavigate();  

// //   const {data , setdata} = useContext(recipecontext);
//    const { recipes, setRecipes } = useContext(RecipeContext);

 
//   const { register, handleSubmit , reset ,  formState: { errors }} = useForm();

// const submitHandler = (recipe) => {
//      const updatedRecipes = recipes.map((r) =>
//     r.id === recipe.id ? { ...r, ...recipe } : r
//   );
//   setRecipes(updatedRecipes);
//   reset();
//   toast.success("Recipe Updated Successfully");
// };
// //   const { params } = useContext(RecipeContext);
//   const params = useParams();

//   // //   const recipe = recipes.find((recipe) => recipe.id === params.id);
//   // const recipe = recipes.find((recipe) => recipe.id === Number(params.id));

//   const recipe = recipes.find(
//     (recipe) => String(recipe.id) === String(params.id),
//   );

//   console.log("ghhghrecipe", recipe);

//   return recipe ? (
//     <div className="w-full flex">
//       <div className="left w-1/2 p-2">
       
//         <h1 className="text-4xl font-black">{recipe.title}</h1>
//         <img className="w-80 rounded mt-4" src={recipe.image} alt="" />
//          <h3 className="text-red-400 mt-2">Chef: {recipe.chef}</h3>
         
//       <p className="mt-4">{recipe.desc}</p>
//       </div>
    
//          <form className="right w-1/2 py-10 px-40 m-5 " onSubmit={handleSubmit(submitHandler)}
      
//     >

//       <input
//         className="border-b outline-none p-2 "
//         {...register("image")}
//         value={recipe.image}
//         type="url"
//         placeholder="Enter Image Url"
//       />
//       {/* <small className="text-red-400"> This is how the error is show</small> */}

//       <input
//         className="border-b outline-none p-2"
//         {...register("title")}
//         value={recipe.title}
//         type="text"
//         placeholder="Recipe Title"
//       />
//      {/* <small className="text-red-400"> This is how the error is show</small> */}


//        <textarea
//         className="border-b outline-none p-2"
//         {...register("desc")}
//         value={recipe.desc}
//         type="text"
//         placeholder="Enter the description of the recipe"
//       ></textarea>
//      {/* <small className="text-red-400"> This is how the error is show</small> */}
     
  
//       <textarea
//         className="border-b outline-none p-2"
//         {...register("ingr")}
//         value={recipe.ingr}
//         type="text"
//         placeholder="Enter the ingredients of the recipe"
//       ></textarea>
//      {/* <small className="text-red-400"> This is how the error is show</small> */}

//       <textarea
//         className="border-b outline-none p-2"
//         {...register("inst")}
//         value={recipe.inst}
//         type="text"
//         placeholder="Enter the instructions of the recipe"
//       ></textarea>
//      {/* <small className="text-red-400"> This is how the error is show</small> */}

//      <input
//         className="border-b outline-none p-2"
//         {...register("chef")}
//         value={recipe.chef}
//         type="text"
//         placeholder="Recipe Title"
//       />
      

// {/*         
//       <select
//         className="border-b outline-none p-2"
//         {...register("instructions")}
//         type="text"
//         placeholder="Enter the instructions of the recipe"
//       >
//         <option value="breakfast">BreakFast</option>
//          <option value="lunch">Lunch</option>
//            <option value="supper">Supper</option>
//           <option value="dinner">Dinner</option>
//       </select> */}

//       <select 
//       value={recipe.cateogory}
//   className="border-b outline-none p-2"
//   {...register("instructions", { required: "Instructions are required" })}
// >
//   <option value="">Select meal type</option>
//   <option value="supper">Supper</option>
//   <option value="dinner">Dinner</option>
// </select>

// {errors.instructions && (
//   <p className="text-red-500 text-sm mt-1">
//     {errors.instructions.message}
//   </p>
// )}


//       <button className=" mt-5 block bg-green-500 text-white  py-2  rounded w-full" type="submit">
//         Update Recipe
//       </button>
//        <button className=" mt-5 block bg-gray-500 text-white  py-2  rounded w-full" onClick={() => navigate("/")}>
//         Cancel
//       </button>

//     </form>

    
//     </div>
//   ) : (
//     <h2 className="text-center mt-10 text-xl">Recipe not found</h2>
//   );
// };

// export default SingleRecipe;

















import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {

  const { recipes, setRecipes } = useContext(RecipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // find current recipe
  const recipe = recipes.find((r) => String(r.id) === String(id));

  // prefill form
  useEffect(() => {
    if (recipe) {
      reset(recipe);
    }
  }, [recipe, reset]);

  // UPDATE
  const submitHandler = (data) => {

    const updatedRecipes = recipes.map((r) =>
      String(r.id) === String(data.id) ? { ...r, ...data } : r
    );

    setRecipes(updatedRecipes);
     localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    toast.success("Recipe Updated Successfully 🍕");
    navigate("/recipes");
  };

  // DELETE
  const deleteHandler = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) return;

    const filteredRecipes = recipes.filter(
      (r) => String(r.id) !== String(id)
    );

    setRecipes(filteredRecipes);
    localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
    toast.error("Recipe Deleted Successfully 🗑️");
    navigate("/recipes");
  };

  if (!recipe) {
    return <h2 className="text-center mt-10 text-xl">Recipe not found</h2>;
  }

  return (
    <div className="w-full flex">

      {/* LEFT SIDE */}
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <img className="w-80 rounded mt-4" src={recipe.image} alt="" />
        <h3 className="text-red-400 mt-3">Chef: {recipe.chef}</h3>
        <p className="mt-4">{recipe.desc}</p>
      </div>

      {/* RIGHT SIDE FORM */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-1/2 p-10 flex flex-col gap-4"
      >

        {/* hidden id */}
        <input type="hidden" {...register("id")} />

        <input
          className="border-b p-2 outline-none"
          {...register("image", { required: "Image URL required" })}
          type="url"
          placeholder="Enter Image URL"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <input
          className="border-b p-2 outline-none"
          {...register("title", { required: "Title required" })}
          type="text"
          placeholder="Recipe Title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <textarea
          className="border-b p-2 outline-none"
          {...register("desc", { required: "Description required" })}
          placeholder="Enter description"
        ></textarea>

        <textarea
          className="border-b p-2 outline-none"
          {...register("ingr", { required: "Ingredients required" })}
          placeholder="Enter ingredients"
        ></textarea>

        <textarea
          className="border-b p-2 outline-none"
          {...register("inst", { required: "Instructions required" })}
          placeholder="Enter instructions"
        ></textarea>

        <input
          className="border-b p-2 outline-none"
          {...register("chef", { required: "Chef name required" })}
          type="text"
          placeholder="Chef Name"
        />

        <select
          className="border-b p-2 outline-none"
          {...register("category", { required: "Category required" })}
        >
          <option value="">Select meal type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}

        <button
          className="bg-green-500 text-white py-2 rounded mt-3"
          type="submit"
        >
          Update Recipe
        </button>

        <button
          type="button"
          onClick={deleteHandler}
          className="bg-red-500 text-white py-2 rounded"
        >
          Delete Recipe
        </button>

      </form>
    </div>
  );
};

export default SingleRecipe;