import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
  },
  titulo:{
    fontSize: 30,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scroll:{
    paddingLeft: 10,
    paddingRight: 10,
  },
  card:{
    borderWidth: 1,
    borderColor: '#000',
    width: 220,
    padding: 15,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  foto:{
    width: 180,
    height: 180,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  nomeProduto:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  preco:{
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao:{
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
  }
})

export { styles }
