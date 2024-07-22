import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
    return (
        <View style={styles.transactionItem}>
            <Text style={styles.transactionName}>{transaction.transactionName}</Text>
            <Text style={styles.transactionPrice}>${transaction.transactionAmount.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    transactionItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
    transactionName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    transactionPrice: {
        fontSize: 14,
    }
})

export default TransactionItem
