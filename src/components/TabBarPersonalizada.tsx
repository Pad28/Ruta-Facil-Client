import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { useEffect } from 'react'
import { useContenedorDeslizable } from '../hooks';
import {Animated, Keyboard, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, widthWindow } from '../theme/appTheme';

interface Props extends BottomTabBarProps {
    activeBackgroundColor?: string;
    activeTintColor: string;
    inactiveBackgroundColor?: string;
    inactiveTintColor: string;   
}

export const TabBarPersonalizada = ( {
    state, 
    descriptors, 
    navigation, 
    activeTintColor, 
    inactiveTintColor, 
    activeBackgroundColor, 
    inactiveBackgroundColor, 
}: Props ) => {

    const { deploy, disguise, translateValue } = useContenedorDeslizable({ 
        translate: 'translateY', 
        initValue: 1000,
        durationDeploy: 300, 
        durationDisguise: 1000 
    });

    useEffect(() => {
        deploy();
        Keyboard.addListener('keyboardDidShow', disguise);
        Keyboard.addListener('keyboardDidHide', deploy);
    }, []);

    const { routes } = state;
    return (
        <Animated.View
            style={[ 
                localStyles.container, 
                { transform: [{ translateY: translateValue }] }
            ]}
        >
            {
                routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = 
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                            
                    const isFocused = state.index === index;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                    const backgroundColor = isFocused
                        ? activeBackgroundColor
                        : inactiveBackgroundColor;
                            
                    const onPress = () => {
                        navigation.navigate(route.name);
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            style={[ localStyles.botonStyle, { backgroundColor: backgroundColor } ]}
                            onPress={onPress}
                        >
                            {
                                options.tabBarIcon != undefined && (
                                    options.tabBarIcon({ focused: true, color: tintColor, size: 34 })
                                )
                            }

                            {
                                isFocused && (
                                    <Text
                                        style={[ localStyles.text, { color: tintColor } ]}
                                    >
                                        { label as string }
                                    </Text>
                                )
                            }

                        </TouchableOpacity>
                    );
                })
            }
        </Animated.View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        position: 'absolute',

        alignSelf: 'center',
        height: 90,
        
        width: widthWindow - 40,

        marginBottom: 16,
        borderRadius: 20,
        backgroundColor: colors.primario,
        elevation: 8,
        flexDirection: 'row',
        bottom: 0,

        alignItems: 'center',
        justifyContent: 'center'
    },
    botonStyle: {
        flexDirection: 'row',
        marginHorizontal: 8,
        height: 70,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    text: {
        fontSize: (widthWindow > 450) ? 10 : 18,
        fontWeight: 'bold',
        marginHorizontal: 18
    }
});