import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

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
        <ThemedText type="title" style={styles.titleText}>Os Melhores Quadrinhos de Invencível</ThemedText>
      </ThemedView>
      <Image 
        source={require('@/assets/images/primeira.webp')} 
        style={{ 
          alignSelf: 'center',
          width: 380,
          height: 300,
          resizeMode: 'contain'
        }} 
      />
      <Collapsible title="A primeira HQ">
        <ThemedText>
          Invincible Vol. 1, intitulado "Family Matters", apresenta a origem de Mark Grayson, um adolescente comum que descobre 
          que seu pai, Nolan Grayson, é na verdade Omni-Man, o super-herói mais poderoso da Terra. Quando Mark começa a desenvolver 
          seus próprios poderes, ele precisa aprender a equilibrar a vida de estudante com suas novas responsabilidades como o herói
           Invincible.
        </ThemedText>
        
        <ThemedText>
          No entanto, seu treinamento é colocado à prova quando ameaças alienígenas e vilões perigosos surgem, testando sua força 
          e coragem. Enquanto isso, segredos sombrios sobre o passado de Omni-Man começam a surgir, colocando em xeque tudo o que 
          Mark acreditava sobre sua família e o verdadeiro propósito de seu pai na Terra.
        </ThemedText>
        
        <ThemedText>
          Escrita por Robert Kirkman e com arte de Cory Walker, esta primeira graphic novel de Invincible mistura ação intensa, 
          drama familiar e reviravoltas chocantes, redefinindo o que significa ser um herói. Uma história cheia de emoção, 
          consequências reais e um final que deixará você ansioso pela próxima página.
        </ThemedText>
        
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Image 
        source={require('@/assets/images/entrada.jpg')} 
        style={{ 
          alignSelf: 'center',
          width: 380,
          height: 300,
          resizeMode: 'contain',
          marginTop: 16, 
          marginBottom: 16 
        }} 
      />

<Collapsible title="Ivencível #5">
  <ThemedText>
    Em seu maior teste como herói, Mark Grayson — o adolescente que herdou os poderes de seu pai, o lendário Omni-Man decide 
    agir sozinho contra os perigosos Sangue-Bombas, um grupo de supervilões que aterroriza a cidade. Porém, sua inexperiência 
    quase se torna sua ruína: a luta é brutal, e Invencível é gravemente ferido, descobrindo da pior forma que ser um herói exige 
    mais do que apenas superpoderes.
  </ThemedText>
  
  <ThemedText>
    Omni-Man, furioso com a imprudência do filho, o humilha publicamente, revelando uma faceta cruel em seu 
    treinamento. Enquanto isso, Mark tenta conciliar sua vida dupla — entre os dramas da escola, seu interesse por Amber e 
    a crescente preocupação de sua mãe, Debbie. Mas o conflito com Nolan aprofunda-se, e segredos familiares começam a surgir, 
    sugerindo que o maior herói da Terra esconde algo sinistro.
  </ThemedText>
</Collapsible>
      
<Image 
        source={require('@/assets/images/fim.jpg')} 
        style={{ 
          alignSelf: 'center',
          width: 380,
          height: 300,
          resizeMode: 'contain',
          marginTop: 16, 
          marginBottom: 16 
        }} 
      />

      <Collapsible title="Invencível #75">
        <ThemedText>
        Após anos de conflitos, Mark Grayson finalmente assume seu lugar como o novo Imperador da Viltrumita, herdando um legado 
        de violência e dominação. Mas o poder traz consigo decisões impossíveis: enquanto tenta governar com justiça, facções rebeldes
         dentro do império ameaçam desestabilizar seu regime.
        </ThemedText>
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
});