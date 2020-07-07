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

const TodayShow = ( {navigation} ) => {
    const [background, setBackground] = useState(
        { 
           uri: 'https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
           title: 'Black Widow',
           released: '6 November 2020',
           desc: 'A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.',
          
      }
      );

    const [gallery, setgallery] = useState([
        { 
           image: 'https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
           title: 'Black Widow',
           released: '6 November 2020',
           desc: 'A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.',
           key: '1' 
      },
      { 
        image: 'https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg',
        title: 'Bloodshot',
        released: '13 March 2020',
        desc: 'Ray Garrison, a slain soldier, is re-animated with superpowers.',
        key: '2' 
      },
      { 
        image: 'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        title: 'Extraction',
        released: '24 April 2020',
        desc: 'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he is enlisted to rescue the kidnapped son of an imprisoned international crime lord.',
        key: '3' 
      },
      { 
        image: 'https://m.media-amazon.com/images/M/MV5BMWNkOWNlNmEtYmRhZC00ZGRjLWIwZjgtMTJiNDhhNTg2YjkzXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SY1000_CR0,0,662,1000_AL_.jpg',
        title: 'Lost Girls',
        released: '13 March 2020',
        desc: 'When Mari Gilberts daughter disappears, police inaction drives her own investigation into the gated Long Island community where Shannan was last seen. Her search brings attention to over a dozen murdered sex workers.',
        key: '4' 
      }
      ]);
    const carouselRef = useRef(null)
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const renderItem = ({item, index}) =>{
        return (
            <View>
                <TouchableOpacity
                    style={[Styles.CarouselBtn]}
                    onPress={()=>{
                        {/* carouselRef.current.scrollToIndex(index) */}
                        setBackground({
                            uri: item.image,
                            title: item.title,
                            released: item.released,
                            desc: item.desc
                        })
                    }}
                >
                    <Image source={{uri: item.image}} 
                    style={[Styles.carouselImage]} />
                    <Text  style={[Styles.carouselText]}>
                       
                        {item.title}
                    </Text>
                    <MaterialIcons 
                    name="library-add" size={30} color="white" 
                    style={[Styles.carouselIcon]}
                    />
                </TouchableOpacity>

                <View style={[Styles.movieInfoContainer]}>
                    <View style={{justifyContent: "center"}}>
                        <Text style={[Styles.movieName]}> {item.title} </Text>
                        <Text style={[Styles.releasedDate]}> {item.released} </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={[Styles.carouselContentContainer]}>
                <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
                    <ImageBackground
                        source={{uri:background.uri}}
                        style={[Styles.imageBg]}
                        blurRadius={10}
                    >
                        <View style={[Styles.searchBoxContainer]}>
                            <TextInput
                                placeholder="Search Movies"
                                placeholderTextColor="#666"
                                style={[Styles.searchBox]}
                            />
                            <Feather name="search" size={22} color="#666" 
                                style={[Styles.searchIcon]}
                            />
                        </View>
                        <Text 
                        style={{color: 'white',fontSize: 34, alignItems:"center",justifyContent: "center",
                        fontWeight: 'bold',marginLeft: 20, marginVertical: 20, alignSelf: "center"}}>
                        {background.title}
                        </Text>
                    
                        <View style={[Styles.carouselContainerView]}>
                            <Carousel 
                                style={[Styles.Carousel]}
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={200}
                                sliderWidth={ screenWidth - 20 }
                                separatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                                loop={true}
                                ref={(carousel) => { this.carousel = carousel; }}
                                onSnapToItem={(index) => {
                                    console.log('snap', index, this.carousel.currentIndex);
                                    {/* this.forceUpdate() */}
                                }}
                            />
                        </View>

                        <View style={[Styles.buyBtnContainer]}>
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate("BookSeats",{imageSource:background.uri})}
                            image={background.title}
                            style={[Styles.generalBtn]}>
                                <LinearGradient colors={['#001000', '#000000']} 
                                style={Styles.generalGrad}> 
                                    <Text 
                                        
                                    style={Styles.generalText} >
                                        Buy Ticket
                                    </Text> 
                                   
                                </LinearGradient>
                            </TouchableOpacity> 
                        </View>

                       
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    )
}

export default TodayShow
