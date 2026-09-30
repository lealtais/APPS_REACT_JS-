import { View, Text} from 'react-native';
import {styles} from './style'


function Experiencia(){
    let item1 = 'Central de Fretes - Guia de Turismo';
    let item2 = 'InPulso - Análista de dados de campanhas e métricas web';


  return(
     <View>
        <Text style={styles.titulo}>
          Experiência
        </Text>
        <Text style={styles.descricao}>{item1}</Text>
        <Text style={styles.descricao}>{item2}</Text>
      </View>
  )
}




export default Experiencia;
