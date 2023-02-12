import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from "react-native"

export default function ForYou(){
    return(
        <View style={styles.forYouContainer}>
            <View>
                <Text style={styles.forYouHeader}>For You</Text>
            </View>
            <View>
                <View style={styles.forYouHeaderBlockRow}>
                    <View style={styles.forYouHeaderBlock}>
                        <Image resizeMode="contain" style={styles.forYouBlockImage} source={require('../images/imageOne.jpg')}/>
                        <Text>TECKE 11X T18 Sold</Text>
                        <Text>$17.09</Text>
                    </View>
                    <View style={styles.forYouHeaderBlock}>
                        <Image resizeMode="contain" style={styles.forYouBlockImage} source={require('../images/imageTwo.jpg')}/>
                        <Text>22 Gauge Wire Solid</Text>
                        <Text>$8.99</Text>
                    </View>
                </View>
                <View style={styles.forYouHeaderBlockRow}>
                    <View style={styles.forYouHeaderBlock}>
                        <Image resizeMode="contain" style={styles.forYouBlockImage} source={require('../images/imageFour.jpg')}/>
                        <Text>ELEGOO 32 Pc Dou</Text>
                        <Text>$11.99</Text>
                    </View>
                    <View style={styles.forYouHeaderBlock}>
                        <Image resizeMode="contain" style={styles.forYouBlockImage} source={require('../images/imageFive.jpg')}/>
                        <Text>3 Pieces No Clean Sol</Text>
                        <Text>$10.49</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    forYouContainer:{
        padding:10
    },
    forYouHeader:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
    forYouHeaderBlockRow:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    forYouHeaderBlock:{
        width:150,
        marginBottom:10,
    },
    forYouBlockImage:{
        marginLeft:'auto',
        marginRight:'auto',
        height:145,
        width:145
    }
});
