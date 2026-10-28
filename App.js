import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahPesanan = () => {
    setTotalPesanan((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kafe Djaya</Text>
      <Text style={styles.subHeader}>Pilih menu favoritmu</Text>

      <OrderSummary totalCount={totalPesanan} />

      <ScrollView>
        {DAFTAR_MENU.map((menu) => (
          <MenuItem
            key={menu.id}
            nama={menu.nama}
            harga={menu.harga}
            onTambahPesanan={handleTambahPesanan}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fffbf5', padding: 20, paddingTop: 60 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#7c2d12' },
  subHeader: { fontSize: 14, color: '#6b7280', marginBottom: 16 },
});

export default App;