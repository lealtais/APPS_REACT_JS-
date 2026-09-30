import { View, Text, TextInput } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao'

function Contador(){


 const [cont, setCont] = useState(0)
 const [vl1, setVl1] = useState()
 const [vl2, setVl2] = useState()
 


  function multiplicar(){
    setCont(vl1 * vl2)
  }

  return(
    <View>
      <Text style={styles.titulo}>Multiplicador</Text>

      <TextInput
          style={styles.input}
          value={vl1}
          keyboardType="numeric"
          onChangeText={setVl1}
        />

        <TextInput
          style={styles.input}
          value={vl2}
          keyboardType="numeric"
          onChangeText={setVl2}
        />

      <Botao titulo='Multiplicar' cor='green' funcao={multiplicar}/>
      
      <Text style={styles.resultado}>Resultado: {cont}</Text>


    </View>
  )
}

export default Contador