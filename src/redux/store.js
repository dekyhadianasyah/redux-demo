import {configureStore} from '@reduxjs/toolkit'
import counterReduce from './counter'

export default configureStore({
    reducer : {
        counter : counterReduce
    }

})