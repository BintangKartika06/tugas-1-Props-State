import React from 'react';
import { View, Text, StyleSheet } from 'React Native';

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