// Function to load state from local storage
const loadStateFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const storedState = localStorage.getItem(key);
    if (storedState) {
      return JSON.parse(storedState);
    }
  }
  return null;
};

// Initial state setup, loading from local storage if available
const initialState = {
  addedProducts: loadStateFromLocalStorage('cart') || [],
};

// Function to save state to local storage
const saveStateToLocalStorage = (key, state) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(state));
  }
};

const productReducer = (state = initialState, action) => {
  const { type, id, quantity } = action;

  switch (type) {
    case 'ADD_PRODUCT':
      // Find the existing product in the addedProducts array
      const existingProductIndex = state.addedProducts.findIndex(
        (product) => product.id === id
      );

      let updatedProducts;

      if (existingProductIndex !== -1) {
        // If product is already in the cart, update the quantity
        updatedProducts = [...state.addedProducts];
        updatedProducts[existingProductIndex].quantity += 1;
      } else {
        // Add new product to the end of the array
        updatedProducts = updatedProducts = [
          { id, quantity: 1 },
          ...state.addedProducts,
        ];
      }

      saveStateToLocalStorage('cart', updatedProducts); // Save the update cart items to local storage

      return {
        ...state,
        addedProducts: updatedProducts,
      };

    case 'REMOVE_PRODUCT':
      // Filtering cart items without the removed one
      const filteredProducts = state.addedProducts.filter(
        (product) => product.id !== id
      );

      saveStateToLocalStorage('cart', filteredProducts); // Save the update cart items to local storage

      return {
        ...state,
        addedProducts: filteredProducts,
      };

    case 'UPDATE_QUANTITY':
      // Update the cart item quantity
      const productIndex = state.addedProducts.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        const updatedQuantityProducts = [...state.addedProducts];
        updatedQuantityProducts[productIndex] = {
          ...updatedQuantityProducts[productIndex],
          quantity,
        };

        saveStateToLocalStorage('cart', updatedQuantityProducts); // Save the update cart items quantity to local storage

        return {
          ...state,
          addedProducts: updatedQuantityProducts,
        };
      } else {
        return state;
      }

    case 'PRODUCT_ERR':
      console.log('PRODUCT_ERR: ', state);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { productReducer };
