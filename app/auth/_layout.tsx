import {Stack} from "expo-router";

interface AuthLayoutType {

};

const AuthLayout = (props: AuthLayoutType) => {
  const {} = props;
  return (
    <Stack>
      <Stack.Screen nam="index"
                    options={{
                      title: '로그인',
                      headerShown: true,
                    }}
      />
    </Stack>
  );
}

export default AuthLayout;