import React from "react";
import { FlatList } from "react-native";
import { RepoItem } from "./RepoItem";
import { GitHubRepository } from "@/src/interfaces/repositories";
import { ItemProps, ListProps } from "@/src/interfaces";
import EmptyList from "../EmptyList";
import FooterList from "../FooterList";

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

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ flex: 1 }}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
      ListFooterComponent={<FooterList loading={loadingMore} />}
      numColumns={1}
      ListEmptyComponent={EmptyList}
    />
  );
};
