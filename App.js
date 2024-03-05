import { SafeAreaView, Text, StyleSheet } from 'react-native'
import {Album} from './components/Album'

 export default function App()  {
  return(
    <SafeAreaView>
      <Text style={styles.title}>Albuns da Banda Oficina G3</Text>

      <Album
      albumName={'Indiferença'}
      year={'(1996)'}
      musics={['1. Davi,' , '2. Fé,' , '3. Magia Alguma,' , '4. Glória,' , '5. Profecias']}
      />

      <Album
      albumName={'Além do que os olhos podem ver (2004)'}
      
      musics={['1. Intro,' , '2. Mais Alto,' , '3. Réu ou Juiz,' , '4. Meu Legado,' , '5. Através da Porta']}
      />

      <Album
      albumName={'Depois da Guerra (2008)'}
      musics={['1. D.A.G,' , '2. Meus Próprios Meios,' , '3. Eu Sou,' , '4. Meus Passos,' , '5. Continuar']}
      />

</SafeAreaView>
  )
 }

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '700'
  }
})