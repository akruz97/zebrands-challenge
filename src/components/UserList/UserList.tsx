import { ActivityIndicator, FlatList, View } from "react-native"
import { GitHubUser } from "../../interfaces/users"
import { UserItem } from "./UserItem"
import { ListProps } from "@/src/interfaces"

export const UserList = ({ 
        items, 
        onEndReached, 
        loadingMore
    }: ListProps<GitHubUser>
   ) => {

    const renderItem = ({ item, index } : { item: GitHubUser, index: number }) => {
        return <UserItem item={item} index={index} key={index} />
    }

    const renderFooter = () => {
        return loadingMore ? (
          <View style={{ height:50, alignItems: "center", justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#1f1f1f" />
          </View>
        ) : <View style={{ height: 50 }} />;
      };


    return (
        <FlatList 
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={{ flex: 1 }}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onEndReachedThreshold={0.1}
            onEndReached={onEndReached}
            ListFooterComponent={renderFooter}
            numColumns={2}
        />
    )

}