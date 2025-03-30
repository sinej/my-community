import {SafeAreaView, StyleSheet, View, Image} from "react-native";

interface AuthScreenType {

};

const AuthScreen = (props: AuthScreenType) => {
    const {} = props;
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
          </View>
        </SafeAreaView>
    );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 112,
    height: 112,
  }
})