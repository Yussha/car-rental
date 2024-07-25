import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showAnswer: false,
    questionId: null,
}

export const questionsLists = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        showAnswer: (state, actions) => {
            if (state.questionId === actions.payload) {
                state.questionId = null;
            } else {
                state.questionId = actions.payload;
            }
        },
    }
})

export const { showAnswer } = questionsLists.actions;
export default questionsLists