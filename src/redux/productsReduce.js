const SET_PRODUCTS = "SET_PRODUCTS"

let initialState = {
    "products": [
        {
            "title": null,
            "id": null,
            "items": [
                {
                    "id": null,
                    "name": null,
                    "ingredient": null,
                    "imgUrl": null,
                    "sizes": [
                        null
                    ],
                    "price": [
                        null
                    ]
                }
            ]
        }
    ]
}

const productsReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: [...action.products],
            }
        }
        default:
            return state;
    }
}


export const setProducts = (products) => ({type: SET_PRODUCTS, products})


export default productsReduce;