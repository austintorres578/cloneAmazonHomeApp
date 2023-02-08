import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from "react-native"

export default function AdBanner(){
    return(
        <View style={styles.adBanner}>
            <View>
                <Image resizeMode="contain" style={styles.adBannerImage} source={require('../images/tozoIcon.jpg')}/>
            </View>
            <View>
                <Text style={styles.adBannerDetail}>You can now hear col...</Text>
                <View style={styles.adBannerPrice}>
                    <Text style={styles.price}>$999.99</Text>
                    <Image resizeMode="contain" style={styles.adBannerImage} source={require('../images/primeIcon.jpg')}/>
                </View>
            </View>
            <View>
                <Image resizeMode="contain" style={styles.adBannerImage} source={require('../images/earbuds.jpg')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    adBanner:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderWidth:.25,
        height:55,
        paddingLeft:5,
        paddingRight:5
    },
    adBannerImage:{
        height:45,
        width:45
    },
    adBannerPrice:{
        flexDirection:'row'
    },
    adBannerDetail:{
        paddingTop:3,
        fontWeight:'bold',
    },
    price:{
        marginRight:4,
        paddingTop:12,
        color:'#D21919',
        fontWeight:'bold'
    }
    
});