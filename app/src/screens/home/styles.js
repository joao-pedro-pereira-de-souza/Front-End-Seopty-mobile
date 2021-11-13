import {StyleSheet} from 'react-native'
import {SIZES , COLORS} from '../../constants/index'
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.background,
        paddingHorizontal: SIZES.padding
    },
    containerTop:{
        marginTop: SIZES.padding,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default styles
