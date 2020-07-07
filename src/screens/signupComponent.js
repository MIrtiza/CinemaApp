import React, { useState } from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import Styles from '../assets/styles/Style'
import * as animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

const signupComponent = ({ navigation }) => {
    const [ email, setEmail ] = useState(false)
    const [ password, setPassword ] = useState('')
    const [ secureTextEntry, setsecureTextEntry ] = useState(true)

    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ confirmSecureTextEntry, setConfirmSecureTextEntry ] = useState(true)

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
    const confirmSecureTextEntry1 = () =>{
        setConfirmSecureTextEntry(setConfirmSecureTextEntry => !setConfirmSecureTextEntry) 
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

                <Text style={[Styles.labels], {marginTop: 35}}>Confirm Password</Text>
                <View style={[Styles.action]}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        style={[Styles.input]}
                        value={confirmPassword}
                        secureTextEntry={confirmSecureTextEntry}
                        onChangeText={(text)=> {setConfirmPassword(text)} }
                    />
                    <TouchableOpacity
                        onPress={()=> confirmSecureTextEntry1()}
                    >
                    {confirmSecureTextEntry ? 
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

                <View style={[Styles.terms]}>
                        <Text style={[Styles.terms_color]}>By signing up you agree to our</Text>
                        <Text style={[Styles.terms_color], {fontWeight: 'bold', color:'gray'}}> {" "}Terms of Service</Text>
                        <Text style={[Styles.terms_color]}>and</Text>
                        <Text style={[Styles.terms_color], {fontWeight: 'bold', color: 'gray'}}> {" "}Privacy Policy</Text>
                </View>
              
                <View style={[Styles.SignButtonWrapper]}>
                    <TouchableOpacity style={{width: "100%"}}>
                        <LinearGradient colors={['#5db8fe', '#39cff2']} 
                            style={Styles.signinBtn}> 
                            <Text style={Styles.SignText}>Sign up</Text> 
                         
                        </LinearGradient>    
                    </TouchableOpacity>  

                    <TouchableOpacity
                        onPress={()=> navigation.navigate("SigninScreen")}
                        style={[Styles.SignupBtn]}
                    >
                        <Text style={[Styles.textSignup], {color:"#4dc2f8"}}>Sign in</Text>
                    </TouchableOpacity>
                </View>

            </animatable.View>
        </View>
    )
}

export default signupComponent
