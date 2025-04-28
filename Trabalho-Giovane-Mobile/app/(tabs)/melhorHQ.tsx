import { StyleSheet, Image } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/capa.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>A Guerra Invencível</ThemedText>
      </ThemedView>
      <Image 
        source={require('@/assets/images/proud.webp')} 
        style={styles.mainImage} 
      />
      <Collapsible title="A Guerra Invencível">
        <ThemedText>
          A Terra está à beira do colapso após Angstrom Levy, um vilão com capacidade de viajar entre dimensões, invocar centenas 
          de versões alternativas do Invencível de realidades paralelas. Muitos desses "Marcos" são tirânicos, assassinos ou 
          completamente instáveis, e começam a devastar o planeta.
        </ThemedText>
        <ThemedText>
          No entanto, seu treinamento é colocado à prova quando ameaças alienígenas e vilões perigosos surgem, testando sua força 
          e coragem. Enquanto isso, segredos sombrios sobre o passado de Omni-Man começam a surgir, colocando em xeque tudo o que 
          Mark acreditava sobre sua família e o verdadeiro propósito de seu pai na Terra.
        </ThemedText>
      </Collapsible>
      <Collapsible title="O que acontece com Angstrom Levy">
        <ThemedText>
          Sem alternativas, Mark percebe que a única maneira de parar a invasão multidimensional é matar Angstrom 
          Levy, já que ele é a fonte do problema. No entanto, Levy está protegido por vários Invencíveis alternativos.  
        </ThemedText>
        <ThemedText>
          Em um ato desesperado, Mark arranca a cabeça de Levy na frente de todos, matando-o instantaneamente. Com a morte de Levy, 
          todos os Invencíveis de outras dimensões são teleportados de volta para seus universos, mas o estrago já está feito.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Consequências">
        <ThemedText>
          O mundo está em ruínas, com cidades destruídas e incontáveis mortes.
        </ThemedText>
        <ThemedText>
          Cecil Stedman (líder da Global Defense Agency) e outros heróis começam a lidar com os destroços, mas a humanidade nunca mais 
          será a mesma.
        </ThemedText>
        <Image 
          source={require('@/assets/images/cidade.jpg')} 
          style={styles.mainImage} 
        />
      </Collapsible>
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  titleText: {
    textAlign: 'center',
  },
  mainImage: {
    alignSelf: 'center',
    width: 380,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});