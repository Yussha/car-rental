import { configureStore } from '@reduxjs/toolkit'
import trackScreenWidthChanges from './trackScreenWidthSlice'

export default configureStore({
    reducer: {
        trackScreenWidth: trackScreenWidthChanges.reducer
    },
})