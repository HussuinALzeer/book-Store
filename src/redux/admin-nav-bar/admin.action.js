import admintypesAction from "./admin.types";

export const  Allbooks = (item) =>({
    type:admintypesAction.ALL_BOOKS,
    payload:item
})

export const  RecentOrder = () =>({
    type:admintypesAction.RECENT_ORDER
})

export const  Dashboard = () =>({
    type:admintypesAction.DASHBOARD
})

export const  Addbook = () =>({
    type:admintypesAction.ADD_BOOK
})

export const  Edit_on = (item) =>({
    type:admintypesAction.EDIT_PAGE_ON,
    payload:item
})

export const  Edit_off = (item) =>({
    type:admintypesAction.EDIT_PAGE_OFF,
    payload:item
})