import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <Text>About Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>      
    );
}