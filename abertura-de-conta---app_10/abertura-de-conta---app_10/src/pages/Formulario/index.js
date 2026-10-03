import { View, Text, TextInput, Button, Switch, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { styles } from './styles'

function Formulario(){
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Masculino')
  const [escolaridade, setEscolaridade] = useState('Médio')
  const [limite, setLimite] = useState(200)
  const [brasileiro, setBrasileiro] = useState(true)

  const [dadosExibidos, setDadosExibidos] = useState(null)

  function confirmar(){
    setDadosExibidos({
      nome: nome,
      idade: idade,
      sexo: sexo,
      escolaridade: escolaridade,
      limite: limite.toFixed(0),
      brasileiro: brasileiro ? 'Sim' : 'Não'
    })
  }

  return(
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <View style={styles.linha}>
        <Text style={styles.rotulo}>Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.linha}>
        <Text style={styles.rotulo}>Idade: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />
      </View>

      <View style={styles.linha}>
        <Text style={styles.rotulo}>Sexo: </Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>
      </View>

      <View style={styles.linha}>
        <Text style={styles.rotulo}>Escolaridade: </Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={escolaridade}
            onValueChange={(itemValue) => setEscolaridade(itemValue)}
          >
            <Picker.Item label="Fundamental" value="Fundamental" />
            <Picker.Item label="Médio" value="Médio" />
            <Picker.Item label="Superior" value="Superior" />
            <Picker.Item label="Pós-graduação" value="Pós-graduação" />
          </Picker>
        </View>
      </View>

      <View style={styles.secao}>
        <View style={styles.linhaLimite}>
          <Text style={styles.rotulo}>Limite: </Text>
          <Text style={styles.valorLimite}>R$ {limite.toFixed(0)}</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          step={50}
          value={limite}
          onValueChange={setLimite}
          minimumTrackTintColor="#007bff"
          maximumTrackTintColor="#ccc"
        />
      </View>

      <View style={styles.linhaSwitch}>
        <Text style={styles.rotulo}>Brasileiro: </Text>
        <Switch
          value={brasileiro}
          onValueChange={setBrasileiro}
        />
      </View>

      <View style={styles.areaBotao}>
        <Button title="Confirmar" color="#007bff" onPress={confirmar} />
      </View>

      {dadosExibidos && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.tituloResultado}>Dados informados:</Text>
          <Text style={styles.dado}><Text style={styles.rotulo}>Nome: </Text>{dadosExibidos.nome}</Text>
          <Text style={styles.dado}><Text style={styles.rotulo}>Idade: </Text>{dadosExibidos.idade}</Text>
          <Text style={styles.dado}><Text style={styles.rotulo}>Sexo: </Text>{dadosExibidos.sexo}</Text>
          <Text style={styles.dado}><Text style={styles.rotulo}>Escolaridade: </Text>{dadosExibidos.escolaridade}</Text>
          <Text style={styles.dado}><Text style={styles.rotulo}>Limite: </Text>R$ {dadosExibidos.limite}</Text>
          <Text style={styles.dado}><Text style={styles.rotulo}>Brasileiro: </Text>{dadosExibidos.brasileiro}</Text>
        </View>
      )}
    </ScrollView>
  )
}

export default Formulario
