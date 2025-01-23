import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { RepoItem } from "./RepoItem";
import { GitHubRepository } from "@/src/interfaces/repositories";
import { ItemProps, ListProps } from "@/src/interfaces";

/**
 * Componente que renderiza un listado de Repositorios de GitHub.
 * @param {Array} items - Listado de repositorios.
 * @param {() => void} onEndReached - Función que maneja la carga de más repositorios.
 * @param {boolean} loadingMore - Boolean que representa el estado de carga de más respositorios.
 */

export const RepoList = ({
  items,
  onEndReached,
  loadingMore,
}: ListProps<GitHubRepository>) => {
  const renderItem = ({ item, index }: ItemProps<GitHubRepository>) => {
    return <RepoItem item={item} index={index} key={index} />;
  };

  const renderFooter = () => {
    return loadingMore ? (
      <View
        style={{ height: 50, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size="large" color="#1f1f1f" />
      </View>
    ) : (
      <View style={{ height: 50 }} />
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ flex: 1 }}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
      ListFooterComponent={renderFooter}
      numColumns={1}
    />
  );
};
