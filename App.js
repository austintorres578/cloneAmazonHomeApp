import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import NavBar from './components/NavBar';
import Recommended from './components/Recommended';
import AdBanner from './components/AdBanner';
import DealOfTheDay from './components/DealOfTheDay';

export default function App() {
  return (
    <ScrollView>
      <NavBar />
      <Recommended/>
      <AdBanner />
      <DealOfTheDay/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
