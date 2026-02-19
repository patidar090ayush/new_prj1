import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";


const Create = () => {

//   const {data , setdata} = useContext(recipecontext);
   const { recipes, setRecipes } = useContext(RecipeContext);

 
  const { register, handleSubmit , reset ,  formState: { errors }} = useForm();

const submitHandler = (recipe) => {
  recipe.id = nanoid();

  setRecipes(prev => [...prev, recipe]);

  reset();
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
        {...register("description")}
        type="text"
        placeholder="Enter the description of the recipe"
      ></textarea>
     <small className="text-red-400"> This is how the error is show</small>
     
  
      <textarea
        className="border-b outline-none p-2"
        {...register("ingredients")}
        type="text"
        placeholder="Enter the ingredients of the recipe"
      ></textarea>
     <small className="text-red-400"> This is how the error is show</small>

      <textarea
        className="border-b outline-none p-2"
        {...register("instructions")}
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
      

        
      <select
        className="border-b outline-none p-2"
        {...register("instructions")}
        type="text"
        placeholder="Enter the instructions of the recipe"
      >
        <option value="cat-1">Category 1</option>
         <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
      </select>


      <button className="bg-green-500 text-white py-2 rounded">
        Create Recipe
      </button>

    </form>
  );
};

export default Create;
