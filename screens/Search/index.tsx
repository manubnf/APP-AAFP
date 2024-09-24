import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Search() {

    const navigation = useNavigation();

    return(

        <View style={styles.searchScreen}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 24,}}>
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Image style={styles.userImage} source={require("../assets/user-img.png")}/>
                </View>

                <View style={styles.searchPannel}>
                    <Text style={styles.title}>Consulta</Text>
                    <Text style={styles.paragraph}>Lista das famílias cadastradas.</Text>       
                </View>

                <TouchableOpacity style={styles.familyDataBaseContainer}>
                    <View style={styles.familyDataDefault}>

                        <View style={styles.familyDataDefaultImage}>
                        <Image style={styles.userImage} source={require("../assets/img-user_1.png")}/>
                        </View>

                        <View style={styles.familyDataDefaultTextBox}>
                            <Text style={styles.familyDataDefaultFamilyName}>Família Santos</Text>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Nome do responsável</Text>
                                <Text style={styles.familyDataDefaultParagraph}>João Santos</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Renda mensal</Text>
                                <Text style={styles.familyDataDefaultParagraph}>R$ 1497</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Número de Dependentes</Text>
                                <Text style={styles.familyDataDefaultParagraph}>5</Text>
                            </View>
                        </View>

                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.familyDataBaseContainer}>
                    <View style={styles.familyDataDefault}>

                        <View style={styles.familyDataDefaultImage}>
                        <Image style={styles.userImage} source={require("../assets/img-user_2.png")}/>
                        </View>

                        <View style={styles.familyDataDefaultTextBox}>
                            <Text style={styles.familyDataDefaultFamilyName}>Família Silva</Text>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Nome do responsável</Text>
                                <Text style={styles.familyDataDefaultParagraph}>Maria Silva</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Renda mensal</Text>
                                <Text style={styles.familyDataDefaultParagraph}>R$ 880</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Número de Dependentes</Text>
                                <Text style={styles.familyDataDefaultParagraph}>3</Text>
                            </View>
                        </View>

                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.familyDataBaseContainer}>
                    <View style={styles.familyDataDefault}>

                        <View style={styles.familyDataDefaultImage}>
                        <Image style={styles.userImage} source={require("../assets/img-user_3.png")}/>
                        </View>

                        <View style={styles.familyDataDefaultTextBox}>
                            <Text style={styles.familyDataDefaultFamilyName}>Família Albuquerque</Text>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Nome do responsável</Text>
                                <Text style={styles.familyDataDefaultParagraph}>Letícia Albuquerque</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Renda mensal</Text>
                                <Text style={styles.familyDataDefaultParagraph}>R$ 2340</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Número de Dependentes</Text>
                                <Text style={styles.familyDataDefaultParagraph}>2</Text>
                            </View>
                        </View>

                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.familyDataBaseContainer}>
                    <View style={styles.familyDataDefault}>

                        <View style={styles.familyDataDefaultImage}>
                        <Image style={styles.userImage} source={require("../assets/img-user_4.png")}/>
                        </View>

                        <View style={styles.familyDataDefaultTextBox}>
                            <Text style={styles.familyDataDefaultFamilyName}>Família Rocha</Text>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Nome do responsável</Text>
                                <Text style={styles.familyDataDefaultParagraph}>Joana Rocha</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Renda mensal</Text>
                                <Text style={styles.familyDataDefaultParagraph}>R$ 1230</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Número de Dependentes</Text>
                                <Text style={styles.familyDataDefaultParagraph}>3</Text>
                            </View>
                        </View>

                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.familyDataBaseContainer}>
                    <View style={styles.familyDataDefault}>

                        <View style={styles.familyDataDefaultImage}>
                        <Image style={styles.userImage} source={require("../assets/img-user_5.png")}/>
                        </View>

                        <View style={styles.familyDataDefaultTextBox}>
                            <Text style={styles.familyDataDefaultFamilyName}>Família Lima</Text>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Nome do responsável</Text>
                                <Text style={styles.familyDataDefaultParagraph}>Thiago Lima</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Renda mensal</Text>
                                <Text style={styles.familyDataDefaultParagraph}>R$ 1870</Text>
                            </View>
                            <View style={styles.familyDataDefaultFamilyInfoBox}>
                                <Text style={styles.familyDataDefaultTitle}>Número de Dependentes</Text>
                                <Text style={styles.familyDataDefaultParagraph}>4</Text>
                            </View>
                        </View>

                    </View>
                    
                </TouchableOpacity>

            </View>
            </ScrollView>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={ () => navigation.navigate('Dashboard')}>
                    <Image source={require("../assets/dashboard-icon.png")}/>
                    <Text style={styles.navbarText}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={ () => navigation.navigate('Register')}>
                    <Image source={require("../assets/register-icon.png")}/>
                    <Text style={styles.navbarText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButtonActive} onPress={ () => navigation.navigate('Search')}>
                        <Image source={require("../assets/search-icon.png")}/>
                        <Text style={styles.navbarText}>Consultar</Text>
                </TouchableOpacity>  
            </View>


        </View>

    )
}

const styles = StyleSheet.create({

    searchScreen:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    
    searchPannel:{
        width: '100%',
        paddingTop: 24,
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

    familyDataBaseContainer:{
        width: '100%',
        paddingTop: 24,
        gap: 16,
    },

    familyDataDefault:{
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        gap: 12,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    familyDataDefaultImage:{
        width: 56,
        height: 56,
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        alignSelf: 'flex-start',
    },

    familyDataDefaultTextBox:{
        gap: 6,
    },

    familyDataDefaultFamilyName:{
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },

    familyDataDefaultFamilyInfoBox:{
        gap: 4,
    },

    familyDataDefaultParagraph:{
        fontSize: 14,
        fontWeight: '400',
        color: '#505050',
    },

    familyDataDefaultTitle:{
        fontSize: 14,
        fontWeight: '600',
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

})