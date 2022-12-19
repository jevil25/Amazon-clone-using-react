export const initialState = {
    basket: [],
    total: []
};

const reducer = (state, action) => {
    // console.log(action);
    // console.log(parseFloat(...state.total)+parseFloat(action.item.price));
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
                total: [...state.total, action.item.price]
            };

        default:
            return state;
    }
}

export default reducer;