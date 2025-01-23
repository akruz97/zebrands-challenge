import React from "react";
import { Image } from "react-native";
import { View } from "react-native";

const Avatar = ({ urlImage }: { urlImage: string | undefined }) => {
  return (
    <View className="size-14 m-2 ">
      <Image
        source={{ uri: urlImage }}
        className="object-fill flex-1 rounded-full"
        testID="avatar-user"
      />
    </View>
  );
};

export default Avatar;
