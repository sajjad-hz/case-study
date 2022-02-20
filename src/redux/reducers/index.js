import { combineReducers } from "redux";
import { cards } from '../reducers/cards';
import { cardsMode } from '../reducers/cardsMode';
import { searchValue } from '../reducers/searchValue';


export default combineReducers({ 
    cards, 
    cardsMode,
    searchValue
})