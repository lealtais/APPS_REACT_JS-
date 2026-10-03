import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from './styles'

function Anuncios(){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&q=80' }}
            style={styles.foto}
          />
          <Text style={styles.nomeProduto}>iPhone 15 Pro</Text>
          <Text style={styles.preco}>R$ 6.299,00</Text>
          <Text style={styles.descricao}>128GB Titânio Natural com tela Super Retina XDR de 6.1 pol.</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80' }}
            style={styles.foto}
          />
          <Text style={styles.nomeProduto}>PlayStation 5</Text>
          <Text style={styles.preco}>R$ 3.699,00</Text>
          <Text style={styles.descricao}>Console Sony 825GB SSD com 1 Controle sem fio DualSense.</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80' }}
            style={styles.foto}
          />
          <Text style={styles.nomeProduto}>Notebook Dell</Text>
          <Text style={styles.preco}>R$ 3.199,00</Text>
          <Text style={styles.descricao}>Intel Core i5, 16GB RAM, SSD 512GB e Tela Full HD de 15.6 pol.</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' }}
            style={styles.foto}
          />
          <Text style={styles.nomeProduto}>Smartwatch Pro</Text>
          <Text style={styles.preco}>R$ 1.299,00</Text>
          <Text style={styles.descricao}>Monitoramento de batimentos, GPS integrado e à prova d'água.</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' }}
            style={styles.foto}
          />
          <Text style={styles.nomeProduto}>Headset Bluetooth</Text>
          <Text style={styles.preco}>R$ 899,00</Text>
          <Text style={styles.descricao}>Cancelamento de ruído ativo, graves potentes e bateria 30h.</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Anuncios
