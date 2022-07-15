import { createSlice } from '@reduxjs/toolkit'

export const selectedIndexSlice = createSlice({
  name: 'selectedIndex',
  initialState: {value:0},
  reducers: {
    selection: (state, action) => {
      state.value = action.payload
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { selection } = selectedIndexSlice.actions

export default selectedIndexSlice.reducer