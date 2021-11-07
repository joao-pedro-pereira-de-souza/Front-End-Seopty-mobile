import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/home'
import { Icons , COLORS} from '../constants/index'

const Tab = createBottomTabNavigator()
export default function index() {

    const TabIcons = {

        Home:{

            Icon: Icons.home_filled,

        },
        History:{
            Icon : Icons.text_document_inverted
        }

    }
    
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={ ({route , navigation}) =>({

                    headerShown:false,
                    headerShadowVisible:false,
                    tabBarShowLabel:false,
                    tabBarStyle:{

                        height: 70,
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30

                    },

                    tabBarIcon:({color , size , focused}) =>{

                        if(route.name =='Home'){
                            return <Icons.home_gradient width={30} height={30} isFocused={focused} color={focused? '' : COLORS.greenLight}/>
                        }
                        
                        const {Icon} = TabIcons[route.name]

                        return <Icon width={30} height={30} fill={color}/>
                        
                    }


                })
            }>
                <Tab.Screen name='Home' component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
