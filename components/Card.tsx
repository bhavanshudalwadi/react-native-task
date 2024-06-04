import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
    title: string,
    img: string
}>;

export default function Card({children, title, img}: SectionProps): React.JSX.Element {
  return (
    <TouchableHighlight style={styles.item} underlayColor={"#ccc"} onPress={() => {}}>
        <View>
            <Image style={styles.img} source={{uri: img}} />
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        width: 125,
        textAlign: 'center',
        marginHorizontal: 6
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    img: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
        width: 85,
        height: 85,
        textAlign: 'center',
        marginHorizontal: 9,
        marginBottom: 10
    }
})