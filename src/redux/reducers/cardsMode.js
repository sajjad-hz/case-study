import { createReducer } from "@reduxjs/toolkit";
import { mode } from '../actions/index';

export const cardsMode = createReducer( 'search' , {
    [mode]: (state, { payload }) => payload
})