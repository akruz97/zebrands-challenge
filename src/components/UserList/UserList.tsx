import React from "react";
import { FlatList } from "react-native";
import { GitHubUser } from "../../interfaces/users";
import { UserItem } from "./UserItem";
import { ListProps } from "@/src/interfaces";
import FooterList from "../FooterList";
import EmptyList from "../EmptyList";

/**
 * Componente que renderiza un listado de usuarios GitHub.
 * @param {ListProps<GitHubUser>} props - Propiedades del componente
 * @param {Array<GitHubUser>} items - Arreglo de usuarios GitHub.
 * @param {boolean} loadingMore - Estado de carga de usuarios.
 * @param {() => void} onEndReached - Funcion que obtiene mas usuarios.
 */

export const UserList = ({
  items,
  onEndReached,
  loadingMore,
}: ListProps<GitHubUser>) => {
  const renderItem = ({ item, index }: { item: GitHubUser; index: number }) => {
    return <UserItem item={item} index={index} key={index} />;
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
      ListFooterComponent={<FooterList loading={loadingMore} />}
      numColumns={2}
      ListEmptyComponent={<EmptyList />}
    />
  );
};
