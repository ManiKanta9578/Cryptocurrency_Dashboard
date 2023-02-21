import actionTypes from "../action/types";

const initialState ={
    projectName:"Crypto dashboard",
    coinList: [],
}

const mainReducer = (state=initialState, action) =>{
    
    switch(action.type){


        case actionTypes.COIN_API_SUCCESS:
            return {
                ...state,
                coinList : action.payload,
                page: action.payload

            }

        case actionTypes.COIN_API_ERROR:
            alert(action.payload)
            return state

        default: return state
    }
}

export default mainReducer;