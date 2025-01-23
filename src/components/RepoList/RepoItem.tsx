import React from "react"
import { Pressable, Text, View } from "react-native"

import Avatar from "../Avatar"
import { GitHubRepository } from "@/src/interfaces/repositories"
import { ItemProps } from "@/src/interfaces"


export const RepoItem = ({ item, index }: ItemProps<GitHubRepository>) => {
    
    return (
            <Pressable key={index}>
                <View 
                className="flex-col mx-2 bg-white shadow border border-slate-400 rounded-md mt-5 min-h-40  p-2">
                <Text className="px-2 py-2 font-bold text-center" 
                        allowFontScaling  adjustsFontSizeToFit >{item.name || item.full_name}</Text>
                    <Text className="text-sm text-center" numberOfLines={2}>{item.description}</Text>
                    <View className="flex-row mt-4">
                        <View className="">
                         <Avatar urlImage={item.owner.avatar_url} />
                        </View>
                        <View className="px-2 flex-1 flex-row">
                        <View className="flex-1">
                            <Text className="text-sm text-slate-700" numberOfLines={1}>Forks: {item.forks_count}</Text>
                            <Text className="text-sm text-slate-700" numberOfLines={1}>Watchers: {item.watchers}</Text>
                            <Text className="text-sm text-slate-700" numberOfLines={1}>Open issues: {item.open_issues_count}</Text>
                        
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm text-slate-700" numberOfLines={1}>Language: {item.language}</Text>
                            <Text className="text-sm text-slate-700 font-bold" numberOfLines={1}>Owner:</Text>
                            <Text className="text-sm text-slate-700" numberOfLines={1}>{item.owner.login}</Text>
                            
                        </View>
                        
                       </View>
                    </View>
                   
                </View>
            </Pressable>
    )
}