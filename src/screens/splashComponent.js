import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, NavigatorIOS } from 'react-native'
import Styles from '../assets/styles/Style'
import * as animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const splashComponent = ({ navigation }) => {
    //   console.warn(props.navigation);
    return (
        <View style={[Styles.container]}>
            <StatusBar barStyle="light-content" />
            <View style={[Styles.header]}>
                <animatable.Image 
                    animation="bounceIn"
                    duration={1500}
                    source={require('../assets/logo1.png')}
                    resizeMode="stretch"
                    style={[Styles.logo]}
                />
            </View>
            <animatable.View 
                style={[Styles.footer]}
                animation="fadeInUpBig"
            >
                <Text style={[Styles.title]}>Stay Connected with everyone!</Text>
                <Text style={[Styles.textSmall]}>Sign in with account</Text>
                <View style={[Styles.buttonSplash]}>
                   <TouchableOpacity
                    onPress={()=> navigation.navigate("SigninScreen")}
                   >
                    <LinearGradient colors={['#5db8fe', '#39cff2']} 
                    style={Styles.splashBtn}> 
                        <Text style={Styles.SignText}>Get Started </Text> 
                        <FontAwesome 
                        name="angle-right"
                        color="white"
                        size={20}
                    />
                    </LinearGradient>
                   </TouchableOpacity> 
                </View>
            </animatable.View>
        </View>
    )
}

export default splashComponent
