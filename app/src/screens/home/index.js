import React from 'react'
import { View, Text , Image} from 'react-native'
import styles from './styles'
import {ButtonFace , ChartPie} from '../../components/index'
import {VictoryPie , VictoryLabel} from 'victory-native'

import {SIZES , COLORS , FONTS , Images} from '../../constants/index'


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

            <View style={{ marginTop:SIZES.padding , justifyContent:'center' }}>

                <Image source={Images.container01} style={{ 

                    width:'100%', 
                    height:150, 
                    borderRadius:SIZES.radius,
                   
                    }} resizeMode='contain'/>

                <View style={{ 
                   position: 'absolute',
                   top:-8,
                   left:-15,

                    }}>

                    
                     <ChartPie/>

                     
                    
                </View>

            </View>

           
            
        </View>
    )
}
