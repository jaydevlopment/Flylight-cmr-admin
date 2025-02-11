// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Contacts,
    AddContact,
    Notification,
    Edit_Contact,
    // packegeTopups,
    // orderHistory,
} from '../../screens/index'
import navigationStrings from '../../constant/navigationStrings'
const Stack = createNativeStackNavigator();
function ContactStack() {
    return (
        // <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false,animation: 'none' }}>
            <Stack.Screen name={navigationStrings.Contacts} component={Contacts} />
            {/* <Stack.Screen name="AddContact" component={AddContact} /> */}
            {/* <Stack.Screen name="Notification" component={Notification} /> */}
            <Stack.Screen name={navigationStrings.Edit_Contact} component={Edit_Contact} />
            {/* <Stack.Screen name="orderHistory" component={orderHistory} />
                <Stack.Screen name="packegeTopups" component={packegeTopups} />
                <Stack.Screen name="Notification" component={Notification} /> */}
        </Stack.Navigator>
        // </NavigationContainer>
    );
}

export default ContactStack;