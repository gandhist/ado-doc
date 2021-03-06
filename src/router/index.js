import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, Splash, Login, Register, UploadPhoto, Doctor, Message, Hospital, ChooseDoctor, Chatting, UserProfile, UpdateProfile, DoctorProfile } from "../pages";
import { BottomNavigator } from "../components";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen key="Doctors" name="Doctors" component={Doctor} />
            <Tab.Screen key="Messages" name="Messages" component={Message} />
            <Tab.Screen key="Hospitals" name="Hospitals" component={Hospital} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            {/* main App */}
            <Stack.Screen name="MainApp" component={mainApp} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseDoctor" component={ChooseDoctor} options={{ headerShown: false }} />
            <Stack.Screen name="Chatting" component={Chatting} options={{ headerShown: false }} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


export default Router;