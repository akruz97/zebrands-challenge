import { Text } from "react-native"

const Title = ({ title = '' }) => {
    return (
        <Text className="text-2xl font-bold text-center" >{title}</Text>
    )
}

export default Title;