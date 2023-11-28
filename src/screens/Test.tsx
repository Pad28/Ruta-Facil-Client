import React from 'react'
import { Button, Text, View } from 'react-native';
import { useForm, usePeticionPost } from '../hooks';

type formToken = {
    token: string;
}

export const Test = () => {
    const { form, onChange } = useForm<formToken>({} as formToken );
    console.log(form);
    
    const { peticion } = usePeticionPost('/api/auth/validar-token', {}, { headers: { 'api-key': form.token } });

    return (
        <View style={{ marginTop: 50 }} >
            <Text>TestScreen</Text>
            <Button 
                title='token'
                onPress={() => {
                    onChange(
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MmU3NTJiLTM4MWUtNDIzNS1hNGU0LTlkYmQ3YjQ3NTNhZiIsImlhdCI6MTcwMTE1Mzc4NCwiZXhwIjoxNzAxMTUzNzg0fQ.3OHkcXnsSB_QNC6JizoZgR3PAAhLVRccK_fHF-aW9gc',
                        'token'
                    );
                    console.log( form );
                }}
            />

            <Button 
                title='Peticion' 
                onPress={() => {
                    peticion({})
                        .then(res => console.log(res))
                        .catch(err => console.log(err.message))
                }}
            />
        </View>
    );
}
