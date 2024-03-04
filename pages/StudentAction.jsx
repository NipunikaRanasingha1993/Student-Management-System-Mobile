import * as React from 'react';
import { Text, View, FlatList  } from 'react-native';
import { Button, Card , ActivityIndicator } from 'react-native-paper';
import instance from '../services/AxiosOrder/AxiosOrder';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function StudentAction(){

    const [data,setData]= useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getData();

    } , []);

    
     const getData = () =>{

        instance.get('/student/getAll')
        .then(function (response) {
            setData(response.data);
            console.log('data '+response.data);
            setLoading(false);
        })
        .catch(function(error){
            console.log(error);
            setLoading(true);
        })
            // AsyncStorage.getItem('stmToken' , response.data.token);
            // handle success
           
        //     const array = []
        //     response.data.forEach(val =>{
        //         array.push({
        //             id:val.id,
        //             student_name:val.student_name,
        //             student_age:val.student_age,
        //             student_address:val.student_address,
        //             student_contact:val.student_contact
        //         })

        //     })
        //     setData(array)
        //     console.log(response.data);
        //  })
        //  .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })

     }

     const Card1 = ({id , student_name , student_age , student_address , student_contact}) =>{

        <Card style={{margin:10}}>
    <Card.Title 
    title={id+'.'+student_name} 
    subtitle='student details....' />
    <Card.Content>
        <View>
      <Text variant="titleLarge">{student_age}</Text>
      <Text variant="titleLarge">{student_address}</Text>
      <Text variant="titleLarge">{student_contact}</Text>

    
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    </View>
    </Card.Content>
  </Card>

    }


    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {loading ? (
                <ActivityIndicator size="large" color='blue'/>
            ) : (<View>
                    <FlatList
                    data={data}
                    renderItem={({item})=> <Card1 id={item.id} student_name={item.student_name} student_age={item.student_age} student_address={item.student_address} student_contact={item.student_contact}/>}
                    keyExtractor={item => item.id}
            />
            </View>)}
            </View>
    )
}

 {/* <ScrollView>   */}
                {/* we do not need any ScrollView while using FlatList */}
            
            
{/* </ScrollView> */}

