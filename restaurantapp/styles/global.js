import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        marginHorizontal: '2.5%',
    },
    button: {
        backgroundColor: '#ffda00',
    },
    buttonText: {
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    title: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30
    },
    image: {
        height: 300,
        width: '100%'
    },
    quantity: {
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 30,
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    }

})

export default globalStyles