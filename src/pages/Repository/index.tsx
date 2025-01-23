import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { getRepositoriesByName } from "@/src/actions/repositoryActions";
import InputSearch from "@/src/components/InputSearch";
import { RepoList } from "@/src/components/RepoList/RepoList";
import Title from "@/src/components/Title";
import { usePagination } from "@/src/constants/hooks/usePagination";
import { GitHubRepository } from "@/src/interfaces/repositories";

const RepositoryPage = () => {
  const [nameRepository, setNameRepository] = useState<string>("");

  const { data, error, goToPage, isLoading, nextPage, loadingMore } =
    usePagination<GitHubRepository>({
      initialPage: 1,
      name: nameRepository,
      fetcher: getRepositoriesByName,
    });

  useEffect(() => {
    goToPage(1);
  }, [nameRepository]);

  const handleLoadMore = () => {
    nextPage();
  };

  const onChangeRepository = (text: string) => setNameRepository(text);

  return (
    <View className="bg-white flex-1 p-5">
      <Title title="Github Repositories" />
      <Text className="text-sm font-semibold mt-10">
        {"Search repositories by name"}
      </Text>
      <InputSearch
        text={nameRepository}
        onChangeText={onChangeRepository}
        placeholder="Insert repository name"
      />

      {error && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-md color-red-500">{error}</Text>
        </View>
      )}

      {isLoading ? (
        <>
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={32} />
          </View>
        </>
      ) : (
        <RepoList
          items={data}
          onEndReached={handleLoadMore}
          loadingMore={loadingMore}
        />
      )}
    </View>
  );
};

export default RepositoryPage;
