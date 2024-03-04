import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const token = localStorage.getItem('stdToken')

let cachedToken = null;

const instance = axios.create({
    baseURL: 'https://test.acpt.lk/api',
    headers : {
      Authorization: cachedToken ? `Bearer ${cachedToken}`: ''
    }
  });

  instance.interceptors.request.use(
    async config => {
      try{
        const token = await AsyncStorage.getItem('stmToken');
        cachedToken = token;
        config.headers.Authorization = `Bearer ${cachedToken}`;
        console.log("Token : " + cachedToken);
      
    }catch (error){
        //handle AsyncStorage error
      }
  
    
      return config;
    },
    error => {
      //Handle request errors
      return Promise.reject(error);
    }
  );

  export default instance;