import { StyleSheet, Text, View } from 'react-native';

const LocatioError  = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                App need to access device location to show weather info.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center',
       paddingHorizontal: 80,
    },
    text : {
        color: "#800000",
        textAlign: 'center',
        lineHeight: 25,
    }
})

export default LocatioError;