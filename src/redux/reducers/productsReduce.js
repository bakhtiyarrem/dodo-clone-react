import {ProductsApi} from "../../api/api";

const SET_PRODUCTS = "SET_PRODUCTS"

let initialState = {
    "isLoaded": false,
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
                isLoaded: true
            }
        }
        default:
            return state;
    }
}

//actions
export const setProducts = (products) => ({type: SET_PRODUCTS, products})

//thunks
export const fetcProducts = () => async (dispatch) => {

    const data = await ProductsApi.getProducts()
    dispatch(setProducts(data))
}





export default productsReduce;