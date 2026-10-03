import { View, Text, FlatList } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

function Vagas(){
  const [vagas, setVagas] = useState([
    {
      id: '1',
      titulo: 'Desenvolvedor Backend',
      salario: 'R$ 3.000,00',
      descricao: 'Desenvolvimento de APIs RESTful utilizando Node.js, Express e PostgreSQL.',
      contato: 'vagas@backendtech.com.br'
    },
    {
      id: '2',
      titulo: 'Engenheiro de Dados',
      salario: 'R$ 3.000,00',
      descricao: 'Construção de pipelines de dados ETL utilizando Python, SQL e AWS.',
      contato: 'dados@corporativo.com.br'
    },
    {
      id: '3',
      titulo: 'Desenvolvedor Frontend',
      salario: 'R$ 3.200,00',
      descricao: 'Criação de interfaces responsivas e acessíveis com React, Next.js e TypeScript.',
      contato: 'frontend@startup.com'
    },
    {
      id: '4',
      titulo: 'Desenvolvedor Mobile',
      salario: 'R$ 4.000,00',
      descricao: 'Desenvolvimento e manutenção de aplicativos móveis utilizando React Native.',
      contato: 'mobile@apptech.io'
    },
    {
      id: '5',
      titulo: 'Analista de QA',
      salario: 'R$ 2.800,00',
      descricao: 'Elaboração de cenários de testes manuais e automatizados para garantia de qualidade.',
      contato: 'vagas@qatech.com.br'
    }
  ])

  function renderVaga({ item }){
    return(
      <View style={styles.card}>
        <Text style={styles.tituloVaga}>{item.titulo}</Text>
        <Text style={styles.texto}><Text style={styles.rotulo}>Salário: </Text>{item.salario}</Text>
        <Text style={styles.texto}><Text style={styles.rotulo}>Descrição: </Text>{item.descricao}</Text>
        <Text style={styles.texto}><Text style={styles.rotulo}>Contato: </Text>{item.contato}</Text>
      </View>
    )
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>

      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={renderVaga}
        showsVerticalScrollIndicator={false}
        style={styles.lista}
      />
    </View>
  )
}

export default Vagas
