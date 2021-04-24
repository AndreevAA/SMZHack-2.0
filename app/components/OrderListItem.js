import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {Component, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



export class OrderListItem extends Component {

    colorByStatus = (status) => {
        switch (status) {
            case "Новая":
                return '#4CA64B';
            case "Отложена":
                return ''
        }
    }

    render = () => {
        const {onPress, order} = this.props;
        console.log("order " + Object.keys(order));
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={styles.col}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: "row",
                    }}>
                        <Text style={styles.price}>{order.price} ₽</Text>
                        <Icon name={"circle"}  color={'#4CA64B'} size={16} style={{marginLeft: 200}}/>
                        <Text style={styles.status}>{order.status}</Text>
                    </View>
                    <Text style={styles.title}>{order.title}</Text>
                    <Text style={styles.date}>Выполнено {order.completed}</Text>
                    <Text style={styles.object}>{order.object}</Text>
                    <Text style={styles.object}>{order.executors.join(", ")}</Text>
                </View>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 0.4,
    },
    price: {
        fontSize: 26,
    },
    status: {
        marginLeft: 5,
        fontSize: 16,
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    date: {
        fontSize: 13,
        color: '#b0b0b0',
    },
    object: {
        marginTop: 5,
        fontSize: 16,
    },
});