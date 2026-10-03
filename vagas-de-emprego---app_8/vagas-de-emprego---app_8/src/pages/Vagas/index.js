import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'

function Vagas(){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.tituloVaga}>Desenvolvedor Backend</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Salário: </Text>R$ 3.000,00</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Descrição: </Text>Desenvolvimento de APIs RESTful utilizando Node.js, Express e PostgreSQL.</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Contato: </Text>vagas@backendtech.com.br</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tituloVaga}>Engenheiro de Dados</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Salário: </Text>R$ 3.000,00</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Descrição: </Text>Construção de pipelines de dados ETL utilizando Python, SQL e AWS.</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Contato: </Text>dados@corporativo.com.br</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tituloVaga}>Desenvolvedor Frontend</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Salário: </Text>R$ 3.200,00</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Descrição: </Text>Criação de interfaces responsivas e acessíveis com React, Next.js e TypeScript.</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Contato: </Text>frontend@startup.com</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tituloVaga}>Desenvolvedor Mobile</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Salário: </Text>R$ 4.000,00</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Descrição: </Text>Desenvolvimento e manutenção de aplicativos móveis utilizando React Native.</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Contato: </Text>mobile@apptech.io</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.tituloVaga}>Analista de QA</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Salário: </Text>R$ 2.800,00</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Descrição: </Text>Elaboração de cenários de testes manuais e automatizados para garantia de qualidade.</Text>
          <Text style={styles.texto}><Text style={styles.rotulo}>Contato: </Text>vagas@qatech.com.br</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Vagas
