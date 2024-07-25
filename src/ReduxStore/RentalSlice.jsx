import { createSlice } from '@reduxjs/toolkit'

import { cars } from '../Data/cars'


const initialState = {
    carItemObj: null,
    selectedCategories: [],
}

export const rentalCarFunctions = createSlice({
    name: 'rentalCar',
    initialState,
    reducers: {
        rentNowBtn: (state, actions) => {
            state.carItemObj = actions.payload
        },
        addToSelectedCategory: (state, actions) => {
            if (actions.payload.isChecked) {
                state.selectedCategories = [...state.selectedCategories, actions.payload.category];
            } else {
                state.selectedCategories = state.selectedCategories.filter(
                    category => category !== actions.payload.category)
            }
        }
    }
})

export const { rentNowBtn, addToSelectedCategory } = rentalCarFunctions.actions;
export default rentalCarFunctions