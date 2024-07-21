import { configureStore } from '@reduxjs/toolkit'
import trackScreenWidthChanges from './trackScreenWidthSlice'
import questionsLists from './questionListsSlice'

export default configureStore({
    reducer: {
        trackScreenWidth: trackScreenWidthChanges.reducer,
        questionsListsReducer: questionsLists.reducer
    },
})