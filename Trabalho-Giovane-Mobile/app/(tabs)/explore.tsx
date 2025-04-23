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
        <ThemedText type="title" style={styles.titleText}>Quadrinhos de Invencível</ThemedText>
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
        
        <Image 
        source={require('@/assets/images/entrada.jpg')} 
        style={{ 
          alignSelf: 'center',
          width: 380,
          height: 300,
          resizeMode: 'contain'
        }} 
      />

        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Ivencível #5">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
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