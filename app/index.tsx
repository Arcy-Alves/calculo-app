import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const emojisWithIcons = [
  {title: 'Sabão líquido'},
  {title: 'Água sanitária'},
  {title: 'Amaciante'},
  {title: 'Desinfetante'},
  {title: 'Detergente'},
];
export default function Index() {
  const [product, setProduct] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>
          Custo de{"\n"}
          Mercadoria Vendida (CMV)
        </Text>
        <Text style={styles.subtitle}>
          Comece escolhendo o produto para calcular        
        </Text>
      </View>
      <View style={{...styles.textBox, marginTop: 48}}>
        <Text style={{...styles.subtitle, color: "#fff", textAlign: "left"}}>
          Selecione o produto
        </Text>
        <SelectDropdown
          data={emojisWithIcons}
          onSelect={(selectedItem) => setProduct(selectedItem.title)}
          renderButton={(selectedItem) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                {selectedItem && (
                  <MaterialCommunityIcons name="bottle-soda-classic-outline" size={24} color="#fff" />                )}
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || 'Selecione o produto'}
                </Text>
                <FontAwesome name="caret-down" size={24} color="#27272A" />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View key={index} style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                <MaterialCommunityIcons name="bottle-soda-classic-outline" size={24} color="#fff" />
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
        <Link href={{
          pathname: "/form",
          params: {
            product,
          }
        }} asChild>
          <Pressable style={styles.button}>
            <Text style={{...styles.subtitle, color: "#09090B"}}>Avançar</Text>
          </Pressable>
        </Link>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48,
  },
  textBox: {
    gap: 8
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  subtitle: {
    color: '#A8A29D',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Inter_400Medium',
  },
  dropdownButtonStyle: {
    width: "90%",
    height: 40,
    backgroundColor: '#09090B',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#27272A',
    borderWidth: 1,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter_400Medium',
    color: '#fff',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#09090B',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter_400Medium',
    color: '#fff',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48
  }
})