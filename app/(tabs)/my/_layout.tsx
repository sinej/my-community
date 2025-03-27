import {Stack} from "expo-router";

const MyLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#fff'
      }
    }}>
      <Stack.Screen name='index'
                    options={{
                      title: '내 프로필',
                      headerShown: false,
                    }}
      />
    </Stack>
  );
}

export default MyLayout;