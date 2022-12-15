import { createSelector } from "reselect";

const selectAdmin = state => state.admin

export const selectAdminAdd = createSelector(
    [selectAdmin],
    admin => admin.addBook
)

export const selectAdminDashBoard = createSelector(
    [selectAdmin],
    admin => admin.dashboard
)

export const selectAdminrecentOrder = createSelector(
    [selectAdmin],
    admin => admin.recentOrder
)

export const selectAdminallbooks = createSelector(
    [selectAdmin],
    admin => admin.allbooks
)

export const selectAdminEditPage = createSelector(
    [selectAdmin],
    admin => admin.editPageBool
)

export const selectAdminEditBookID = createSelector(
    [selectAdmin],
    admin => admin.editPageID
)