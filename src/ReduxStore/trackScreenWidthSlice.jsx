import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    screenWidth: window.innerWidth
};

export const trackScreenWidthChanges = createSlice({
    name: 'trackScreenWidth',
    initialState,
    reducers: {
        trackWidth: (state) => {
            state.screenWidth = window.innerWidth;
        }
    }
})

export const { trackWidth } = trackScreenWidthChanges.actions;

export default trackScreenWidthChanges