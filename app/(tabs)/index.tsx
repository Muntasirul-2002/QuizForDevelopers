import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.welcomeContainer}>
        <ThemedText type="title" style={styles.welcomeTitle}>
          Hello! 👋
        </ThemedText>
        <ThemedText type="subtitle" style={styles.welcomeSubtitle}>
          Welcome to Quiz for Developers
        </ThemedText>
        <ThemedText style={styles.welcomeDescription}>
          Test your programming knowledge with our interactive quizzes covering various development topics, languages, and frameworks.
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.featureContainer}>
        <ThemedText type="subtitle" style={styles.featureTitle}>
          What you can do:
        </ThemedText>
        <ThemedView style={styles.featureItem}>
          <ThemedText>📚 Take quizzes on different programming topics</ThemedText>
        </ThemedView>
        <ThemedView style={styles.featureItem}>
          <ThemedText>🎯 Track your progress and scores</ThemedText>
        </ThemedView>
        <ThemedView style={styles.featureItem}>
          <ThemedText>🚀 Improve your development skills</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.getStartedContainer}>
        <ThemedText type="subtitle">Ready to get started?</ThemedText>
        <ThemedText style={styles.getStartedText}>
          Tap the "Explore" tab to browse available quizzes and begin your learning journey!
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  welcomeTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#a855f7',
  },
  welcomeDescription: {
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: 20,
  },
  featureContainer: {
    marginBottom: 30,
  },
  featureTitle: {
    marginBottom: 15,
  },
  featureItem: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  getStartedContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  getStartedText: {
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
});
