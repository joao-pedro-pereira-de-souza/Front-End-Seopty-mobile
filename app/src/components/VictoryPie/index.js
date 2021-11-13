import React from 'react'
import { View , Text} from 'react-native'
import Svg, {Circle , LinearGradient , Stop , Defs} from 'react-native-svg'
import {VictoryPie , VictoryLabel} from 'victory-native'
import {FONTS , COLORS , SIZES} from '../../constants/index'
export default function index() {

    const dataPie = [

        {x:'null', y:60},
        {x:'use' , y:40}
    
    ]

    return (
        <View style ={{ height:170 , flexDirection:'row' , justifyContent:'center'}}>


            <View>
             
                    <Svg width={170} height={170} fill='#000' style={{alignSelf:'center'}}>

                        <Defs>

                            <LinearGradient  id="gradient" gradientTransform="rotate(90)">
                                <Stop stop-color="#97DBF5" offset="1%"/>
                                <Stop stop-color="#607AF3" offset="99%"/>
                            </LinearGradient>

                        </Defs>

                        <Circle cx={85} cy={85} r={35} fill="#fff" opacity={0.5} />
                        <Circle cx={85} cy={85} r={33} fill='#fff'/>


                        <VictoryPie

                        innerRadius={45 }
                        labels={() => ''}
                        width={170} height={170}
                        data={[...dataPie]}
                        colorScale={[COLORS.blueDark02, COLORS.blueLight02]}
                        standalone={false}
                        events={[{
                            target:'data',
                            eventHandlers:{
                                onPress: ()=>{
                                    return[{
                                        target:'labels',
                                        mutation: (props) =>{
                                            console.log(props.index)
                                        }
                                    }]
                                }
                            }
                        }]}

                        >


                        </VictoryPie>
                    </Svg>

                    <View style ={{  position:'absolute' , top:'40%' , left:'39%' , alignItems:'center'}}>
                            
                            <Text style={{color:COLORS.blueDark01 , ...FONTS.h1}}>30%</Text>
                    </View>

            </View>



            <View style={{position:'relative', top:45, left:-40}}>
                <Text style={{...FONTS.body1 , color: COLORS.white, lineHeight:30}}>Your weekly score</Text>
                <Text style={{...FONTS.body2 , color: COLORS.white , opacity:0.7}}>last updated - Sep. 10, 2021</Text>
            </View>

          

        </View>
    )
}
