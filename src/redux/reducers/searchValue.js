import { createReducer } from "@reduxjs/toolkit";
import { value } from '../actions/index';

export const searchValue = createReducer( '' , {
    [value]: (state, { payload }) => payload
})