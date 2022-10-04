import { createSlice } from '@reduxjs/toolkit'

export const navListSlice = createSlice({
  name: 'navList',
  initialState: {
    tree: [2, 5,5, 8,33,3,1,5, 0,0,0,2,3, 9,9,9,9,9,9,9,9, 4],
    treeExc : {150 : 4, 151:3, 152:3, 153 : 2 , 157 : 2, 160 : 2, 203:4, 204:2, 500:3, 550: 4, 551: 4, 552 : 3, 555:5, 560:5, 565:5, 570:2,575:2,580:2},
    treeLayers : [1, 3,8, 13,200,150,500,null, null,null,null,121,123, 21,31,41,51,61,71,81,91],
    treeLayersExc : {150 : 153, 151 : 157, 152 : 160, 153 : 163, 157 : 165, 160 : 167, 203:240, 204 : 244, 500:550, 550:555, 551:560, 552:565, 555:570, 560:575, 565:580, 570:572, 575:577,580:582, 501:585,502:587,503:589,504:591,505:593,506:595,507:597,508:599,509:601},
    treeLayersExcInvert : {153:150, 157:151, 160:152, 163:153, 165:157, 167:160, 240:201, 244:202, 4:1, 550:500, 555:550, 560:551, 565:552, 570:555, 575:560, 580:565, 572:570, 577:575, 582:580, 585:501,587:502,589:503,591:504,593:505,595:506,597:507,599:508,601:509},
    indexCount : {5:2, 9: 1, 10 : 2, 11 : 3, 12 : 4, 14 : 1, 15 : 2, 16 : 3, 17:4, 18:5, 19:6, 20:7, 151 : 1, 152 : 2, 153: 0, 154 : 1, 155 : 2, 156:3, 158:1, 159:2, 161:1, 162:2, 164:1, 166:1, 168:1 , 240 : 0, 241:1,242:2,243:3,244:0,245:1,4:0, 550:0,551:1,552:2,553:3, 555:0,556:1,557:2,558:3,559:4,560:0,561:1,562:2,563:3,564:4,565:0,566:1,567:2,568:3,569:4,570:0,571:1,572:0,573:1,575:0,576:1,577:0,578:1,580:0,581:1,582:0,582:1},
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
    updateReminders: (state, action) => {
      //state.reminders = action.payload
      state.tree[6] = action.payload
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { updateTree, updateTreeLayers, updateIndex, updatePreIndex, updateLayer, incrementLayer, decrementLayer, updateReminders } = navListSlice.actions

export default navListSlice.reducer