import { View, Text, TextInput, Image } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao'

function Contador(){


 const [cont, setCont] = useState(0)
 const [vl1, setVl1] = useState()
 const [vl2, setVl2] = useState()
 

  function dividir(){
    setCont(vl1 / vl2)
  }

  function melhor(){
    if (cont < 0.7){
      return <Text>Alcool</Text>;
    }
    else{
      return <Text>Gasolina</Text>;
    }
  }

  return(
    <View>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>
      <Image source={{ uri: 'https://s1.static.brasilescola.uol.com.br/be/imagens/curiosidades/gasolina.jpg' }}style={{ width: 200, height: 200, alignSelf: 'center' }}  />

      <TextInput
          style={styles.input}
          value={vl1}
          keyboardType="numeric"
          onChangeText={setVl1}
          placeholder="Preço do Alcool"
        />

        <TextInput
          style={styles.input}
          value={vl2}
          keyboardType="numeric"
          onChangeText={setVl2}
          placeholder="Preço da Gasolina"
        />

      <Botao titulo='Calcular' cor='green' funcao={dividir}/>
      
      <Text style={styles.resultado}>Resultado: {cont}</Text>

      <Text style={{alignSelf: 'center'}}>O que vale mais a pena é: {melhor()}</Text>

    </View>
  )
}

export default Contador