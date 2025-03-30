import { Stack, Link } from "expo-router";
import Foundation from "@expo/vector-icons/Foundation"
import {colors} from "@/constants";
interface AuthLayoutType {

};

const AuthLayout = (props: AuthLayoutType) => {
  const {} = props;
  return (
    <Stack screenOptions={{
      headerTintColor: colors.BLACK,
      contentStyle: {
        backgroundColor: colors.WHITE
      }
    }}>
      <Stack.Screen name="index"
                    options={{
                      title: '로그인',
                      headerShown: true,
                      headerLeft: () => (
                        <Link href={"/"} replace>
                          <Foundation name="home" size={28} color="black"/>
                        </Link>
                      )
                    }}
      />
    </Stack>
  );
}

export default AuthLayout;