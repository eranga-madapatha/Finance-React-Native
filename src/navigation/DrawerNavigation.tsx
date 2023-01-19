import { createDrawerNavigator } from '@react-navigation/drawer';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Verification from '../screens/Verification';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="verification"
                component={Verification} />
            <Drawer.Screen name="Home"
                component={Home} />
            <Drawer.Screen name="ForgotPassword"
                component={ForgotPassword} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;