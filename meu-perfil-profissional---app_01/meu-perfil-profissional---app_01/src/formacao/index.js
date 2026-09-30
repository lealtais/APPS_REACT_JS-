import { View, Text} from 'react-native';
import {styles} from './style'


function Formacao(){
    let item1 = 'ETEC Aristóteles Ferreira - Técnico em Programação de Jogos Digitais';
    let item2 = 'FATEC Rubens Lara - Sistemas para Internet';


  return(
     <View>
        <Text style={styles.titulo}>
          Formação
        </Text>
        <Text style={styles.descricao}>{item1}</Text>
        <Text style={styles.descricao}>{item2}</Text>
      </View>
  )
}




export default Formacao;
