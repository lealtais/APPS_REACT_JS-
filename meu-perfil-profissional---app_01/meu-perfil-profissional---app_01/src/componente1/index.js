import { View, Text } from 'react-native'
import {styles} from './styles'


function Componente01(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Componente 01</Text>
      <Text>Componente 01</Text>
    </View>
  )
}


export default Componente01;
