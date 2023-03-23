import {useState} from 'react';
import {View, Text, SafeAreaView, Button, StatusBar, StyleSheet, TextInput, Pressable, Animated, TouchableOpacity, Keyboard} from 'react-native';

function App() {

  const [primeiroInput, setPrimeiroInput] = useState(null);
  const [segundoInput, setSegundoInput] = useState(null);

  const [calculo, setCalculo] = useState(0);

  const soma = () => {
    setCalculo(Number(primeiroInput) + Number(segundoInput));
    setPrimeiroInput(null);
    setSegundoInput(null);
    Keyboard.dismiss();
  };

  const subtracao = () => {
    setCalculo(Number(primeiroInput) - Number(segundoInput));
    setPrimeiroInput(null);
    setSegundoInput(null);
    Keyboard.dismiss();
  };

  const multiplicacao = () => {
    setCalculo(Number(primeiroInput) * Number(segundoInput));
    setPrimeiroInput(null);
    setSegundoInput(null);
    Keyboard.dismiss();
  };

  const divisao = () => {
    setCalculo(Number(primeiroInput) / Number(segundoInput));
    setPrimeiroInput(null);
    setSegundoInput(null);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Calculadora</Text>

        <Text style={estilo.texto}>Primeiro número:</Text>
        <TextInput style={estilo.input} keyboardType='numeric' value={primeiroInput} onChangeText={setPrimeiroInput}/>

        <Text style={estilo.texto}>Segundo número:</Text>
        <TextInput style={estilo.input} keyboardType='numeric' value={segundoInput} onChangeText={setSegundoInput}/>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={estilo.botao} onPress={soma}> 
            <Text style={estilo.txtBotao}>Adição</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={estilo.botao} onPress={subtracao}> 
            <Text style={estilo.txtBotao}>Subtração</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={estilo.botao} onPress={multiplicacao}> 
            <Text style={estilo.txtBotao}>Multiplicação</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={estilo.botao} onPress={divisao}>
            <Text style={estilo.txtBotao}>Divisão</Text>
          </TouchableOpacity>
        </View>

        <Text style={estilo.resultado}>Resultado: {isNaN(calculo) ? 0 : calculo}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'black'
  },

  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  },

    texto: {
    marginLeft: 12,
    fontSize: 18,
    color: 'white'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'grey',
    color: 'white'
  },

  botao: {
    width: 200,
    padding: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },

  txtBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    active: 'blue'
  },

  resultado: {
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 40
  }
});