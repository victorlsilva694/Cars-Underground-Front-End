import React, { useState } from 'react';

export const AuthContext = React.createContext({});

const getInitialState = () => {
  const value = "";
  return value;
};


export const AuthProvider = (props) => {
  const [estado, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [year, setYear] = useState(getInitialState);

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const [characteristics, setCharacteristics] = useState(getInitialState);

  const handleChangeCharacteristics = (e) => {
    setCharacteristics(e.target.value);
  };

  const [price, setPrice] = useState(getInitialState);

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <AuthContext.Provider value={{ estado, handleChange, year, handleChangeYear, characteristics, handleChangeCharacteristics, price, handleChangePrice }} >
      {props.children}
    </AuthContext.Provider>
  )
} 