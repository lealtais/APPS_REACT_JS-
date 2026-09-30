import { View, Text, TextInput, Image } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao'

function IMC(){


 const [cont, setCont] = useState(0)
 const [vl1, setVl1] = useState()
 const [vl2, setVl2] = useState()
 

  function dividir(){
    setCont(vl1 / (vl2 * vl2))
  }

  function melhor(){
    if (cont < 18.5){
      return <Text>abaixo do peso</Text>;
    }
    else if (cont < 24.9){
      return <Text>com peso normal</Text>;
    }else if (cont < 29.9){
      return <Text>com sobrepeso</Text>;
    }else if (cont < 34.9){
      return <Text>com obesidade grau I</Text>;
    }else if (cont < 39.9){
      return <Text>com obesidade grau II</Text>;
    }else{
      return <Text>com obesidade mórbida</Text>
    }
  }

  return(
    <View>
      <Text style={styles.titulo}>Cálculo de IMC</Text>
      <Image source={{ uri: 'https://patient.boehringer-ingelheim.com/br/abracar-a-vida/sites/default/files/2025-10/tabela-imc.png' }}style={{ width: 150, height: 50, alignSelf: 'center' }}  />

      <TextInput
          style={styles.input}
          value={vl1}
          keyboardType="numeric"
          onChangeText={setVl1}
          placeholder="Peso"
        />

        <TextInput
          style={styles.input}
          value={vl2}
          keyboardType="numeric"
          onChangeText={setVl2}
          placeholder="Altura"
        />

      <Botao titulo='Calcular' cor='green' funcao={dividir}/>
      
      <Text style={styles.resultado}>Resultado: {cont}</Text>

      <Text style={{alignSelf: 'center'}}>Você está {melhor()}</Text>

    </View>
  )
}

export default IMC