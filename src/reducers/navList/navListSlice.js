import { createSlice } from '@reduxjs/toolkit'

export const navListSlice = createSlice({
  name: 'navList',
  initialState: {
    tree: [2, 5,5, 8,3,3,5,5, 0,0,0,2,3, 9,9,9,9,9,9,9,9, 4, 2],
    treeLayers : [1, 3,8, 13,200,150,null,null, null,null,null,121,123, 21,31,41,51,61,71,81,91, 153, 170],
    indexCount : {9: 1, 10 : 2, 11 : 3, 12 : 4, 14 : 1, 15 : 2, 16 : 3, 17:4, 18:5, 19:6, 20:7},
    index : 0,
    preIndex : 0,
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
    updatePreIndex: (state, action) => {
      state.preIndex = action.payload
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
export const { updateTree, updateTreeLayers, updateIndex, updatePreIndex, updateLayer, incrementLayer, decrementLayer } = navListSlice.actions

export default navListSlice.reducer