import { View, Text, Image} from 'react-native';
import {styles} from './style'


function Dadospessoais(){
    let nome = 'Maria Leticia Zaborski Laurentino';


  return(
     <View>
     <Image source={'https://instagram.fssz1-1.fna.fbcdn.net/v/t51.2885-19/427396669_924626049168155_8095295888426637223_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=ZdYeGV3LUmgQ7kNvwGeeZLO&_nc_oc=AdpmotcDULqZrGE5FMlXcIKBl2tp2lny6N3hvj3OGxmtQynEadQolYjlIwC0b9lKIdyJHMS4Ht0lLT99sg42auCK&_nc_zt=24&_nc_ht=instagram.fssz1-1.fna&_nc_ss=7b6a8&oh=00_AQMQbjUSYLDJyErulCY5jRCRqVhh1uvcL17HlEtfGbwH4A&oe=6AC323CD'} style={styles.foto}/>
        <Text style={styles.titulo}>Dados Pessoais</Text>
        <Text style={styles.descricao}>{nome}</Text>
      </View>
  )
}




export default Dadospessoais;
