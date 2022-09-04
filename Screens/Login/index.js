import { View, Text, Image,KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "@rneui/themed";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn=()=>{
    console.log(email);
    console.log(password)
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.Login}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
          borderRadius: 50,
        }}
      />
      <View style={styles.App_inputs}>
        <Input placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
        <Input placeholder="Password" secureTextEntry type="Password" 
        value={password}
        onChangeText={(text)=>setPassword(text)}
        />
      </View>
      <Button title="Login"  containerStyle={styles.Login_Buttons} onPress={()=>signIn()}/>
      <Button
        type="outline"
        title="Register"
        containerStyle={styles.Login_Buttons}
        onPress={() => navigation.navigate("Sign Up")}
      />
      <View style={{height:10}}></View>
    </KeyboardAvoidingView>
  );
};

export default Login;
