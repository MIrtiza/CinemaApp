import React, { useState } from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import Styles from '../assets/styles/Style'
import * as animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

const signinComponent = ({ navigation }) => {
    const [ email, setEmail ] = useState(false)
    const [ password, setPassword ] = useState('')
    const [ secureTextEntry, setsecureTextEntry ] = useState(true)

   const textInputChange = (value)=>{
        if(value.length !== 0){
            setEmail(true)
        }else{
            setEmail(false)
        }
    }
    const secureTextEntry1 = () =>{
       
            setsecureTextEntry(setsecureTextEntry => !setsecureTextEntry)   
    }
    return (
        <View style={[ Styles.container ]}>
             <StatusBar barStyle="light-content" />
            <View style={[Styles.headerSign]}>
                <Text style={[Styles.textWelcome]}>Welcome Gardash!</Text>
            </View>

            <animatable.View 
                style={[Styles.footerSign]}
                animation="fadeInUpBig"
            >
                <Text style={[Styles.labels]}>Email</Text>
                <View style={[Styles.action]}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Email"
                        style={[Styles.input]}
                        onChangeText={(text)=> textInputChange(text)}
                    />
                    {email ? 
                    <animatable.View animation="bounceIn">
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    </animatable.View>
                    :null}
                </View>

                <Text style={[Styles.labels], {marginTop: 35}}>Password</Text>
                <View style={[Styles.action]}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Password"
                        style={[Styles.input]}
                        value={password}
                        secureTextEntry={secureTextEntry}
                        onChangeText={(text)=> {setPassword(text)} }
                    />
                    <TouchableOpacity
                        onPress={()=> secureTextEntry1()}
                    >
                    {secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="gray"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="gray"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={[Styles.forgotText]}>
                    Forgot password?
                </Text>
                <View style={[Styles.SignButtonWrapper]}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Home")}
                        style={{width: "100%"}}
                        >
                        <LinearGradient colors={['#5db8fe', '#39cff2']} 
                            style={Styles.signinBtn}> 
                            <Text style={Styles.SignText}>Sign in</Text> 
                         
                        </LinearGradient>    
                    </TouchableOpacity>  

                    <TouchableOpacity
                        onPress={()=> navigation.navigate("SignupScreen")}
                        style={[Styles.SignupBtn]}
                    >
                        <Text style={[Styles.textSignup], {color:"#4dc2f8"}}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </animatable.View>
        </View>
    )
}

export default signinComponent
