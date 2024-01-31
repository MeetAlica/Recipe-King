import { useState } from 'react';
import { API_URL } from '../constants';

const useRecipeCardModal = () => {
  // States for Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // States for DetailedRecipe StateObject
  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  const [serves, setServes] = useState(0);
  const [category, setCategory] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [editUsersRecipe, setEditUsersRecipe] = useState(false);
  const [creatingNewRecipe, setCreatingNewRecipe] = useState(false);
  const [username, setUsername] = useState('');

  // Put every Detailed Recipe state into one object
  const stateObject = {
    title: {
      value: recipeTitle,
      setter: setRecipeTitle,
    },
    description: {
      value: description,
      setter: setDescription,
    },
    image: {
      value: imgUrl,
      setter: setImgUrl,
    },
    time: {
      value: minutes,
      setter: setMinutes,
    },
    difficulty: {
      value: difficulty,
      setter: setDifficulty,
    },
    serves: {
      value: serves,
      setter: setServes,
    },
    category: {
      value: category,
      setter: setCategory,
    },
    mainCategory: {
      value: selectedMainCategory,
      setter: setSelectedMainCategory,
    },
    labels: {
      value: selectedOptions,
      setter: setSelectedOptions,
    },
    ingredients: {
      value: ingredients,
      setter: setIngredients,
    },
    username: {
      value: username,
      setter: setUsername,
    },
  };

  // Modal functions

  const openModal = async (recipeId) => {
    setSelectedRecipe(recipeId);
    setModalOpen(true);

    try {
      const response = await fetch(`${API_URL}/recipes/${recipeId}`);
      const recipe = await response.json();

      setRecipeTitle(recipe.recipe_name);
      setDescription(recipe.description);
      setImgUrl(recipe.img);
      setMinutes(recipe.time_minutes);
      setDifficulty(recipe.difficulty_level);
      setServes(recipe.serve_count);
      setCategory(recipe.category_name);
      setSelectedMainCategory(recipe.main_category_name);
      setSelectedOptions(recipe.label_name);
      setIngredients(recipe.ingredient_name);
      setUsername(recipe.username);
    } catch (error) {
      setErrorMessage(error);
      throw new Error(`Latest recipe cannot be fetched: ${errorMessage}`);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCreatingNewRecipe(false);
    setRecipeTitle('');
    setDescription('');
    setImgUrl('');
    setMinutes(0);
    setDifficulty(1);
    setServes(0);
    setCategory('');
    setSelectedMainCategory('');
    setSelectedOptions([]);
    setIngredients([]);
    setEditUsersRecipe(false);
    setUsername('');
  };

  const editButtonClicked = () => {
    setEditUsersRecipe(true);
  };

  // ---------------------------

  return {
    stateObject,
    closeModal,
    openModal,
    isModalOpen,
    selectedRecipe,
    editUsersRecipe,
    editButtonClicked,
    creatingNewRecipe,
    setCreatingNewRecipe,
    username,
  };
};

export default useRecipeCardModal;
