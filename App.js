import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import NavBar from './components/NavBar';
import Recommended from './components/Recommended';
import AdBanner from './components/AdBanner';
import DealOfTheDay from './components/DealOfTheDay';
import ForYou from './components/ForYou';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <ScrollView style={styles.BottomNav}>
      <NavBar />
      <Recommended/>
      <AdBanner />
      <DealOfTheDay/>
      <ForYou />
      <BottomNav />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    position:'relative'
  }
});
