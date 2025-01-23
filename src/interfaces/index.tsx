export interface InputSearchProps {
    text: string,
    placeholder: string,
    onChangeText: (text: string) => void
}


export interface ItemProps<T> {
    item: T,
    index: number
}

export interface ListProps<T> {
    items: T[], 
    onEndReached: () => void 
    loadingMore: boolean
}