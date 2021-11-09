import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {ButtonFace} from '../../components/index'
import {SIZES , COLORS , FONTS} from '../../constants/index'
export default function index() {
    return (
        <View style={styles.container}>

            <View style={styles.containerTop}>

                <View>

                     <Text style={{...FONTS.h2 , color: COLORS.greyDark}}>Welcome, Tom</Text>
                     <Text style={{...FONTS.h1, lineHeight:40 , color: COLORS.blueDark01}}>Your statistic</Text>

                </View>

                <ButtonFace/>

            </View>
            
        </View>
    )
}
