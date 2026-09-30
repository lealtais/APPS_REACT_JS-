import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native';
import Componente1 from './src/componente1'
import Dadospessoais from './src/dadospessoais'
import Formacao from './src/formacao'
import Experiencia from './src/experiencia'
import Projetos from './src/projetos'

function App(){


  return(
     <ScrollView>

        <Dadospessoais/>
        <Formacao/>
        <Experiencia/>
        <Projetos/>

      </ScrollView>
  )
}




export default App;
