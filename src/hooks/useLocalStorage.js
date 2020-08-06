import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const item = localStorage.getItem(key);

  const [storedValue, setStoredValue] = useState(item ? JSON.parse(item) : initialValue);

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;