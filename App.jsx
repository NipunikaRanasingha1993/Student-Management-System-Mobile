import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserReg from './pages/UserReg';
import UserLog from './pages/UserLog';
import StudentReg from './pages/StudentReg';
import StudentAction from './pages/StudentAction';
import DrawerNavigation from './component/DrawerNav/DrawerNavigation';

const Stack = createStackNavigator();

export default function App(){
    return(
       
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="UserLogin" component={UserLog} options={{headerShown: false}}/>
            <Stack.Screen name="UserRegister" component={UserReg} options={{headerShown: false}}/>
            <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown: false}}/>
            <Stack.Screen name="StudentRegister" component={StudentReg} />
            <Stack.Screen name="StudentAction" component={StudentAction} />
            
      
    </Stack.Navigator>

        </NavigationContainer>
        
    )
}