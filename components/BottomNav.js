import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from "react-native"

export default function BottomNav(){
    return(
        <View style={styles.bottomNavContainer}>
            <View>
                <Image style={styles.bottomNavIcons} source={require("../images/homeIcon.jpg")}/>
            </View>
            <View>
                <Image style={styles.bottomNavIcons} source={require('../images/accountIcon.jpg')}/>
            </View>
            <View>
                <Image style={styles.bottomNavIcons} source={require('../images/cartIcon.jpg')}/>
            </View>
            <View>
                <Image style={styles.bottomNavIcons} source={require('../images/bottomNavHam.jpg')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderTopWidth:1,
        borderColor:'lightgray'
    },
    bottomNavIcons:{
        height:25,
        width:25
    }
  });
  
