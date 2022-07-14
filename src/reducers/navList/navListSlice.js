import { createSlice } from '@reduxjs/toolkit'

export const navListSlice = createSlice({
  name: 'navList',
  initialState: {
    tree: [2, 5,5, 8,4,3,5,5, 10,10,9,9,9,9,9,8, 1,1,1,2,3],
    treeLayers : [1, 3,8, 13,0,0,0,0, 21,31,41,50,60,70,80,89, 96,97,98,99,101],
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