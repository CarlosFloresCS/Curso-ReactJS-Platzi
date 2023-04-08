import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  // usando estados para imaginar una llamada al backend
  React.useEffect(() => {
    setTimeout(() => {
      try {
        //- LOCAL STORAGE --
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        // ------------------
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });

  // PERSISTENCIA DE INFORMACION CON LOCAL STORAGE
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
  // ---------------------------------------------
}

export { useLocalStorage };
