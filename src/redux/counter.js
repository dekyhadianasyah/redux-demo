import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const incrementAsync = createAsyncThunk('incrementAsync', () => {

    return new Promise((resolve) =>{

            setTimeout(() => {
                resolve()
            },1000)
    })
})

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 10 ,
        loading : false
    },
    reducers : {
        increment : (state) =>{
            state.value++
        },
        decrement : (state) =>{
            state.value--
        },
        incrementValue : (state, actions) =>{
            console.log(actions)
            state.value += actions.payload
        }
    },
    extraReducers : {
            [incrementAsync.pending] : (state, actions) => {
                state.loading = true
            },
            [incrementAsync.fulfilled] : (state, actions) => {
                state.loading = false
                state.value++
            }
    }
})

export const { increment,decrement,incrementValue } = counterSlice.actions

export default counterSlice.reducer
