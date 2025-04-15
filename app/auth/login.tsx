import {SafeAreaView, StyleSheet, View, Image} from "react-native";
import CustomButton from "@/components/customButton";
import {Link} from "expo-router";

interface LoginScreenType {

};

const LoginScreen = (props: LoginScreenType) => {
  const {} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label='이메일로 로그인' />
        <Link href='/login/auth' style={styles.signText}>이메일로 가입하기</Link>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  logo: {
    width: 112,
    height: 112,
  },
  buttonContainer: {
    paddingHorizontal: 32,
    flex: 1,
  },
  signText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
})