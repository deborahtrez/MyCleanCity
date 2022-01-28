import * as React from 'react';
import { useState } from "react";
import { Stylesheet, View, Alert, Text, Platform, TextInput, ListView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppText from './app/components/AppText';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createAppContainer } from 'react-navigation';



function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to My Clean City</Text>

 {/* Add a menu item here */}

      <Button
        onPress={() => navigation.navigate('RequestForService')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
        title="Request For Service"
      />

      <Button
        onPress={() => navigation.navigate('InquiryAboutService')}
        style={{ backgroundColor: 'plum', padding: 10 }}
        title="Inquiry About Service"
      />

      <Button
        onPress={() => navigation.navigate('Feedback')}
        style={{ backgroundColor: 'plum', padding: 10 }}
        title="Feedback"
      />

      <Button
        onPress={() => navigation.navigate('FAQs')}
        style={{ backgroundColor: 'plum', padding: 10 }}
        title="Frequently Asked Questions"
      />

      <Button
        onPress={() => navigation.navigate('Contacts')}
        style={{ backgroundColor: 'plum', padding: 10 }}
        title="Contacts"
      />

      <Button
        onPress={() => navigation.navigate('ReportIncident')}
        style={{ backgroundColor: 'plum', padding: 10 }}
        title="Report an Incident"
      />

    </View>
  );
}

// Add a function here

function RequestForService({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Request For a Service</Text>

      <Text>Service Category</Text>
      <TextInput 
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}
        placeholder="-- service category --"/> 

      <Text> Service </Text>
      <TextInput 
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}
        placeholder="-- select service category --"/> 

      <Text> Incident Type 
      </Text>
      <TextInput 
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}
        placeholder="-- service incident type --"/>    
  {/* 
      <Formik
        initialValues={{category: '', service: ''}}
        onSubmit={values => console.log(values)}
        >
        { ({handleChange, handleSubmit}) => (
          // we have two input fields and a button
        ) }
      </Formik> */}

    </View>
  );
}

function InquiryAboutService() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Our Inquiry About Service</Text>
    </View>
  );
}

function Feedback() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Give us some feedback</Text>
    </View>
  );
}

function FAQs() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Frequently asked Questions</Text>
    </View>
  );
}

function Contacts() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contacts</Text>
    </View>
  );
}

function ReportIncident() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Report an Incident</Text>
    </View>
  );
}

const Stack = createStackNavigator();

// Add a stack screen here

function App() {

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RequestForService" component={RequestForService} />
        <Stack.Screen name="InquiryAboutService" component={InquiryAboutService} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="ReportIncident" component={ReportIncident} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
