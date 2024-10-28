import { calculateCost } from '@/lib/calculate-cost';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Result() {
  const params = useLocalSearchParams();

  const { product, packagingPrice, packagingPrice2, baseProduct, literYield } = params;
  const [custoPorLitro, setCustoPorLitro] = useState(0);
  const [custoPorLitro1, setCustoPorLitro1] = useState(0);
  const [custoPorLitro2, setCustoPorLitro2] = useState(0);
  const [precoVendaPorLitro, setPrecoVendaPorLitro] = useState(0);
  const [precoVendaPorLitro1, setPrecoVendaPorLitro1] = useState(0);
  const [precoVendaPorLitro2, setPrecoVendaPorLitro2] = useState(0);

  useEffect(() => {
    handleCalculateCost();
  }, [params]);

  function handleCalculateCost() {
    if (product === "Amaciante" || product === "Desinfetante" || product === "Detergente") {
      const custo = calculateCost({
          valorProdutoBase: Number(baseProduct),
          rendimentoLitros: Number(literYield),
      });
      setCustoPorLitro(custo);
      setPrecoVendaPorLitro((custo * 2)+Number(packagingPrice));
    } else if (product === "Sabão líquido") {
      const custo1 = calculateCost({
          valorProdutoBase: Number(baseProduct),
          rendimentoLitros: Number(literYield),
      });
      const custo2 = calculateCost({
          valorProdutoBase: Number(baseProduct),
          rendimentoLitros: Number(literYield),
      });
      setCustoPorLitro1(custo1);
      setCustoPorLitro2(custo2);
      setPrecoVendaPorLitro1((custo1 * 2) + Number(packagingPrice));
      setPrecoVendaPorLitro2((custo2 * 3) + Number(packagingPrice2));
    } else {
      const custo = calculateCost({
        valorProdutoBase: Number(baseProduct),
        rendimentoLitros: Number(literYield),
      });
      setCustoPorLitro(custo);
      setPrecoVendaPorLitro((custo * 5 ) + Number(packagingPrice));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title1}>
          Produto: <Text style={{ color: "#E77C1F" }}>{product}</Text>
            </Text>
      <View style={styles.textBox}>
        {product !== "Água sanitária" && product !== "Sabão líquido" ? (
          <View style={{ gap: 32 }}>
            <Text style={styles.title}>
              O custo de produção por litro é de: 
              <Text style={{ color: "#E77C1F" }}> R$ {custoPorLitro.toFixed(2)}</Text>
            </Text>
            <Text style={styles.title}>
              Custo da embalagem de 2L: 
              <Text style={{ color: "#E77C1F" }}> R$ {precoVendaPorLitro.toFixed(2)}</Text>
            </Text>
          </View>
        ) : product === "Sabão líquido" ? (
          <View style={{ gap: 32 }}>
            <Text style={styles.title}>
              O custo de produção por litro é de: 
              <Text style={{ color: "#E77C1F" }}> R$ {custoPorLitro1.toFixed(2)}</Text>
            </Text>
            <Text style={styles.title}>
              Custo da embalagem de 2L:
              <Text style={{ color: "#E77C1F" }}> R$ {precoVendaPorLitro1.toFixed(2)}</Text>
            </Text>
            <Text style={styles.title}>
              Custo da embalagem de 3L:
              <Text style={{ color: "#E77C1F" }}> R$ {precoVendaPorLitro2.toFixed(2)}</Text>
            </Text>
          </View>
        ) : (
          <View style={{ gap: 32 }}>
              <Text style={styles.title}>
                O custo de produção por litro é de: 
                <Text style={{ color: "#E77C1F" }}> R$ {custoPorLitro.toFixed(2)}</Text>
              </Text>
              <Text style={styles.title}>
                Custo da embalagem de 5L: 
                <Text style={{ color: "#E77C1F" }}> R$ {precoVendaPorLitro.toFixed(2)}</Text>
              </Text>
            </View>
        )}
      </View>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={{ ...styles.subtitle, color: "#09090B" }}>Calcular novamente</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({ 
  container : { 
    flex: 1, 
    backgroundColor: '#09090B', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 48, 
  }, 
  textBox: { padding: 24, gap: 8 }, 
  title1: { 
    color: '#fff', 
    fontSize : 24, 
    fontWeight: '700', 
    textAlign: 'center', 
    fontFamily: 'Inter_700Bold', 
  }, 
  title: { 
    color: '#fff', 
    fontSize : 18,
    marginBottom: 24,
    fontWeight: '700', 
    textAlign: 'center', 
    fontFamily: 'Inter_700Bold', 
  }, 
  subtitle: { 
    color: '#A8A29D', 
    fontSize: 14, 
    textAlign: 'center', 
    fontWeight: '500', 
    fontFamily : 'Inter_400Medium', 
  }, 
  button: { 
    width: '90%', 
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
});