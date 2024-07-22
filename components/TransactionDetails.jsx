import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TransactionDetails = ({ route }) => {
    const { transaction } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.headers}>Transaction</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}>{transaction.transactionName}</Text>
                <Text style={styles.text}>${transaction.transactionAmount.toFixed(2)}</Text>
            </View>

            <Text style={styles.headers}>Transaction Date</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}>{transaction.transactionDate}</Text>
            </View>

            <Text style={styles.headers}>Transaction Location</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}>{transaction.transactionStore}</Text>
                <Text style={styles.text}>{transaction.transactionStoreLocation}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'flex-start',
        padding: 10,
        marginTop: 20
    },
    transactionItem: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    headers: {
        fontSize: 26,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default TransactionDetails
