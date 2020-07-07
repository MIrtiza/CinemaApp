import React, { useRef} from 'react'
import { View, Text, ScrollView, Image, Animated } from 'react-native'
import Styles from '../assets/styles/Style'
import * as animatable from 'react-native-animatable'

const Home = () => {
    const scrollA = useRef(new Animated.Value(0)).current;
    return (
        <View>
            <Animated.ScrollView
                onScroll={Animated.event([
                    {nativeEvent:{contentOffset:{y: scrollA}}}
                ],{useNativeDriver: true})}
                scrollEventThrottle={16}
            >
                <View style={[Styles.homeHeader]}>
                    <Animated.Image source={require('../assets/banner.jpg')}
                        style={[Styles.homeBanner(scrollA)]}
                     />
                </View>
                <View style={[Styles.homeFooter]}>
                        <Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </Text>
                </View>
            </Animated.ScrollView>
            
        </View>
    )
}

export default Home
