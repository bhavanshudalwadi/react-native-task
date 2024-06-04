import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const fashionList = [
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    }
]

const electronicsList = [
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    },
    {
        title: "Man's Fashion",
        img: "https://uniqueandclassy.com/cdn/shop/products/16_Hed874f9e7cd8420398d53214ee361d0fB_95a8c86e-728d-4ca3-a9b1-5b8ba9b525fa.jpg?v=1622734129"
    }
]

export default function Screen1() {
    return (
        <ScrollView>
            <Text style={styles.header}>Fashion</Text>
            <FlatList
                numColumns={3}
                data={fashionList}
                renderItem={({ item }) => (
                    <Card title={item.title} img={item.img} />
                )}
                keyExtractor={(item, index) => item.title + " " + index}
                scrollEnabled={false}
            />
            <View style={{ backgroundColor: '#999', width: '100%', height: 1, marginTop: 30 }}></View>
            <Text style={styles.header}>Mobile & Electronics</Text>
            <FlatList
                numColumns={3}
                data={electronicsList}
                renderItem={({ item }) => (
                    <Card title={item.title} img={item.img} />
                )}
                keyExtractor={(item, index) => item.title + " " + index}
                scrollEnabled={false}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})