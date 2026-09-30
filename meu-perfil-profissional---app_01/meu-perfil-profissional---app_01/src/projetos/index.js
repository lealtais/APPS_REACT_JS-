import { View, Text, Image} from 'react-native';
import {styles} from './style'


function Projetos(){
    let item1 = 'Chemical Chameleon - Videogame';
    let item2 = 'Maré Baixa - Animação';


  return(
     <View>
        <Text style={styles.titulo}>Projetos</Text>
        <Text style={styles.descricao}>{item1}</Text>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgteO54H6z_mHtwhcks7vVA0SFSiXrdMK7B3toYt4QJg&s'}} style={styles.imagem}/>
        <Text style={styles.descricao}>{item2}</Text>
        <Image source={{uri: 'https://i.ytimg.com/vi/qPofFO2ow7E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDWagcWzBW3_Q5MHTAh3XgZb_JvcQ'}} style={styles.imagem}/>
      </View>
  )
}




export default Projetos;
