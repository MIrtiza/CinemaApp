import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get("screen")
const height_logo = height * 0.7 * 0.4;

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#05375a'
    },
    header:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30

    },
    logo:{
        width: height_logo,
        height: height_logo
    },
    title:{
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30
    },
    textSmall:{
        color:"grey",
        marginTop: 5
    },
    buttonSplash:{
        alignItems:"flex-end",
        marginTop: 30
    },
    splashBtn:{
        width: 150,
        height: 40,
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    SignText:{
        color: 'white',
        fontWeight: 'bold',
        paddingRight: 15
    },
    headerSign:{
        flex: 1,
       justifyContent: 'flex-end',
       paddingHorizontal: 20,
       paddingBottom: 20
    },
    footerSign:{
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    textWelcome:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    labels:{
        color: '#05375a',
        fontSize: 18
    },
    action:{
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginTop: 10,
        flexDirection: 'row'
    },
    input:{
        flex: 1,
        paddingLeft: 10,
        color: '#05375a'
    },
    forgotText:{
        marginTop: 15,
        color:"#009bd1"
    },
    SignButtonWrapper:{
        alignItems: 'center',
        marginTop: 50
    },
    signinBtn:{
        width: "100%",
        height: 50,
        justifyContent: 'center',
      
        alignItems: 'center',
        borderRadius: 10,
       
    },
    SignupBtn:{
        marginTop: 15,
        borderColor: "#4dc2f8",
        borderWidth: 1,
        width: "100%",
        height: 50,
        justifyContent: 'center',
      
        alignItems: 'center',
        borderRadius: 10,
        
    },
    terms:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    terms_color:{
        color: 'gray'
    },
    homeHeader:{
        flex: 1,
        
    },
    homeFooter:{
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    homeBanner: scrollA=>({
        
       width: '100%',
       height: 300,
       transform: [
           {
                translateY: scrollA.interpolate({
                    inputRange: [-300, 0, 300, 300+1],
                    outputRange: [300 / 2, 0, 300 * 0.75, 300 * 0.75],
                })
           },
            {
                scale: scrollA.interpolate({
                    inputRange: [-300, 0, 300, 300+1],
                    outputRange: [2, 1, 0.5, 0.5]
                })
            }
         ]
       
      
    }),
    carouselContentContainer:{
        flex: 1,
        backgroundColor: '#000',
        height: 720,
        paddingHorizontal: 14
    },
    imageBg:{
        flex:1,
        width: null,
        height: null,
        opacity: 1,
        justifyContent: 'flex-start'
        
    },
    searchBoxContainer:{
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 4,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 35
    },
    searchBox:{
        padding: 12,
        paddingLeft: 20,
        fontSize: 16
    },
    searchIcon:{
        position:"absolute",
        right: 20,
        top: 14
    },
    carouselContainerView:{
        width: '100%',
        height: 500,
        marginTop: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        
    },
    CarouselBtn:{
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: 200
    },
    Carousel:{
        flex: 1,
        overflow: 'hidden',
        
    },
    carouselImage:{
        width: 180,
        height: 280,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
      
    },
    carouselText:{
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold',
        color: "white",
        padding: 14
    },
    carouselIcon:{
        position: 'absolute',
        top: 15,
        right: 15
    },
    movieInfoContainer:{
        flexDirection: 'column',
        // marginTop: 16,
        // justifyContent: 'center',
        alignItems: 'center',
        // width: Dimensions.get('window').width -14,
        width: 200,
        height: 400,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    movieName:{
        
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6
    },
    releasedDate:{
       
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14
    },
    buyBtnContainer:{
      position:"absolute",
      bottom: 0,
       justifyContent:"center",
     
     
       
        
    },
    generalBtn:{
        width: Dimensions.get('window').width,
    },
    generalGrad:{
        width: 200,
        alignSelf:"center",
        height: 40,
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#fff"
        
    },
    generalText:{
        color: "white",
        fontWeight: 'bold',
        fontSize: 14
    },
    seatContentContainer:{
        flex: 1,
        backgroundColor: '#000',
        height: Dimensions.get('window').height,
        backgroundColor: '#000', 
        justifyContent:"space-between", flexDirection:"column"
    
        
    },
    trailerContainer:{
        
        width: "100%",
        height: 250,
        position:"relative"
    },
    headerVideo:{
        
        width: "100%",
        height: 250
    },
    playBtn:{
        position: "absolute",
        top: "40%",
        right: "40%",
        backgroundColor:"#212121",
        padding: 18,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: "center",
        elevation: 10,
        borderWidth: 4,
        borderColor: 'rgba(2,173,148,0.2)'
    },
   
    seatContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        marginVertical: 25,
        width :"100%",
        borderWidth: 1,
        borderColor: "white"
    },
    seatcenter:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "60%"
    },
    seatRowRight:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent:"center",
        width: "20%"
    },
    seatRowLeft:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent:"center",
        width: "20%"
    },
    seatIcon:{
        paddingHorizontal: 2
    },
    FilmDetail:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
     
        marginHorizontal: 25,
        marginVertical: 25,
        width :"100%"
    }
})

export default Styles;