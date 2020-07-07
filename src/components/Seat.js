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

const Seat = ({value}) => {

    const [seat, setSeat] = useState('grey')

    const seat1 = () =>{
     if(seat === 'grey') setSeat('red'); else setSeat('grey');  
    }
  return (   
       
    <TouchableOpacity
    
    onPress={()=> seat1()}
        >
        { seat ? 
        <MaterialIcons
            name="event-seat"
            color={seat}
            size={24}
            style={[Styles.seatIcon]}
        />
        :
        <MaterialIcons
            name="event-seat"
            color={()=>setSeat('#aaa')}
            size={24}
            style={[Styles.seatIcon]}
        />
        }

  </TouchableOpacity>

        )
}

export default Seat;