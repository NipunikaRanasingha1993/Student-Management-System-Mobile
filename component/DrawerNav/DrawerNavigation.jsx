import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentReg from "../../pages/StudentReg";
import StudentAction from "../../pages/StudentAction";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return(
        <Drawer.Navigator>
        <Drawer.Screen name="StudentAction" component={StudentAction} />
        <Drawer.Screen name="StudentRegister" component={StudentReg} />
      </Drawer.Navigator>
    )
}