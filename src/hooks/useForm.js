import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  // del e.target
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, handleInputChange, reset];
};

/*
const initialForm = {
    name: '',
    age: 0,
    email: ''
};

const [formValues, handleInputChange, reset] = useForm(initialForm);

-----------------------------------------
const [formValues, handleInputChange] = useForm({ searchText: "" });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };
*/