import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  titulo:{
    fontSize: 28,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linha:{
    marginBottom: 15,
  },
  rotulo:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  input:{
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
  },
  pickerContainer:{
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  secao:{
    marginVertical: 15,
  },
  linhaLimite:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  valorLimite:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  linhaSwitch:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  areaBotao:{
    marginTop: 10,
    marginBottom: 25,
  },
  resultadoContainer:{
    borderTopWidth: 1,
    borderTopColor: '#aaa',
    paddingTop: 15,
    marginBottom: 40,
  },
  tituloResultado:{
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dado:{
    fontSize: 16,
    marginBottom: 6,
  }
})

export { styles }
