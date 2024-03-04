import { useState } from "react";
import { Text ,TextInput,View ,TouchableOpacity, StyleSheet} from "react-native";
import instance from "../services/AxiosOrder/AxiosOrder";


export default function UserReg({ navigation }){

    // const [userName,setUserName] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Register = () =>{
        

        instance.post('/register', {
            name: name,
            email: email,
            password: password,
    
          })
          .then(function (response) {
            console.log('Register Successful...');
            navigation.navigate('UserLogin');
          })
          .catch(function (error) {
            console.log('Please Try Again.....');
          });

        

    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>User Register</Text>
            <TextInput style={styles.input} placeholder="enter Name" onChangeText={(val)=>setName(val)}/>
            {/* <TextInput style={{marginBottom:5}} label="Name" onChangeText={(val)=>setUserName(val)}/> */}
            <TextInput style={styles.input} placeholder="enter Email" onChangeText={(val)=>setEmail(val)}/>
            <TextInput style={styles.input} placeholder="enter Password" onChangeText={(val)=>setPassword(val)}/>
            <TouchableOpacity onPress={Register} style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>

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
        backgroundColor:'green',
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
    title: {
        color:'blue',
        fontWeight:'bold',
        fontSize:35
    }
})