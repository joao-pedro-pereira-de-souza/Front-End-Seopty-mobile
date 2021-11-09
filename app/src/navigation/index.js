import React from 'react'
import {View , TouchableOpacity , StyleSheet} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LinearGradient from 'react-native-linear-gradient';

//#region Import Screens 
import Home from '../screens/home'
import History from  '../screens/history'
import Chart from '../screens/details'
import Large from '../screens/larges/'
import Config from '../screens/config'
//#endregion

import { Icons , COLORS} from '../constants/index'

const Tab = createBottomTabNavigator()

const ButtonChart = ({navigation}) =>{
    return(

        

                <LinearGradient  colors={[COLORS.greenLight, COLORS.blueDark02]}  
                style={{

                    width:75, 
                    height:75, 
                    borderRadius:75 /2,
                    alignItems:'center',
                    justifyContent:'center',
                    marginBottom:30 ,
                    ...styles.shadow

                    }}>
                         <Icons.chart width={25} height={25} fill='#fff'/>
                        <TouchableOpacity onPress={navigation}>
                    
                            
                        </TouchableOpacity>
                    
                </LinearGradient>


        

    )
}

export default function index() {

    const TabIcons = {

        Home: Icons.home_filled ,
        History: Icons.document_gradient,
        Larges: Icons.large_gradient,
        Config: Icons.config_gradient,
        

    }
    
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={ ({route , navigation}) =>({

                    headerShown:false,
                    headerShadowVisible:false,
                    tabBarShowLabel:false,
                
                    tabBarIconStyle:{
                        
                    },
                    tabBarStyle:{

                        height: 80,
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30,
                        paddingHorizontal:10,
                        paddingBottom:10



                    },

                    tabBarIcon:({focused}) =>{

                        
                        if(route.name =='Home'){
                            return <Icons.home_gradient width={27} height={27} isFocused={focused} color={focused? '' : COLORS.greyLight}/>
                        }
                        if(route.name == 'History'){
                            return <Icons.document_gradient width={27} height={27} isFocused={focused} color={focused? '' : COLORS.greyLight} />
                        }
                        
                        if(route.name == 'Chart'){
                            return ButtonChart(() => navigation.navigate('Chart'))
                        }
                        
                        if(route.name == 'Larges'){
                            return <Icons.large_gradient width={27} height={27} isFocused={focused} color={focused? '' : COLORS.greyLight} />
                        }
                        if(route.name == 'Config'){

                            return <Icons.config_gradient width={27} height={27} isFocused={focused} color={focused? '' : COLORS.greyLight} />

                        }
                        

                       
                        
                    }


                })
            }>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='History' component={History} />
                <Tab.Screen name='Chart' component={Chart} />
                <Tab.Screen name='Larges' component={Large} />
                <Tab.Screen name='Config' component={Config} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
    }
})