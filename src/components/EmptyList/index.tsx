import React from "react";
import { View, Text } from "react-native";
const EmptyList = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-md color-slate-400">
        {"No se han encontrado resultados"}
      </Text>
    </View>
  );
};

export default EmptyList;
