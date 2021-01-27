const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"

let initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

const cartReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.payload
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                itemsCount: action.payload
            }
        }
        case ADD_ITEM_TO_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            //const allProducts = [].concat.apply([], Object.values(newItems))
            const allProducts = Object.values(newItems).flat()
            const totalPrice = allProducts.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                itemsCount: allProducts.length,
                totalPrice,
            }
        }
        default:
            return state;
    }
}

export const addItemToCart = (itemObject) => ({
    type: ADD_ITEM_TO_CART,
    payload: itemObject
})

export default cartReduce;