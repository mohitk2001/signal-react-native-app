import { View, Text,KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import styles from './style'
import { Button, Input } from "@rneui/themed";
import {auth } from "../../firebase.js"
const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [URL, setURL] = useState("")
    const Create=()=>{

    }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.Signup_container}>
      <Text style={{fontSize:25}} h2>Create Signal Account</Text>
      <View style={styles.Input_container}>
        <Input placeholder='Name' onChangeText={(text)=>setName(text)}/>
        <Input placeholder='Email' onChangeText={(text)=>setEmail(text)}/>
        <Input placeholder='Password'onChangeText={(text)=>setPassword(text)}
        secureTextEntry
        />
        <Input placeholder='Profile Pic (Url) Optional'onChangeText={(text)=>setURL(text)}/>
      </View>
      <Button title="Create" containerStyle={styles.Create_Button} onPress={()=>Create()}/>
    </KeyboardAvoidingView>
  )
}

export default Signup