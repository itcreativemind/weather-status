import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    scrollView: {
        width: "100%"
    },
    container: {
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center',
       marginTop: 10,
       paddingHorizontal: 20,
    },
    weatherForcastTile: {
        marginVertical: 10,
        padding: 20,
        width: "100%",
        backgroundColor: colors.grey
    },
    date: {
        color: colors.primaryColor,
        fontWeight: "bold",
    },
    tempContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    temp: {
        padding: 5,
        backgroundColor: colors.primaryColor,
        color: colors.white,
    },
})

export default styles;
