import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';

interface Props {
    values: {label: string, value: string}[];
    obtenerValue: (value: ItemType<string>) => void;
}

export const ComboBox = ({ values, obtenerValue }: Props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(values);

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >

        <DropDownPicker 
            items={items}
            value={value}
            open={open}
            setOpen={setOpen}
            setValue={setValue}
            style={{
                width: 250
            }}
            containerStyle={{
              width: 250
            }}
            onSelectItem={obtenerValue}
            language="ES"
        />
      </View>
    );
}

const localStyles = StyleSheet.create({
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 30,
  }
});