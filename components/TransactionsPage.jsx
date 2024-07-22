import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import TransactionItem from './TransactionItem';
import { useNavigation } from '@react-navigation/native';

function TransactionsPage({ route }) {
    const { transactions } = route.params

    const navigation = useNavigation()

    const handleTransactionPress = (transaction) => {
        navigation.navigate('TransactionDetails', { transaction })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handleTransactionPress(item)}>
                        <TransactionItem transaction={item} />
                    </TouchableOpacity>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    }
})

export default TransactionsPage
