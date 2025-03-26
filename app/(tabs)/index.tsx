import {
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container1}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </View>
      <View style={styles.container2}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </View>
      <View style={styles.container3}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </View>
    </SafeAreaView>
  );
}


function Box() {
  return <View style={styles.box} />;
}


const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between"
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