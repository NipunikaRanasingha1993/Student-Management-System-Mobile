import { useState } from "react";
import { View , Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import instance from "../services/AxiosOrder/AxiosOrder";

export default function StudentReg({ navigation }){

    const [stdName,setStdName] = useState('');
    const [stdAge,setStdAge] = useState('');
    const [stdAddress,setStdAddress] = useState('');
    const [stdContact,setStdContact] = useState('');

    const stdRegister = () =>{
        instance.post('/student/save', {
            student_name: stdName,
            student_age: stdAge,
            student_address: stdAddress,
            student_contact: stdContact
          })
          .then(function (response) {
            console.log(response);
            alert('Student Save Successful....')
            navigation.navigate('StudentAction')

          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Student Register</Text>
            <TextInput style={styles.input} placeholder="Enter Student Name" onChangeText={(val)=>setStdName(val)}/>
            <TextInput style={styles.input} placeholder="Enter Student Age" onChangeText={(val)=>setStdAge(val)}/>
            <TextInput style={styles.input} placeholder="Enter Student Address" onChangeText={(val)=>setStdAddress(val)}/>
            <TextInput style={styles.input} placeholder="Enter Student Contact" onChangeText={(val)=>setStdContact(val)}/>
            <TouchableOpacity onPress={stdRegister} style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        borderWidth:1,
        width:'70%',
        borderRadius:100,
        marginBottom:10,
        fontSize:15
    },
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title : {
        color:'blue',
        fontSize:30,
        fontWeight:"500"

    },
    btn : {
        backgroundColor:"green",
        padding:10,
        width:'30%',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    btnText : {
        color:'white',
        fontSize:15
    }

})