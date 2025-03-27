import { router } from 'expo-router';
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

export default function MyScreen() {

  return (
    <SafeAreaView style={styles.parent}>
      <Pressable onPress={() => router.push('/')}>
        <Text>My</Text>
      </Pressable>
    </SafeAreaView>
  );
}


function Box() {
  return <View style={styles.box} />;
}


const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'space-between'
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 2,
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 2,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});