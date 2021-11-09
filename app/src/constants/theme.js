import {Dimensions} from 'react-native'

const {width ,height} = Dimensions.get('window')

export const SIZES = {

    width,
    height,

    h1: width * 0.06,
    h2: width * 0.04,
    h3: width * 0.06,

    padding: width * 0.06

}

export const COLORS ={

    background: '#F5F8FE',

    blueDark01:'#0F1E5D',
    blueDark02:'#5D7CFF',

    blueLight:'#8DADFF',
    blueLight02:'#E5F1FD',
    greenLight:'#B6FBF4',

    white:'#FFFFFF',
    greyLight:'#B9B9B9',
    greyDark:'#707070',

    redLight:'#F57E5D',


}

export const FONTS = {
    h1:{fontFamily:'Roboto-Bold', fontSize:SIZES.h1},
    h2:{fontFamily:'Roboto-Medium', fontSize:SIZES.h2},
    h3:{fontFamily:'Roboto-Light', fontSize:SIZES.h3}
}

export default {

    SIZES,
    COLORS,
    FONTS
    
}

