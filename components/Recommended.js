import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from "react-native"

export default function Recommended(){
    return(
        <View>
            <View>
                <Image resizeMode="contain" style={styles.alexaEarbuds} source={require('../images/alexaEarbuds.jpg')}/>
            </View>
            <ScrollView style={styles.recommendedScroller} horizontal={true}>
                <View style={styles.recommendedBlocks}>
                    <Text style={styles.recommendedBlockText}>Keep Shopping For</Text>
                    <Image resizeMode="contain" style={styles.recommendedBlockImage} source={require('../images/purse.webp')}/>
                </View>
                <View style={styles.recommendedBlocks}>
                    <Text style={styles.recommendedBlockText}>Pick up where you left off</Text>
                    <Image resizeMode="contain" style={styles.recommendedBlockImage} source={require('../images/ps5.webp')}/>
                </View>
                <View style={styles.recommendedBlocks}>
                    <Text style={styles.recommendedBlockText}>Continue shopping for</Text>
                    <Image resizeMode="contain" style={styles.recommendedBlockImage} source={require('../images/Nintendo-Switch-Review.jpg')}/>
                </View>
                <View style={styles.recommendedBlocks}>
                    <Text style={styles.recommendedBlockText}>You might be looking for</Text>
                    <Image resizeMode="contain" style={styles.recommendedBlockImage} source={require('../images/rosemaryOil.jpeg')}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  alexaEarbuds:{
    height:229,
    width:"auto"
  },
  recommendedScroller:{
    paddingTop:5,
    paddingBottom:10,
    paddingRight:5,
    paddingLeft:5
  },
  recommendedBlocks:{
    borderWidth:.25,
    borderRadius:5,
    height:160,
    width:130,
    marginRight:10,

  },
  recommendedBlockText:{
    marginBottom:15,
    paddingLeft:5,
    paddingRight: 5
  },
  recommendedBlockImage:{
    height:110,
    width:110,
    marginLeft:'auto',
    marginRight:'auto'

  },
  
});