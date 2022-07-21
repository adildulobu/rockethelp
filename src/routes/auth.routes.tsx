import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SignIn } from '../screens/SignIn';
import { SignOut } from '../screens/SignOut';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="signOut" component={SignOut}/>
        </Navigator>
    )
}