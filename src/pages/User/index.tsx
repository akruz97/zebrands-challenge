import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { UserList } from "@/src/components/UserList/UserList";
import InputSearch from "@/src/components/InputSearch";
import Title from "@/src/components/Title";
import { usePagination } from "@/src/constants/hooks/usePagination";
import { GitHubUser } from "@/src/interfaces/users";
import { getUsersByUsername } from "@/src/actions/userActions";

const UserPage = () => {
  const [username, setUsername] = useState<string>("");

  const { data, error, goToPage, isLoading, nextPage, loadingMore } =
    usePagination<GitHubUser>({
      initialPage: 1,
      name: username,
      fetcher: getUsersByUsername,
    });

  useEffect(() => {
    goToPage(1);
  }, [username]);

  const handleLoadMore = () => {
    nextPage();
  };

  const onChangeUsername = (text: string) => setUsername(text);

  return (
    <View className="bg-white flex-1 p-5">
      <Title title="Github Users" />
      <Text className="text-sm font-semibold mt-10">
        {"Search users by username"}
      </Text>
      <InputSearch
        text={username}
        onChangeText={onChangeUsername}
        placeholder="Insert username"
      />

      {error && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-md color-red-500">{error}</Text>
        </View>
      )}

      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={32} />
        </View>
      ) : (
        <UserList
          items={data}
          onEndReached={handleLoadMore}
          loadingMore={loadingMore}
        />
      )}
    </View>
  );
};

export default UserPage;
