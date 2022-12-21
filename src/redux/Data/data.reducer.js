import DataActionTypes from "./data.Type";

const INITIAL_STATE = {
    collections:[],
    isFetching:false,
    errormessage:'',
    thebook:''
}


const booksReducer = ( state= INITIAL_STATE, action) =>{
    switch(action.type){

        case DataActionTypes.FETCH_BOOKS_START:
            return{
                ...state,
                isFetching:true
            }
        case DataActionTypes.FETCH_BOOKS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case DataActionTypes.FETCH_BOOKS_FAIL:
            return{
                ...state,
                isFetching:false,
                errormessage:action.payload
            }
        
        case DataActionTypes.FETCH_THEBOOK_START:
            return{
                ...state,

            }    

        case DataActionTypes.FETCH_THEBOOK_SUCCESS:
            return{
                ...state,
                thebook:action.payload
            }    
        case DataActionTypes.FETCH_THEBOOK_FAIL:
            return{
                ...state,
                errormessage:action.payload
            }       
        default:
            return state;
    }
}

export default booksReducer