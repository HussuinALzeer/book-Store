import { createSelector } from "reselect";

const Books = state => state.booksReducer

export const selectBooks = createSelector(
    [Books],
    book => book.addBook
)

export const collections = createSelector(
    [Books],
    shop=>shop.collections
)

export const isFetching = createSelector(
    [selectBooks],
    shop=>shop.isFetching
)

export const thebook = createSelector(
    [Books],
    book => book.thebook
)