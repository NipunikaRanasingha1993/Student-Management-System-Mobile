import { useState } from "react";
import { View ,Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import instance from "../services/AxiosOrder/AxiosOrder.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function UserLog({ navigation }){

    const [userMail,setUserMail] = useState('Daya123@gmail.com');
    const [userPassword,setUserPassword] = useState('Daya');


    const clickLogin = async () =>{
        const response = await instance.post('/login', {
            email: userMail,
            password: userPassword,
          })
          const data = response.data;
          await AsyncStorage.setItem('stmToken',data.token)
          const token = await AsyncStorage.getItem('stmToken')
          console.log(token);
          navigation.navigate('Drawer')

        //   .then(function (response) {
        //     console.log(response.data.token);
        //     AsyncStorage.setItem('stmToken' , response.data.token);
        //     navigation.navigate('Drawer')
        //     // localStorage.setItem('stdToken' , response.data.token)
        //     // window.location.reload();
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        
        // instance.post('/login', {
        //     email: userMail,
        //     password: userPassword,
        //   })
          
        // //   const data = response.data;
        // //   await AsyncStorage.setItem('stmToken',data.token)
        // //   const token = await AsyncStorage.getItem('stmToken')
        // //   if(token!=null){
        // //     console.log(token);
        // //     navigation.navigate('Drawer')
        // //   }
        // //   else{
        // //     console.log('error....');
        // //   }
        //   .then(function (response) {
        //     AsyncStorage.setItem('stmToken' , response.data.token);
        //     console.log(response.data.token);
        //     console.log('User Login Success....');
        //     navigation.navigate('Drawer')
            

        //     // localStorage.setItem('stdToken' , response.data.token)
        //     // window.location.reload();
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    const backRegister = () =>{
        navigation.navigate('UserRegister')

    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>User Login</Text>
            <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(val)=>setUserMail(val)}/>
            <TextInput style={styles.input} placeholder="Enter Password" onChangeText={(val)=>setUserPassword(val)}/>
            <TouchableOpacity onPress={clickLogin} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={backRegister} style={styles.btn1}>
                <Text style={styles.btnText}>Back To Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        width:'70%',
        borderRadius:100,
        marginBottom:10,
        fontSize:15
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn: {
        backgroundColor:'purple',
        padding:10,
        width:'30%',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    btnText: {
        color:'white',
        fontSize:15
    },
    btn1: {
        backgroundColor:'green',
        padding:10,
        width:'40%',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10

    },
    title: {
        color:'blue',
        fontWeight:'bold',
        fontSize:35
    }

})