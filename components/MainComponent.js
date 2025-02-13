import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import { Image, StyleSheet, ScrollView, Text, View, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';
import NetInfo from "@react-native-community/netinfo";

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
});

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <MenuNavigator.Screen
                name='Menu'
                component={Menu}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
            <MenuNavigator.Screen
                name='Dishdetail'
                component={Dishdetail}
                options={{ headerTitle: 'Dish Details'}}
            />            
        </MenuNavigator.Navigator>
    );
}

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
    return(
        <HomeNavigator.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <HomeNavigator.Screen
                name='Home'
                component={Home}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
        </HomeNavigator.Navigator>
    );
}

const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return(
        <AboutNavigator.Navigator
            initialRouteName='About'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <AboutNavigator.Screen
                name='About'
                component={About}
                options={({ navigation }) => ({
                    headerTitle: 'About Us',
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
        </AboutNavigator.Navigator>
    );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return(
        <ContactNavigator.Navigator
            initialRouteName='Contact'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <ContactNavigator.Screen
                name='Contact'
                component={Contact}
                options={({ navigation }) => ({
                    headerTitle: 'Contact Us',
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
        </ContactNavigator.Navigator>
    );
}

const ReservationNavigator = createStackNavigator();

function ReservationNavigatorScreen() {
    return(
        <ReservationNavigator.Navigator
            initialRouteName='Reservation'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <ReservationNavigator.Screen
                name='Reservation'
                component={Reservation}
                options={({ navigation }) => ({
                    headerTitle: 'Reserve Table',
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
        </ReservationNavigator.Navigator>
    );
}

const FavoritesNavigator = createStackNavigator();

function FavoritesNavigatorScreen() {
    return(
        <FavoritesNavigator.Navigator
            initialRouteName='Favorites'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <FavoritesNavigator.Screen
                name='Favorites'
                component={Favorites}
                options={({ navigation }) => ({
                    headerTitle: 'My Favorites',
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
            <FavoritesNavigator.Screen
                name='Dishdetail'
                component={Dishdetail}
                options={{ headerTitle: 'Dish Details'}}
            />
        </FavoritesNavigator.Navigator>
    );
}

const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
    return(
        <LoginNavigator.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'            
                }
            }}
        >
            <LoginNavigator.Screen
                name='Login'
                component={Login}
                options={({ navigation }) => ({
                    headerTitle: 'Login',
                    headerLeft: () => (
                        <Icon name='menu' size={24} color='white' onPress={() => {
                            navigation.toggleDrawer()
                        }}/>
                    )
                })}
            />
        </LoginNavigator.Navigator>
    );
}

const CustomDrawerContentComponent = (props) => (
    <SafeAreaProvider>
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never' }}
            >
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1}}>
                        <Image source={{ uri: baseUrl + 'images/logo.png' }} style={styles.drawerImage} />
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </SafeAreaView>
        </ScrollView>
    </SafeAreaProvider>
);

const MainNavigator = createDrawerNavigator();

function MainNavigatorScreen() {
    return (
        <MainNavigator.Navigator
            drawerStyle={{
                backgroundColor: '#D1C4E9'               
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}
            initialRouteName='Home'
        >
            <MainNavigator.Screen
                name='Login'
                component={LoginNavigatorScreen}
                options={{
                    headerTitle: 'Login', 
                    drawerLabel: 'Login',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='sign-in' type='font-awesome' size={24} color={tintColor} />
                    )
                }}
            />
            <MainNavigator.Screen
                name='Home'
                component={HomeNavigatorScreen}
                options={{
                    headerTitle: 'Home', 
                    drawerLabel: 'Home',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='home' type='font-awesome' size={24} color={tintColor} />
                    )
                }}
            />
            <MainNavigator.Screen
                name='About'
                component={AboutNavigatorScreen}
                options={{
                    headerTitle: 'About Us',
                    drawerLabel: 'About Us',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='info-circle' type='font-awesome' size={24} color={tintColor} />
                    )
                }}
            />
            <MainNavigator.Screen
                name='Menu'
                component={MenuNavigatorScreen}
                options={{
                    headerTitle: 'Menu',
                    drawerLabel: 'Menu',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='list' type='font-awesome' size={24} color={tintColor} />
                    )
                }}
            />
            <MainNavigator.Screen
                name='Contact'
                component={ContactNavigatorScreen}
                options={{
                    headerTitle: 'Contact Us',
                    drawerLabel: 'Contact Us',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='address-card' type='font-awesome' size={22} color={tintColor} />
                    )
                }}
            />
            <MainNavigator.Screen
                name='Favorites'
                component={FavoritesNavigatorScreen}
                options={{
                    headerTitle: 'My Favorites',
                    drawerLabel: 'My Favorites',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='heart' type='font-awesome' size={24} color={tintColor} />
                    )
                }}
            />
            <MainNavigator.Screen
                name='Reservation'
                component={ReservationNavigatorScreen}
                options={{
                    headerTitle: 'Reserve Table',
                    drawerLabel: 'Reserve Table',
                    drawerIcon: ({ tintColor }) => (
                        <Icon name='cutlery' type='font-awesome' size={24} color={tintColor} />
                    )
                }}
            />
        </MainNavigator.Navigator>
    );
}

class Main extends Component {
    componentDidMount () {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

        NetInfo.fetch().then(state => {
            ToastAndroid.show('Initial Network Connectivity Type: ' + state.type, ToastAndroid.LONG);
        });

        this.unsubscribe = NetInfo.addEventListener(this.handleConnectivityChange);
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    handleConnectivityChange = (state) => {
        switch (state.type) {
            case 'none':
                ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
                break;

            case 'wifi':
                ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
                break;

            case 'cellular':
                ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
                break;

            case 'unknown':
                ToastAndroid.show('You now have an unknown connection!', ToastAndroid.LONG);
                break;

            default:
                break;
        }
    }

    render() { 
        return (
            <NavigationContainer>
                <MainNavigatorScreen />           
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);