import React, { useRef } from 'react'
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface ParentProps {
    children: React.JSX.Element | React.JSX.Element[];
    style?: StyleProp<ViewStyle>;
}

export const useContenedorDeslizable = (translate: 'translateY' | 'translateX' = 'translateX', initValue: number, finalValue?: number) => {
    const translateValue = useRef( new Animated.Value(initValue) ).current;

    const deploy = () => {
        Animated.timing(translateValue, {
            toValue: (finalValue) ? finalValue : 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    const disguise = () => {
        Animated.timing(translateValue, {
            toValue: initValue,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    const AnimatedContainer = ({ children, style }: ParentProps): React.JSX.Element => {
        return (
            <Animated.View
                style={[ 
                    localStyles.container, 
                    style,
                    { transform: [ (translate === 'translateX') ? { translateX: translateValue } : { translateY: translateValue } ] } 
                ]}
            >
                { children }
            </Animated.View>
        );
    }

    return {
        AnimatedContainer,
        deploy,
        disguise
    }
}

const localStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    }
});