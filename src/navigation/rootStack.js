import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import SplashScreen from '../screens/splashComponent'
import SigninScreen from '../screens/signinComponent'
import SignupScreen from '../screens/signupComponent'
import Home from '../screens/Home'
import TodayShow from '../screens/TodayShow'
import BookSeats from '../screens/BookSeats'

import Feather from 'react-native-vector-icons/Feather'

const TabBottom = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            headerShown: false,
            tabBarIcon:({ tintColor })=>(
                <View>
                    <Feather
                    style={{color: tintColor}}
                        name="home"
                       
                        size={20}
                     />
                </View>
            )
        }
    },
    TodayShow:{
        screen: TodayShow,
        navigationOptions:{
            headerShown: false,
            tabBarIcon:({ tintColor })=>(
                <View>
                    <Feather
                    style={{color: tintColor}}
                        name="tv"
                        
                        size={20}
                     />
                </View>
            )
        }
    }
},
{
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#888',
    barStyle:{backgroundColor: '#05375a'}
}
)

const StackNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    SigninScreen: {
        screen: SigninScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    SignupScreen: {
        screen: SignupScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    Home: {
        screen: TabBottom,
        navigationOptions:{
            headerShown: false
        }
    },
    BookSeats:{
        screen: BookSeats,
        navigationOptions:{
            headerShown: false
        }
    }
},{
    initialRouteName:"BookSeats"
})


export default createAppContainer(StackNavigator)