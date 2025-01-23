import React from "react";
import { View, ActivityIndicator } from "react-native";

const FooterList = ({ loading }: { loading: boolean }) => {
  return loading ? (
    <View className="h-48 items-center justify-center">
      <ActivityIndicator size="large" color="#1f1f1f" />
    </View>
  ) : (
    <View className="h-48" />
  );
};

export default FooterList;
