import React from "react";
import { Text } from "react-native";

const Title = ({ title = "" }: { title: string }) => {
  return (
    <Text testID="title-test" className="text-2xl font-bold text-center">
      {title}
    </Text>
  );
};

export default Title;
