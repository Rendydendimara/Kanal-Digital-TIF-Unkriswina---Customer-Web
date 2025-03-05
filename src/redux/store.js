const { configureStore } = require('@reduxjs/toolkit');

import ChangeLayoutMode from './themeLayout/reducers';
import { productReducer } from './product/reducers';

export const store = configureStore({
    reducer: {
        product: productReducer,
        layout: ChangeLayoutMode,
    },
})