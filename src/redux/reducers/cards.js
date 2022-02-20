import { createReducer } from "@reduxjs/toolkit";
import { cards as cardsData } from '../actions/index'

const initial = {
    page: 0,
    results: [],
    total_pages : 0,
    total_results: 0
}
export const cards = createReducer(initial, {
    [cardsData]: (state, { payload }) => payload
})