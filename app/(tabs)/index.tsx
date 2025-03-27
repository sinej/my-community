import { router } from 'expo-router';
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import CustomButton from "@/components/customButton";

export default function HomeScreen() {

  return (
    <SafeAreaView>
      <Pressable>
        <Text>홈스크린</Text>
        <CustomButton label='버튼' onPress={() => {}} />
      </Pressable>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
});