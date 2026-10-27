import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

const App = () => {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahanPesanan = () => {
    setTotalPesanan((prev) => prev + 1);
  };

  return (
    <View style={Styles.container}>
      <Text style={styles.header} Cafe Kucing></Text>
      <Text style={styles.subHeader}>Pilih Menu Favoritmu</Text>

      <OrderSummary totalCount={totalPesanan}/>

      <ScrollView>'
        {DAFTER_MENU.map((menu) => (
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

