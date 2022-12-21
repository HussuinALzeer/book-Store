import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import {DataActionTypes} from './data.Type'
import { doc, getDoc } from "firebase/firestore";


export const fetchBooksStart = () => ({
    type:DataActionTypes.FETCH_BOOKS_START,
})

export const fetchBooksSuccess = booksMap =>({
    type:DataActionTypes.FETCH_BOOKS_SUCCESS,
    payload:booksMap
})

export const fetchBooksFail = errorMessage =>({
    type:DataActionTypes.FETCH_BOOKS_FAIL,
    payload:errorMessage
})

export const fetchBooksStartAsync = () =>{

    return async dispatch =>{
        let list=[]
        const querySnapshot = await getDocs(collection(db, "books"));
            dispatch(fetchBooksStart())
            querySnapshot.forEach((doc) => {
                list.push({id:doc.id,...doc.data()})    
        });
        dispatch(fetchBooksSuccess(list))
        
    }
}

/////////////////////////// fetch just one book ////////////////////////////////////

export const fetchTheBookStart = () =>({
    type:DataActionTypes.FETCH_THEBOOK_START
})

export const fetchTheBookSuccess = book =>({
    type:DataActionTypes.FETCH_THEBOOK_SUCCESS,
    payload:book
})

export const fetchTheBookFail = errorMessage =>({
    type:DataActionTypes.FETCH_THEBOOK_FAIL,
    payload:errorMessage
})

export const fetchTheBookAsync = (id) =>{

    return async dispatch =>{
        
        try {
          
        dispatch(fetchTheBookStart())
        const docRef = doc(db, "books", id);
        const docSnap = await getDoc(docRef);
         

        dispatch(fetchBooksSuccess(docSnap.data()))
        } catch (error) {
         dispatch(fetchTheBookFail(error.message))   
        }
    }

}

