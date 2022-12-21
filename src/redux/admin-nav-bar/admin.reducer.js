

import admintypesAction from "./admin.types"

const INITIAL_STATE ={
    dashboard:true,
    allbooks:false,
    recentOrder:false,
    addBook:false,
    editPageBool:true,
    editPageID:null
}

const adminReducer = ( state= INITIAL_STATE,action)=>{
    switch(action.type){

        case admintypesAction.DASHBOARD :
            return{
                ...state,
                dashboard:true,
                allbooks:false,
                recentOrder:false,
                addBook:false,
            }

         case admintypesAction.ALL_BOOKS :
            return{
                ...state,
                dashboard:false,
                allbooks:true,
                recentOrder:false,
                addBook:false,

            }
        case admintypesAction.RECENT_ORDER :
            return{
                ...state,
                dashboard:false,
                allbooks:false,
                recentOrder:true,
                addBook:false,
                
            }
            
            
        case admintypesAction.ADD_BOOK :
            return{
                ...state,
                dashboard:false,
                allbooks:false,
                recentOrder:false,
                addBook:true,
            }
        case admintypesAction.EDIT_PAGE_ON :
            return{
                ...state,
                editPageBool:true,
                editPageID:action.payload
            }

        case admintypesAction.EDIT_PAGE_OFF :
            return{
                ...state,
                editPageBool:false,
                editPageID:action.payload

            }
        
        default:
            return {
                ...state,
            }    
    }
}


export default adminReducer
