import { createSlice } from '@reduxjs/toolkit'

export const navListSlice = createSlice({
  name: 'navList',
  initialState: {
    tree: [2,4,3,3,4,2,5,9,9,9],
    treeLayers : [1,3,0,7,0,0,0,10,19,23],
    index : 0,
    layer : 0
},
  reducers: {
    updateTree: (state, action) => {
      //state.list = action.payload
    },
    updateTreeLayers: (state, action) => {
      //state.list = action.payload
    },
    updateIndex: (state, action) => {
        state.index = action.payload
    },
    updateLayer: (state, action) => {
      state.layer = action.payload
    },
    incrementLayer:(state) => {
      state.layer += 1
    },
    decrementLayer:(state) => {
      state.layer -= 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateTree, updateTreeLayers, updateIndex, updateLayer, incrementLayer, decrementLayer } = navListSlice.actions

export default navListSlice.reducer