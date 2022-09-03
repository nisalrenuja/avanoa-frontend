import { createSlice } from '@reduxjs/toolkit'

export const navListSlice = createSlice({
  name: 'navList',
  initialState: {
    tree: [2, 5,5, 8,33,3,5,5, 0,0,0,2,3, 9,9,9,9,9,9,9,9, 4],
    treeExc : {150 : 4, 151:3, 152:3, 153 : 2 , 157 : 2, 160 : 2, 200: 4, 201 : 2},
    treeLayers : [1, 3,8, 13,200,150,null,null, null,null,null,121,123, 21,31,41,51,61,71,81,91],
    treeLayersExc : {150 : 153, 151 : 157, 152 : 160, 153 : 163, 157 : 165, 160 : 167, 200:240, 201 : 244},
    treeLayersExcInvert : {153:150, 157:151, 160:152, 163:153, 165:157, 167:160, 240:200, 244:201},
    indexCount : {5:2, 9: 1, 10 : 2, 11 : 3, 12 : 4, 14 : 1, 15 : 2, 16 : 3, 17:4, 18:5, 19:6, 20:7, 151 : 1, 152 : 2, 153: 0, 154 : 1, 155 : 2, 156:3, 158:1, 159:2, 161:1, 162:2, 164:1, 166:1, 168:1 , 240 : 0, 241:1,242:2,243:3,244:0,245:1},
    index : 0,
    preIndex : 0,
    layer : 0,
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
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { updateTree, updateTreeLayers, updateIndex, updatePreIndex, updateLayer, incrementLayer, decrementLayer } = navListSlice.actions

export default navListSlice.reducer