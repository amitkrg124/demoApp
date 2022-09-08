import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: "FEEDBACK FORM", image: "https://img.icons8.com/color/70/000000/cottage.png" },
                { id: 1, title: "ORDER FORM", image: "https://img.icons8.com/color/70/000000/administrator-male.png" },

            ]
        };
    }

    clickEventListener(item) {
        Alert.Alert(item.title)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (

                            <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item.view) }}>
                                <View style={styles.cardFooter}></View>
                                <Image style={styles.cardImage} source={{ uri: item.image }} />
                                <View style={styles.cardHeader}>
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>




                        )
                    }} />
                <View style={{ marginTop: 50 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: 'green' }}>hiihu</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>hiihu Ssxkjxasgmn asxugasx askbxiuasbx assxkubasx xasxbsjikwx diucgcgewb</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'black',textDecorationLine: 'underline' }}>www.amitbaba.com</Text>
                </View>
                <View style={{borderBottomColor:'grey',borderBottomWidth:1, marginTop:10}}></View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: 'green' }}>hiihu</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>hiihu Ssxkjxasgmn asxugasx askbxiuasbx assxkubasx xasxbsjikwx diucgcgewb</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'black',textDecorationLine: 'underline' }}>www.amitbaba.com</Text>
                </View>
                <View style={{borderBottomColor:'grey',borderBottomWidth:1, marginTop:10}}></View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: 'green' }}>hiihu</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>hiihu Ssxkjxasgmn asxugasx askbxiuasbx assxkubasx xasxbsjikwx diucgcgewb</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'black',textDecorationLine: 'underline' }}>www.amitbaba.com</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        
        marginTop: 20,
    },
    list: {
        
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        backgroundColor:'white',

        alignItems: 'center'
    },
    /****** card ************/
    card: {

        shadowColor: 'black',

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 10,
        backgroundColor: "skyblue",
        flexBasis: '42%',
        marginHorizontal: 10,
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {

        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    title: {

        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
});



