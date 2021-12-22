import {configureStore} from '@reduxjs/toolkit'
import carSlice from '../components/features/car/carSlice.js'


export const store = configureStore({

    reducer:{
        car: carSlice

    },
});