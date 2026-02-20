import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Create = () => {

 const navigate =useNavigate();  

//   const {data , setdata} = useContext(recipecontext);
   const { recipes, setRecipes } = useContext(RecipeContext);

 
  const { register, handleSubmit , reset ,  formState: { errors }} = useForm();

const submitHandler = (recipe) => {
  recipe.id = nanoid();

  setRecipes(prev => [...prev, recipe]);
  toast.success("Recipe created successfully!");
  reset();
  navigate("/recipes");
};

      
  return (
    <form  onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-2 w-96 mt-0"
    >

      <input
        className="border-b outline-none p-2"
        {...register("image")}
        type="url"
        placeholder="Enter Image Url"
      />
      <small className="text-red-400"> This is how the error is show</small>

      <input
        className="border-b outline-none p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
     <small className="text-red-400"> This is how the error is show</small>


       <textarea
        className="border-b outline-none p-2"
        {...register("desc")}
        type="text"
        placeholder="Enter the description of the recipe"
      ></textarea>
     <small className="text-red-400"> This is how the error is show</small>
     
  
      <textarea
        className="border-b outline-none p-2"
        {...register("ingr")}
        type="text"
        placeholder="Enter the ingredients of the recipe"
      ></textarea>
     <small className="text-red-400"> This is how the error is show</small>

      <textarea
        className="border-b outline-none p-2"
        {...register("inst")}
        type="text"
        placeholder="Enter the instructions of the recipe"
      ></textarea>
     <small className="text-red-400"> This is how the error is show</small>

     <input
        className="border-b outline-none p-2"
        {...register("chef")}
        type="text"
        placeholder="Recipe Title"
      />
      

{/*         
      <select
        className="border-b outline-none p-2"
        {...register("instructions")}
        type="text"
        placeholder="Enter the instructions of the recipe"
      >
        <option value="breakfast">BreakFast</option>
         <option value="lunch">Lunch</option>
           <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
      </select> */}

      <select
  className="border-b outline-none p-2"
  {...register("instructions", { required: "Instructions are required" })}
>
  <option value="">Select meal type</option>
  <option value="supper">Supper</option>
  <option value="dinner">Dinner</option>
</select>

{errors.instructions && (
  <p className="text-red-500 text-sm mt-1">
    {errors.instructions.message}
  </p>
)}


      <button className="bg-green-500 text-white py-2 rounded">
        Create Recipe
      </button>

    </form>
  );
};

export default Create;
