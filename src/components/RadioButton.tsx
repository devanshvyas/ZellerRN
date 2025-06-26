import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.radioContainer, selected && styles.selectedContainer]}
    onPress={onPress}
    testID={label}
  >
    <View style={[styles.outerCircle, selected && styles.selectedOuter]}>
      {selected && <View style={styles.innerCircle} />}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    borderRadius: 12,
    height: 50,
    width: "100%",
  },
  selectedContainer: {
    backgroundColor: Colors.backgroundBlue,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedOuter: {
    borderColor: Colors.blue,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.blue,
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
  },
});
