import React, { useRef, useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Animated, Dimensions, TouchableOpacity,
    ImageBackground, FlatList, StatusBar, StyleSheet, TextInput } from 'react-native'
import Styles from '../assets/styles/Style'
import * as animatable from 'react-native-animatable'
import Carousel from 'react-native-snap-carousel'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import Seat from '../components/Seat'
import RNPickerSelect from 'react-native-picker-select'




const BookSeats = ({ navigation }) => {   
   const RowRight = [
      {
          id: 1,
          row: 1,
          colum: 1
      },
      {
          id:2,
          row:1,
          column: 2
      },
      {
          id:3,
          row:2,
          column: 1
      },
      {
          id:4,
          row:2,
          column: 2
      }
  ]  
    const [seat, setSeat] = useState('grey')
    
    const source = navigation.getParam('imageSource')

    const seat1 = () =>{
     if(seat === 'grey') setSeat('red'); else setSeat('grey');  
    }
  return (
     <ScrollView style={{flex:1}}>
         <StatusBar barStyle="light-content"  />
          <View style={[Styles.seatContentContainer]}>
                <View>
                    <View style={[Styles.trailerContainer]}>
                        <Image 
                        source={{uri: source}} 
                        style={[Styles.headerVideo]}
                        />
                        <TouchableOpacity style={[Styles.playBtn]}>
                            <FontAwesome 
                                name="play"
                                size={22}
                                color="#021d94"
                                style={{
                                    marginLeft: 4
                                }}
                            />
                        </TouchableOpacity>

                        
                    </View>

                    <View style={[Styles.seatContainer]}>

                       <View style={[Styles.seatRowRight]}>
                        {
                           RowRight.map((item ,index)=><Seat  key={index} seatData={item}/>)
                        }  
                        </View>


                       <View style={[Styles.seatcenter]}>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>  
                       </View>


                       <View style={[Styles.seatRowLeft]}>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                           <Seat/>
                       </View>
                      
                    </View>

                    <View style={[Styles.FilmDetail]}>
                    <RNPickerSelect
                           style={{
                              ...pickerSelectStyles,
                              iconContainer: {
                                 top: 13,
                                 right: 12,
                                 },
                              }}
                              onValueChange={(value) => console.log(value)}
                              placeholder={{
                                          label: 'Available Dates',
                                          value: null,
                                    }}
                              items={[
                                 { label: 'Football', value: 'football' },
                                 { label: 'Baseball', value: 'baseball' },
                                 { label: 'Hockey', value: 'hockey' },
                              ]}
                              Icon={() => {
                              return <MaterialIcons
                                 name="keyboard-arrow-down"
                                 size={22} color="white" />;
                              }}
                        />

                        <Text>11:20 PM</Text>
                    </View>
                </View>

                <TouchableOpacity 
                            
                            style={[Styles.generalBtn],{marginBottom: 20}}>
                                <LinearGradient colors={['#ED213A', '#93291E']} 
                                style={Styles.generalGrad}> 
                                    <Text 
                                        
                                    style={Styles.generalText} >
                                        Pay 
                                    </Text> 
                                   
                                </LinearGradient>
                            </TouchableOpacity> 
          </View>
     </ScrollView>
  );
}

const pickerSelectStyles = StyleSheet.create({
   inputIOS: {
     fontSize: 16,
     paddingVertical: 12,
     paddingHorizontal: 10,
     borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 4,
     color: 'black',
     paddingRight: 30, // to ensure the text is never behind the icon
   },
   inputAndroid: {
     fontSize: 16,
     paddingHorizontal: 10,
     paddingVertical: 8,
     borderWidth: 0.5,
     borderColor: 'purple',
     borderRadius: 8,
     color: 'black',
     paddingRight: 30, // to ensure the text is never behind the icon
   },
 });
 
export default BookSeats;