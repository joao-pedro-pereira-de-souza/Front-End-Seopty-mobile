import {Dimensions} from 'react-native'

const {width ,height} = Dimensions.get('window')

export const SIZES = {

    width,
    height,

    h1: width * 0.1,
    h1: width * 0.08,
    h3: width * 0.06,

}

export const COLORS ={

    background: '#F5F8FE',

    blueDark01:'#0F1E5D',
    blueDark02:'#607AF3',
    blueDark03:'#3188D9',

    blueLight:'#8DADFF',
    greenLight:'#B6FBF4',

    white:'#FFFFFF',
    greyLight:'#B9B9B9',
    greyDark:'#707070',

    redLight:'#F57E5D',


}

export const FONTS = {
    h1:{fontFamily:'Questrial-Regular', fontSize:SIZES.h1},
    h2:{fontFamily:'Questrial-Regular', fontSize:SIZES.h2},
    h3:{fontFamily:'Questrial-Regular', fontSize:SIZES.h3}
}

export default {

    SIZES,
    COLORS,
    FONTS
    
}

