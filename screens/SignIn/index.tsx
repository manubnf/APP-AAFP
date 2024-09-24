import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <Image
        source={require("../assets/logo.png")}
        style={styles.logo}/>

        <Text style={styles.loginTitle}>Bem-vindo ao AAFP</Text>
        
        <Text style={styles.paragraph}>Faça login para acessar o sistema</Text>
        
        <View style={styles.AcessForm}>
        <View style={styles.inputContainerMail}>
        <Image
        source={require("../assets/mail-icon.png")}
        style={styles.icon}
        />
        <TextInput
        placeholder="Email"
        style={styles.input}
        />
        </View>

        <View style={styles.inputContainerPassword}>
        <Image
        source={require("../assets/password-icon.png")}
        style={styles.icon}
        />
        <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        />
        </View>
        </View>
        
        <TouchableOpacity style={styles.buttonForgotpassword}>
            <Text style={styles.buttonForgotpassword}>Esqueceu sua senha? Clique aqui</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  onPress={ () => navigation.navigate('Dashboard')}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity> 

        </View>
    );
    }

    const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        paddingEnd: '10%',
        paddingStart: '10%',
        width: '100%',
    },

    AcessForm:{
        width: '100%',
        gap: 8,
    },

    inputContainerMail:{
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#EFF2F6',
        borderRadius: 5,
        fontSize: 14,
        paddingLeft: 12,
        alignItems: 'center',
    },

    inputContainerPassword:{
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#EFF2F6',
        borderRadius: 5,
        fontSize: 14,
        paddingLeft: 12,
        alignItems: 'center',
    },

    logo:{
        marginBottom: 24,
    },

    loginTitle:{
        fontSize: 28,
        fontWeight: '600',
        paddingBottom: 8,
    },

    paragraph:{
        fontSize: 16,
        marginBottom: 24,
    },

    button:{
        width: '100%',
        fontSize: 16,
        fontWeight: '700',
        backgroundColor: '#0077FF',
        paddingVertical: 12,
        borderRadius: 100,
        top: 24,
    },

    icon:{
        width: 20,
        height: 20,
    },

    input:{
        width: '100%',
        paddingLeft: 12,
    },

    buttonText:{
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
    },

    buttonForgotpassword:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'flex-end',
        paddingTop: 4,
    },
    }) 