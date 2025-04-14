import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/capa.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Invencible </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">“Invencível” é uma série de quadrinhos criada 
            por Robert Kirkman, que segue a história de Mark Grayson, um adolescente que descobre 
            que herdou os poderes de seu pai, Omni-Man, um super-herói de origem específico. À medida 
            que Mark começa a explorar suas habilidades e a assumir uma identidade de Invencível, ele 
            se depara com os desafios típicos da adolescência, como relacionamentos e responsabilidades, 
            além de enfrentar ameaças superpoderosas que colocam em risco não apenas sua vida, mas também 
            a de seus entes queridos. A série se destaca por sua abordagem realista e muitas vezes brutal 
            do gênero de super-heróis, explorando temas como moralidade, lealdade e as consequências das ações 
            dos heróis. Com reviravoltas impactantes e um enredo que mistura ação, drama e humor, “Invencível” 
            oferece uma visão única e envolvente do mundo dos super-heróis, desafiando as expectativas do público 
            e revelando a complexidade das relações familiares e das escolhas que moldam o destino de um herói.
</ThemedText> 
         {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"> </ThemedText>
        <ThemedText>
      
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
