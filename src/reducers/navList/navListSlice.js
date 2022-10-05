import { createSlice } from '@reduxjs/toolkit'

export const navListSlice = createSlice({
  name: 'navList',
  initialState: {
    tree: [2, 5,5, 8,33,3,1,5, 0,0,0,2,3, 9,9,9,9,9,9,9,9, 4],
    treeExc : {150:4,151:3,152:3,153:2,154:2,155:2,157:2,158:2,160:2,161:2,203:4,204:2,205:2,206:3,207:2,208:12,209:12,210:12,211:12,212:12,213:12,214:12,215:12,216:12,217:12,218:12,219:12,220:12,221:12,222:12,223:12,224:12,225:12,226:12,227:12,228:12,229:12,230:12,231:12,232:12, 500:3, 750:4,751:4,752:3, 755:4,756:4,757:4, 760:4,761:4,762:4,763:4, 765:4,766:4, 770:2,771:2,772:2,773:2, 775:2,776:2,777:2,778:2, 780:2,781:2,782:2,783:2, 786:2,787:2,788:2, 790:2,791:2,792:2,793:2, 795:2,796:2,797:2,798:2, 800:2,801:2,802:2,803:2, 810:2,811:2,812:2,813:2, 815:2,816:2,817:2,818:2},
    treeLayers : [1, 3,8, 13,200,150,500,null, null,null,null,121,123, 21,31,41,51,61,71,81,91],
    treeLayersExc : {150:153, 151:157, 152:160, 153:163, 154:165,155:167, 157:170,158:171, 160:173,161:175, 203:240, 204:245, 205:250, 206:255, 207:260, 208:265,209:277,210:289,211:301,212:313,213:325,214:347,215:359,216:371,217:383,218:395,219:407,220:419,221:431,222:443,223:455,224:467,225:479,226:1491,227:1503,228:1515,229:1527,230:1539,231:1551,232:1563, 500:750, 750:755, 751:760, 752:765, 755:770, 756:775, 757:780, 758:785, 760:790,761:795,762:800, 765:810,766:815, 770:830,771:832,772:834,773:836, 775:838,776:840,777:842,778:844, 780:846,781:848,782:850,783:852, 790:862,791:864,792:866,793:868, 795:870,796:872,797:874,798:876, 800:878,801:880,802:882,803:884, 810:894,811:896,812:898,813:900, 815:902,816:904,817:906,818:908, 501:585,502:587,503:589,504:591,505:593,506:595,507:597,508:599,509:601},
    treeLayersExcInvert : {153:150, 157:151, 160:152, 163:153, 165:154,167:155, 170:157,171:158, 173:160,175:161, 4:1, 240:203,  245:204, 250:205, 255:206, 260:207, 265:208,277:209,289:210,301:211,313:212,325:213,347:214,359:215,371:216,383:217,395:218,407:219,419:220,431:221,443:222,455:223,467:224,479:225,1491:226,1503:227,1515:228,1527:229,1539:230,1551:231,1563:232, 750:500, 755:750, 760:751, 765:752, 770:755, 775:756, 780:757, 785:758, 790:760,795:761,800:762, 810:765,815:766, 830:770,832:771,834:772,836:773, 838:775,840:776,842:777,844:778, 846:780,848:781,850:782,852:783, 862:790,864:791,866:792,868:793, 870:795,872:796,874:797,876:798, 878:800,880:801,882:802,884:803, 894:810,896:811,898:812,900:813, 902:815,904:816,906:817,908:818, 585:501,587:502,589:503,591:504,593:505,595:506,597:507,599:508,601:509},
    indexCount : {5:2, 9: 1, 10 : 2, 11 : 3, 12 : 4, 14 : 1, 15 : 2, 16 : 3, 17:4, 18:5, 19:6, 20:7, 151 : 1, 152 : 2, 153: 0, 154 : 1, 155 : 2, 156:3, 158:1, 159:2, 161:1, 162:2, 164:1, 166:1, 168:1 , 240 : 0, 241:1,242:2,243:3,244:0,245:1,4:0, },
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