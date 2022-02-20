import { createAction } from "@reduxjs/toolkit";

// all cards
export const cards = createAction('CARDS')

// change cards mode
export const mode = createAction('MODE')

// search value
export const value = createAction('VALUE')
