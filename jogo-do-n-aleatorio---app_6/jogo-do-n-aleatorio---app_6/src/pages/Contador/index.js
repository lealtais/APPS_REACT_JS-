import { View, Text, TextInput, Image } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao'

function Contador(){


 const [cont, setCont] = useState(0)

  function random(){
    setCont(Math.floor(Math.random() * 11))
    return;
  }


  return(
    <View>
      <Text style={styles.titulo}>Jogo do nº Aleatório</Text>
      <Image source={{ uri: 'https://thumbs.dreamstime.com/b/povos-3d-brancos-com-um-ponto-de-interroga%C3%A7%C3%A3o-27709668.jpg' }}style={{ width: 200, height: 300, alignSelf: 'center' }}  />

      <Text style={styles.Text}>Pense em um número de 0 a 10</Text>

      <Botao titulo='Descobrir' cor='green' funcao={random}/>
      
      <Text style={styles.resultado}>Resultado: {cont}</Text>

    </View>
  )
}

export default Contador