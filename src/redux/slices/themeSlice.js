import { createSlice } from "@reduxjs/toolkit";
const initialState={
    darkMode:true,
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
     toggleTheme : (state) =>{
        state.darkMode=!state.darkMode;//reassigning for toggling between both
     }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;