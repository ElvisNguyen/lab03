import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SummaryPage({ route }) {

    const { transactions } = route.params

    const getHighestTransaction = (transactions) => {
        let highestTransaction = transactions[0]
        let lowestTransaction = transactions[0]

        for (let i = 1; i < transactions.length; i++) {
            if (transactions[i].transactionAmount > highestTransaction.transactionAmount) {
                highestTransaction = transactions[i]
            }

            if (transactions[i] < lowestTransaction.transactionAmount) {
                lowestTransaction = transactions[i]
            }
        }
        return highestTransaction
    }


    const getLowestTransaction = (transactions) => {
        let lowestTransaction = transactions[0]

        for (let i = 1; i < transactions.length; i++) {
            if (transactions[i] < lowestTransaction.transactionAmount) {
                lowestTransaction = transactions[i]
            }
        }
        return lowestTransaction
    }

    const getTotalExpenditure = (transactions) => {
        let expenditure = 0.00

        for (let i = 0; i < transactions.length; i++) {
            expenditure += transactions[i].transactionAmount

        }
        return expenditure
    }

    let highest = getHighestTransaction(transactions)
    let lowest = getLowestTransaction(transactions)
    let totalExpenditure = getTotalExpenditure(transactions)

    return (
        <View style={styles.container}>
            <Text style={styles.headers}>Number of Transactions</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>{transactions.length}</Text>
            </View>

            <Text style={styles.headers}>Transaction Total</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>${totalExpenditure.toFixed(2)}</Text>
            </View>


            <Text style={styles.headers}>Highest Transaction</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}>{highest.transactionName}</Text>
                <Text style={styles.text}>${highest.transactionAmount}</Text>
            </View>

            <Text style={styles.headers}>Lowest Transaction</Text>
            <View style={styles.transactionItem}>
                <Text style={styles.text}>{lowest.transactionName}</Text>
                <Text style={styles.text}>${lowest.transactionAmount.toFixed(2)}</Text>
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

export default SummaryPage
