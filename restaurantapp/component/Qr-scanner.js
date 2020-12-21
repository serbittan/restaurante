import React, { useState } from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableOpacity,
    Linking,
} from 'react-native'
import { Container, Content, Text } from 'native-base'

import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import globalStyles from '../styles/global'

const QrScanner = ({ onSuccess }) => {

    return (

        <View>
            <QRCodeScanner
                cameraStyle={{ height: 500 }}
                showMarker={true}
                containerStyle={styles.containerscn}
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>the table</Text>{' '}
                                and scan the QR code.
                            </Text>
                }
                bottomContent={
                    <TouchableOpacity 
                        onPress={() => setScan(false)}
                        style={styles.buttonTouchable}
                    >
                        <Text style={styles.buttonText}>Stop Scan</Text>
                    </TouchableOpacity>
                }
            />
        </View>


    )
}

const styles = StyleSheet.create({
    containerscn: {

    },
    centerText: {
        flex: 1,
        fontSize: 20,
        paddingTop: 40,
        color: '#777',
        paddingBottom: 60,
        marginHorizontal: '2.5%'
    },
    textBold: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    buttonTouchable: {
        paddingTop: 50,
    }
})

export default QrScanner