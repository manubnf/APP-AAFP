import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, TextInputProps, Alert , ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Register() {

    const navigation = useNavigation();

    return(
        
        <View style={styles.registerScreen}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 24,}}>
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Image style={styles.userImage} source={require("../assets/user-img.png")}/>
                </View>

                <View style={styles.registerPannel}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.paragraph}>Preencha os dados abaixo para cadastrar a família.</Text>       
                </View>

                <View style={styles.containerForm}>
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Nome do responsável</Text>
                        <TextInput style={styles.formInput} placeholder="Ex: João da Silva"></TextInput>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Renda mensal</Text>
                        <View style={styles.inputContainerForm}>
                            <Image source={require("../assets/real-icon.png")}/>
                            <TextInput placeholder="Ex: 1497" style={styles.input}/>
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Número de dependentes</Text>
                        <TextInput style={styles.formInput} placeholder="Ex: 5"></TextInput>
                    </View>

                    <TouchableOpacity style={styles.formButton}>
                        <Text style={styles.formButtonText}>Salvar cadastro</Text>
                    </TouchableOpacity>

                </View>
            </View>
            </ScrollView>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={ () => navigation.navigate('Dashboard')}>
                    <Image source={require("../assets/dashboard-icon.png")}/>
                    <Text style={styles.navbarText}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonActive} onPress={ () => navigation.navigate('Register')}>
                    <Image source={require("../assets/register-icon.png")}/>
                    <Text style={styles.navbarText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={ () => navigation.navigate('Search')}>
                        <Image source={require("../assets/search-icon.png")}/>
                        <Text style={styles.navbarText}>Consultar</Text>
                </TouchableOpacity>  
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    registerScreen:{
        flex: 1,
        width: '100%',
    },
    
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingEnd: '5%',
        paddingStart: '5%',
        paddingVertical: 24,
        width: '100%',
        paddingBottom: 60,
    },
    
    registerPannel:{
        width: '100%',
        paddingTop: 24,
        paddingBottom: 32,
        borderColor: '#D9D9D9',
        borderBottomWidth: 1,
    },

    navbar:{
        flex: 0.12,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: '000000',
        shadowOffset: { width: 0, height: 5,},
        shadowOpacity: 0.15,
        shadowRadius: 27,
        elevation: 20,
        paddingBottom: 36,
        marginBottom: -36,
        },

    navButtonActive:{
        width: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8 ,
        paddingHorizontal: 20,
    },

    navButton:{
        opacity: 0.4,
        width: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 20,
    },

    navbarText:{
        fontSize: 10,
        textAlign: 'center',
    },

    menu:{
        alignItems: 'flex-start',
        width: '100%',
        height: 48,
    },

    userImage:{
        borderRadius: 100,
    },

    paragraph:{
        fontSize: 16,
        color: '#6B6B6B',
    },

    title:{
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 8,
    },

    containerForm:{
        flex: 1,
        width: '100%',
        paddingTop: 32,
        gap: 18,
    },

    formContainer:{
        gap: 8,
    },

    formTitle:{
        fontSize: 16,
        fontWeight: '600',
    },

    inputContainerForm:{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 16,
        borderColor: '#9C9C9C',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        gap: 8,
    },

    formInput:{
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 16,
        borderColor: '#9C9C9C',
        borderWidth: 1,
        borderRadius: 5,
    },

    formButton:{
        width: '100%',
        fontSize: 16,
        fontWeight: '700',
        backgroundColor: '#0077FF',
        paddingVertical: 12,
        borderRadius: 100,
        top: 16,
    },

    formButtonText:{
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
      },

    input:{
        fontSize: 16,
    }
}
)