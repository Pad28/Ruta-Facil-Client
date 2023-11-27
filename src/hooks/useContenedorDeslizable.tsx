import React, { useRef } from 'react'
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface ParentProps {
    children: React.JSX.Element | React.JSX.Element[];
    style?: StyleProp<ViewStyle>;
}

interface HookProps {
    translate: 'translateY' | 'translateX';
    initValue: number;
    finalValue?: number;
    durationDeploy?: number;
    durationDisguise?: number;
}

export const useContenedorDeslizable = ( { translate, initValue, finalValue, durationDeploy = 1000, durationDisguise = 1000 }: HookProps ) => {
    const translateValue = useRef( new Animated.Value(initValue) ).current;

    const deploy = () => {
        Animated.timing(translateValue, {
            toValue: (finalValue) ? finalValue : 0,
            duration: durationDeploy,
            useNativeDriver: true
        }).start();
    }

    const disguise = () => {
        Animated.timing(translateValue, {
            toValue: initValue,
            duration: durationDisguise,
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
        disguise,
        translateValue
    }
}

const localStyles = StyleSheet.create({
    container: {
        position: 'absolute',
    }
});