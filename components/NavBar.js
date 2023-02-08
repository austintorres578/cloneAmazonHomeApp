import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from "react-native"

export default function NavBar(){

    let placeholderText = "Search Amazon"

    return(
        <View>
            <View style={styles.upperNav}>
                <View style={styles.searchBar}>
                    <Image style={styles.searchIcon} source={require("../images/searchIcon.jpg")}/>
                    <TextInput placeholder={placeholderText}></TextInput>
                    <Image style={styles.pictureIcon} source={require('../images/pictureIcon.jpg')}/>
                    <Image style={styles.micIcon} source={require('../images/micIcon.jpg')}/>
                </View>
            </View>
            <View>
                <ScrollView horizontal={true} contentContainerStyle={{justifyContent:"space-evenly"}} style={styles.midNav}>
                    <Text style={styles.midNavText}>Groceries</Text>
                    <Text style={styles.midNavText}>Pharmacy</Text>
                    <Text style={styles.midNavText}>In-Store Code</Text>
                    <Text style={styles.midNavText}>Alexa Lists</Text>
                    <Text style={styles.midNavText}>Prime</Text>
                    <Text style={styles.midNavText}>Video</Text>
                    <Text style={styles.midNavText}>Music</Text>
                </ScrollView>
            </View>
            <View>
                <View style={styles.lowerNav}>
                    <Image style={styles.locationIcon} source={require('../images/locationIcon.jpg')}/>
                    <Text>Deliver to Austin - Union 07083</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upperNav:{
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#84c7d9",
        height:90,
        paddingTop:40
    },
    midNav:{
        flexDirection:'row',
        backgroundColor:"#84c7d9",
        overflowX:'scroll',
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:10

    },
    midNavText:{
        marginRight:30,
        fontSize:16,
    },
    lowerNav:{
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#b9dce6",
        paddingLeft:10
    },
    searchBar:{
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        height: 40,
        width: '90%',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
    },
    locationIcon:{
        height:22,
        width:20,
        marginRight:5
    },
    searchIcon:{
        height:20,
        width:20,
        borderRadius:5
    },
    pictureIcon:{
        height:20,
        width:20
    },
    micIcon:{
        height:20,
        width:20,
        borderRadius:5
    }
  });
  