import {StyleSheet} from 'react-native'
import {SIZES , COLORS} from '../../constants/index'

const styles = StyleSheet.create({

    container:{

        width: SIZES.width * 0.13,
        height: SIZES.width * 0.13,
        backgroundColor: COLORS.blueLight02,
        borderRadius: (SIZES.width * 0.13) / 4,

        alignItems:'center',
        justifyContent:'center'

    },
    cicle:{
        width: SIZES.width * 0.023,
        height: SIZES.width * 0.023,
        borderRadius:(SIZES.width * 0.023) / 2,
        backgroundColor:COLORS.blueDark02,
        position: 'absolute',
        right: 0,

    }
})


export default styles