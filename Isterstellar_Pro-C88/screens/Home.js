import { NavigationRouteContext } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.driodSafeArea}/>
                    <View>
                        <Text style={styles.titleText}>Aplicación Estelar</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.routeText}>Naves espaciales</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.routeText}>Mapa estelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.routeText}>Imágenes diarias</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    background:{

    },
    container:{
        flex:1,
        backgroundColor: "#D0E6F0"
    },
    driodSafeArea:{
        marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
    },
    routeCard:{
        flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"white"
    },
    titleBar:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"aqua",
        marginLeft:500,
        margin:40
    },
    routeText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#D11583",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"aqua"
    }
})