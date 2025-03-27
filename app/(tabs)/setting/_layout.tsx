import {Stack} from "expo-router";

const SettingLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#fff'
      }
    }}>
      <Stack.Screen name='index'
                    options={{
                      title: '설정',
                      headerShown: false,
                    }}
      />
    </Stack>
  );
}

export default SettingLayout;