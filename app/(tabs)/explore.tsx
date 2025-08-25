import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Quiz Categories
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.categoryContainer}>
        <ThemedView style={styles.categoryCard}>
          <ThemedText type="subtitle">🚀 JavaScript</ThemedText>
          <ThemedText style={styles.categoryDescription}>
            Test your knowledge of JavaScript fundamentals, ES6+, and modern features.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.categoryCard}>
          <ThemedText type="subtitle">⚛️ React</ThemedText>
          <ThemedText style={styles.categoryDescription}>
            Components, hooks, state management, and React best practices.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.categoryCard}>
          <ThemedText type="subtitle">📱 React Native</ThemedText>
          <ThemedText style={styles.categoryDescription}>
            Mobile development concepts, navigation, and platform-specific features.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.categoryCard}>
          <ThemedText type="subtitle">🎨 CSS</ThemedText>
          <ThemedText style={styles.categoryDescription}>
            Styling, layouts, animations, and modern CSS techniques.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.categoryCard}>
          <ThemedText type="subtitle">🔧 Node.js</ThemedText>
          <ThemedText style={styles.categoryDescription}>
            Server-side JavaScript, APIs, and backend development concepts.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.categoryCard}>
          <ThemedText type="subtitle">🗄️ Databases</ThemedText>
          <ThemedText style={styles.categoryDescription}>
            SQL, NoSQL, database design, and data modeling concepts.
          </ThemedText>
        </ThemedView>
      </ThemedView>
      
      <ThemedView style={styles.comingSoonContainer}>
        <ThemedText type="subtitle" style={styles.comingSoonTitle}>
          Coming Soon! 🎯
        </ThemedText>
        <ThemedText style={styles.comingSoonText}>
          More quiz categories and interactive features are being developed.
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    color: '#a855f7',
  },
  categoryContainer: {
    marginBottom: 30,
  },
  categoryCard: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(168, 85, 247, 0.05)',
    borderLeftWidth: 4,
    borderLeftColor: '#a855f7',
  },
  categoryDescription: {
    marginTop: 8,
    lineHeight: 20,
  },
  comingSoonContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  comingSoonTitle: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#a855f7',
  },
  comingSoonText: {
    textAlign: 'center',
    lineHeight: 22,
  },
});
