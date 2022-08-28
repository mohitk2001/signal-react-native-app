import { View, Text, Image } from "react-native";
import React,{useState} from "react";
import styles from "./Style";
import { StatusBar } from "expo-status-bar";
import { Button,Input} from "@rneui/themed";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <View style={styles.Login}>
      <StatusBar style="light" />
      
      <Image
        source={{uri:"https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg"}}
      style={{height:200,width:200,alignSelf:"center",borderRadius:50}}
      />
      <View style={styles.App_inputs}>
        <Input placeholder="Email"/>
        <Input placeholder="Password" securityTextEntry/>
      </View>
      <Button title="Login" />
      <Button type="outline" title="Register" />
    </View>
  );
};

export default Login;
