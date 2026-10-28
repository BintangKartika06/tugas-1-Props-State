import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({totalCount}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.total}>Total item dipesan: {totalCount}</Text>
            {totalCount >= 5 && (
                <Text style={styles.promo}>Selamat! anda mendapatkan diskon 10%</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    box: { backgroundColor: '#fff7ed', padding: 16, borderRadius: 12, marginBottom: 16 },
  total: { fontSize: 18, fontWeight: 'bold', color: '#7c2d12', textAlign: 'center' },
  promo: { marginTop: 8, fontSize: 15, color: '#15803d', fontWeight: 'bold' }
});

export default OrderSummary;