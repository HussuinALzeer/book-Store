import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import BookActionTypes from "./book.type"


export const fetchSearchBar = text =>({
    type:BookActionTypes.SEARCHBAR,
    payload:text
})

export const fetchTheBookStart = () =>({
    type:BookActionTypes.FETCH_THEBOOK_START
})

export const fetchTheBookSuccess = book =>({
    type:BookActionTypes.FETCH_THEBOOK_SUCCESS,
    payload:book
})

export const fetchTheBookFail = errorMessage =>({
    type:BookActionTypes.FETCH_THEBOOK_FAIL,
    payload:errorMessage
})

export const fetchTheBookInfoAsync = id =>{

    return async dispatch =>{
        
        const docRef = doc(db, "books", id);
        const docSnap = await getDoc(docRef);
        
        dispatch(fetchTheBookSuccess(docSnap.data()))

      
    }

}
