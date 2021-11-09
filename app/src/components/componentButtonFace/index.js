import React from 'react'
import { View, Text , Image} from 'react-native'
import styles from './styles'
import {COLORS , Images} from '../../constants/index'
export default function index() {
    return (

        <View>

            <View style={styles.container}>

                <Image source={Images.face} style={{width:40}} resizeMode='contain'/>

            </View>
            <View style={styles.cicle}/>
        </View>
        
    )
}
