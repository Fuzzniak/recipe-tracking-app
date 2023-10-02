import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData({...initialFormData})
  }

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                type="text"
                name="name"
                id="name" 
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required={true}
              />
            </td>
            
            <td>
              <input type="text"
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required={true}
              />
            </td>
            
            <td>
              <input type="text"
                name="photo"
                id="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo} 
                required={true}
              /> 
            </td>
           
            <td>
              <textarea
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required={true}
              />
            </td>
            
            <td>
              <textarea
                type="text"
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required={true}
              />
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
