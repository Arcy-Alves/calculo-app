import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

export default function Form() {
  const router = useRouter();
  const { product } = useLocalSearchParams<{ product: string }>();

  const [packagingPrice, setPackagingPrice] = useState(0);
  const [packagingPrice2, setPackagingPrice2] = useState(0);
  const [baseProduct, setBaseProduct] = useState(0);
  const [literYield, setLiterYield] = useState(0);

  function handleResult() {
    if(!product || !packagingPrice || !baseProduct || !literYield) {
      alert("Preencha todos os campos");
      return null;
    }

    router.replace({
      pathname: '/result',
      params: {
        product, packagingPrice, packagingPrice2, baseProduct, literYield
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: "auto", width: "100%", padding: 24 }}>
        <View style={styles.textBox}>
          <Text style={styles.title}>
            Custo de{"\n"}
            Mercadoria Vendida
          </Text>
          <Text style={styles.subtitle}>
            Preencha os campos abaixo e calcule       
          </Text>
        </View>
        <View style={styles.inputbox}>
          {product === "Sabão líquido" ? (
            <View style={{...styles.textBox, gap: 24}}>
              <View>
                <Text style={{...styles.subtitle, textAlign: "left", color: "#FFF"}}>
                  Preço da embalagem de 2L
                </Text>
                <CurrencyInput
                  style={styles.input}
                  value={packagingPrice}
                  onChangeValue={(value) => value && setPackagingPrice(value)}
                  prefix="R$"
                  delimiter="."
                  separator=","
                  precision={2}
                  minValue={0}
                  placeholder='Exemplo: R$ 5,00'
                  placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
              </View>
              <View>
                <Text style={{...styles.subtitle, textAlign: "left", color: "#FFF"}}>
                  Preço da embalagem de 3L
                </Text>
                <CurrencyInput
                  style={styles.input}
                  value={packagingPrice2}
                  onChangeValue={(value) => value && setPackagingPrice2(value)}
                  prefix="R$"
                  delimiter="."
                  separator=","
                  precision={2}
                  minValue={0}
                  placeholder='Exemplo: R$ 5,00'
                  placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
              </View>
            </View>
          ) : product === "Amaciante" || product === "Desinfetante" || product === "Detergente" ? (
            <View style={styles.textBox}>
              <Text style={{...styles.subtitle, textAlign: "left", color: "#FFF"}}>
                Preço da embalagem
              </Text>
              <CurrencyInput
                style={styles.input}
                value={packagingPrice}
                onChangeValue={(value) => value && setPackagingPrice(value)}
                prefix="R$"
                delimiter="."
                separator=","
                precision={2}
                minValue={0}
                placeholder='Exemplo: R$ 5,00'
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              />
            </View>
          ) : (
            <View>
              <Text style={{...styles.subtitle, textAlign: "left", color: "#FFF"}}>
                Preço da embalagem de 5L
              </Text>
              <CurrencyInput
                style={styles.input}
                value={packagingPrice}
                onChangeValue={(value) => value && setPackagingPrice(value)}
                prefix="R$"
                delimiter="."
                separator=","
                precision={2}
                minValue={0}
                placeholder='Exemplo: R$ 5,00'
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              />
            </View>
          )
          }
          <View style={styles.textBox}>
            <Text style={{...styles.subtitle, textAlign: "left", color: "#FFF"}}>
              Valor do produto base
            </Text>
            <CurrencyInput
              style={styles.input}
              value={baseProduct}
              onChangeValue={(value) => value && setBaseProduct(value)}
              prefix="R$"
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
              placeholder='Exemplo: R$ 10,00'
              placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
          </View>
          <View style={styles.textBox}>
            <Text style={{...styles.subtitle, textAlign: "left", color: "#FFF"}}>
              Rendimento em litros
            </Text>
            <TextInput style={styles.input} 
              placeholder='Exemplo: 10'
              placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              value={literYield.toString()}
              onChangeText={(value) => setLiterYield(Number(value))}
            />
          </View>
          <TouchableOpacity onPress={() => handleResult()} style={styles.button}>
            <Text style={{...styles.subtitle, color: "#09090B"}}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48
  },
  inputbox: {
    height: "auto",
    width: '100%',
    gap: 24,
    marginTop: 48
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#27272A',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    color: '#fff',
    backgroundColor: '#09090B',
    fontFamily: 'Inter_400Medium',
  }
})