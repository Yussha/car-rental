import { configureStore } from '@reduxjs/toolkit'
import questionsLists from './questionListsSlice'
import rentalCarFunctions from './RentalSlice'

export default configureStore({
    reducer: {
        questionsListsReducer: questionsLists.reducer,
        rentalCarFunctionsReducer: rentalCarFunctions.reducer
    },
})