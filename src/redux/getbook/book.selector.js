import { createSelector } from "reselect";

const theBook = state => state.ThebookReducer

export const thebookInfo = createSelector(
    [theBook],
    book => book.thebook
)
