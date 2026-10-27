import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);
  const handleTambah = () => {
    setQty(qty + 1);
    onTambahPesanan();
  };
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.qty}>Dipesan: {qty}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleTambah}>
        <Text style={styles.buttonText}>Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  nama: { fontSize: 16, fontWeight: 'bold', color: '#1f2937' },
  harga: { fontSize: 14, color: '#6b7280', marginTop: 2 },
  qty: { fontSize: 13, color: '#9a3412', marginTop: 4 },
  button: { backgroundColor: '#ea580c', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default MenuItem;
