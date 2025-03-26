import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {useState} from "react";

export default function HomeScreen() {

  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
      <TextInput placeholder={'이름을 적어주세요'}
                 value={text}
                 onChangeText={(value) => setText(value)}
                 style={styles.input}
      />
      <Button title="확인" onPress={() => console.log("Hello")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    fontWeight: 500,
  }
});