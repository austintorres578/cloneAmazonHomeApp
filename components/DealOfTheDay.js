import {StyleSheet,View,Text,Button,Image,TouchableOpacity,TextInput,ScrollView,} from "react-native"

export default function DealOfTheDay(){
    return(
        <View style={styles.dealOfTheDayContainer}>
            <View style={styles.dealOfTheDayHeader}>
                <Text style={styles.dealOfTheDayText}>Deal of the Day</Text>
            </View>
            <View style={styles.productContainer}>
                <Image resizeMode="contain" style={styles.productImage} source={require('../images/amazonTablet.jpg')}/>
            </View>
            <View>
                <View style={styles.topDeal}>
                    <Text style={styles.percentage}>39% off</Text>
                    <Text style={styles.topDealText}>Top Deal</Text>
                </View>
                <View style={styles.listPrice}>
                    <Text style={styles.salePrice}>$214.99</Text>
                    <Text style={styles.listPriceText}>List Price:</Text>
                    <Text style={styles.oldPrice}>$349.99</Text>
                </View>
                <Text>Samsung S6 Lite Tablets</Text>
                <Text style={styles.link}>See More Deals</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  dealOfTheDayContainer:{
    padding:10
  },
  dealOfTheDayHeader:{
    marginBottom:10
  },
  dealOfTheDayText:{
    fontWeight:'bold',
    fontSize:20
  },
  productContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:5
  },
  productImage:{
    height:250,
    width:250
  },
  topDeal:{
    flexDirection:'row'
  },
  topDealText:{
    fontWeight:'bold',
    color:'red'
  },
  listPrice:{
    flexDirection:'row'
  },
  link:{
    color:'blue'
  },
  percentage:{
    borderWidth:1,
    borderColor:'red',
    padding:1,
    color:'white',
    backgroundColor:'red',
    fontWeight:'bold',
    marginRight:5
  },
  salePrice:{
    marginRight:5,
    fontSize:16
  },
  listPriceText:{
    color:'gray',
    marginRight:5
  },
  oldPrice:{
    textDecorationLine:'line-through'
  }
});