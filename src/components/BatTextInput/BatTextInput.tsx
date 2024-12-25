import React from 'react';
import {  TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatButtonInputProps{
    pass: string
}

export function BatTextInput(props:BatButtonInputProps) {
  return (

        <TextInput
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}
        >

        </TextInput>
  );
}