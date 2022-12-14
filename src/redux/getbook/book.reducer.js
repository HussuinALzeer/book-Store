import BookActionTypes from './book.type'

const INITIAL_STATE = {
    errormessage:'',
    thebook:'',
    searchBar:''
}


const ThebookReducer = ( state= INITIAL_STATE, action) =>{
    switch(action.type){

        
        case BookActionTypes.FETCH_THEBOOK_START:
            return{
                ...state,
            }    

        case BookActionTypes.FETCH_THEBOOK_SUCCESS:
            return{
                ...state,
                thebook:action.payload
            }    
        case BookActionTypes.FETCH_THEBOOK_FAIL:
            return{
                ...state,
                errormessage:action.payload
            }    
         
        case BookActionTypes.SEARCHBAR:
            return{
                ...state,
                searchBar:action.payload
            }   

        default:
            return state;
    }
}

export default ThebookReducer