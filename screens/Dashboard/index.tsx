import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Dashboard() {

    const navigation = useNavigation();

    return(
        
        <View style={styles.dashboardScreen}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 24,}}>
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Image style={styles.userImage} source={require("../assets/user-img.png")}/>
                </View>
                
                <View style={styles.content}>
                    <Text style={styles.userTitle}>Olá, Pedro</Text>
                    <Text style={styles.userParagraph}>Seja bem-vindo(a) de volta.</Text>
                </View>

                <View style={styles.controlPannel}>
                    <Text style={styles.title}>Painel de Controle</Text>
                    <Text style={styles.paragraph}>Gerencie os dados das famílias com facilidade</Text>
                    
                    <View style={styles.controlPannelDataBase}>
                        <View style={styles.dataBase}>
                        <Text style={[styles.dataBaseTitle, { color: '#00B25F' }]}>Famílias Cadastradas</Text>
                        <Text style={styles.dataBaseIndex}>5</Text>
                        </View>

                        <View style={styles.dataBase}>
                        <Text style={[styles.dataBaseTitle, { color: '#0077FF' }]}>Renda Média Familiar</Text>
                        <Text style={styles.dataBaseIndex}>R$ 1.563,4</Text>
                        </View>

                        <View style={styles.dataBase}>
                        <Text style={[styles.dataBaseTitle, { color: '#B28F00' }]}>Número de Dependentes</Text>
                        <Text style={styles.dataBaseIndex}>17</Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButtonActive} onPress={ () => navigation.navigate('Dashboard')}>
                    <Image source={require("../assets/dashboard-icon.png")}/>
                    <Text style={styles.navbarText}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={ () => navigation.navigate('Register')}>
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
    dashboardScreen:{
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
        paddingBottom: 60,
        width: '100%',
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
        backgroundColor: '#fff',
    },
    
    navButton:{
        opacity: 0.4,
        width: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
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

    content:{
        width: '100%',
        paddingTop: 24,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
    },

    controlPannel:{
        width: '100%',
        paddingTop: 24,
    },

    controlPannelDataBase:{
        paddingTop: 16,
        gap: 12,
    },

    dataBase:{
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#EFF2F6',
        gap: 8,
    },

    dataBaseTitle:{
        fontSize: 18,
        fontWeight: '600',
    },

    dataBaseIndex:{
        fontSize: 32,
        fontWeight: '600',
    },

    userImage:{
        borderRadius: 100,
    },

    userTitle:{
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 8,
    },

    userParagraph:{
        fontSize: 14,
        color: '#6B6B6B',
    },

    paragraph:{
        fontSize: 16,
        color: '#6B6B6B',
    },

    title:{
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 8,
    }
}
)