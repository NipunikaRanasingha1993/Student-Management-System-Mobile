import * as React from 'react';
import { Text, View, FlatList  } from 'react-native';
import { Button, Card } from 'react-native-paper';
import instance from '../services/AxiosOrder/AxiosOrder';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function StudentAction(){

    const [data,setData]= useState([]);

    useEffect(()=>{
        getData();

    } , []);

    
     const getData = () =>{

        instance.get('/student/getAll')
        .then(function (response) {
            // AsyncStorage.getItem('stmToken' , response.data.token);
            // handle success
           
            const array = []
            response.data.forEach(val =>{
                array.push({
                    id:val.id,
                    student_name:val.student_name,
                    student_age:val.student_age,
                    student_address:val.student_address,
                    student_contact:val.student_contact
                })

            })
            setData(array)
            console.log(response.data);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
        })

     }

     const Card1 = ({id , name , age , address , contact}) =>{
        <Card>
    <Card.Title left={id} />
    <Card.Content>
    <Text variant="titleLarge">{name}</Text>
    <Text variant="titleLarge">{age}</Text>
      <Text variant="titleLarge">{address}</Text>
      <Text variant="bodyMedium">{contact}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>

    }


    return(
        <View>

            {/* <ScrollView>   */}
                {/* we do not need any ScrollView while using FlatList */}
            <FlatList
        data={data}
        renderItem={({item})=>(
            <Card1
            id={item.id}
            name={item.student_name}
            age={item.student_age}
            address={item.student_address}
            contact={item.student_contact}
            />
        )}
        keyExtractor={item => item.id}
        
      />
            
{/* 
            </ScrollView> */}
            
        </View>
        
    )
}

