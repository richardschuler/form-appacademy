import React from 'react';
import { ScrollView, Alert, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form'
import { MaskedTextInput } from 'react-native-mask-text'

const Form = () => {

    const { setValue, handleSubmit } = useForm()
	const onSubmit = data => Alert.alert(
        `Nome: ${data.nome}`, 
        `Email: ${data.email}`, 
        `CPF: ${data.cpf}`, 
        `Telefone: ${data.telefone}`, 
        `Data de nascimento: ${data.nascimento}`
    )

    return (
        <ScrollView>
            <View style={[styles.container]}>
                <Text style={[styles.title]}>React Native Form</Text>
                <View style={[styles.containerInput]}>
                    <Text style={[styles.textInput]}>Nome completo</Text>
                    <TextInput 
                        style={[styles.input]}
                        label={'Nome completo'}
                        placeholder={'Digite seu nome completo'}
                        onChangeText={text => setValue('nome', text)} 
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Text style={[styles.textInput]}>E-mail</Text>
                    <TextInput
                        style={[styles.input]}
                        label={'Email'}
                        placeholder={'Digite seu email'}
                        onChangeText={text => setValue('email', text)}
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Text style={[styles.textInput]}>Digite seu CPF</Text>
                    <MaskedTextInput 
                        style={styles.input}
                        mask="999.999.999-99"
                        label={'Digite seu CPF'}
                        placeholder={'Digite seu CPF'}
                        onChangeText={text => setValue('cpf', text)}
                        keyboardType="numeric"
                        
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Text style={[styles.textInput]}>Telefone</Text>
                    <MaskedTextInput 
                        style={styles.input}
                        mask="(99) 99999-9999"
                        label={'Telefone'}
                        placeholder={'Digite seu telefone'}
                        onChangeText={text => setValue('telefone', text)}
                        keyboardType="numeric"
                    />
                </View>   
                <View style={[styles.containerInput]}>          
                    <Text style={[styles.textInput]}>Data de nascimento</Text>
                    <MaskedTextInput
                        style={[styles.input]}
                        mask="99/99/9999"
                        label={'Data de nascimento'}
                        placeholder={'Data de nascimento'}
                        onChangeText={text => setValue('nascimento', text)}
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e101c',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        marginBottom: 15,
        fontWeight: '700'
    },
    containerInput: {
        backgroundColor: '#0e101c',
        marginBottom: 20
    },
    textInput: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 5,
    },
    input: {
        height: 50,
        fontSize: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    label: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 4
    },
    button: {
        backgroundColor: '#ec5990',
        borderRadius: 8,
        height: 50,
        color: '#fff',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 6,
    }
})

export default Form