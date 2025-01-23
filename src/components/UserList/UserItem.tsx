import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";

import Avatar from "../Avatar";
import { GitHubUser } from "@/src/interfaces/users";
import { ItemProps } from "@/src/interfaces";

const { width } = Dimensions.get("window");

/**
 * Componente que renderiza un usuario de GitHub.
 * @param {ItemProps<GitHubUser>} props - Propiedades del componente
 * @param {GitHubUser} item - Objeto que representa un usuario.
 * @param {number} index - Numero que representa el indice del componente.
 */

export const UserItem = ({ item, index }: ItemProps<GitHubUser>) => {
  return (
    <Pressable key={index}>
      <View
        style={{ width: width / 2 - width * 0.07 }}
        className="flex-col mx-2 bg-white shadow border border-slate-400 rounded-md mt-5 min-h-32  p-2"
      >
        <Text
          className="px-2 py-2 font-bold text-center"
          allowFontScaling
          adjustsFontSizeToFit
        >
          {item.login}
        </Text>

        <View className="flex-row ">
          <View className="flex-1">
            <Avatar urlImage={item.avatar_url} />
          </View>
          <View className="px-2 flex-1">
            <Text className="text-sm text-slate-700" numberOfLines={2}>
              {item.type}
            </Text>
            <Text className="text-sm text-slate-700" numberOfLines={2}>
              {item.user_view_type}
            </Text>
            <Text numberOfLines={2}>{item.bio}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
