import react from 'react';
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
}
