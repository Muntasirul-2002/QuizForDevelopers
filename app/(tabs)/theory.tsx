import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
interface Category {
  id: number;
  icon: string;
  title: string;
  description: string;
  questionsCount: number;
  route : Href;
}
const categories: Category[] = [
  {
    id: 1,
    icon: "🚀",
    title: "JavaScript",
    description:
      "Test your knowledge of JavaScript fundamentals, ES6+, and modern features.",
    questionsCount: 30,
    route: "/(theory)/subjects/Javascript",
  },
  {
    id: 2,
    icon: "⚛️",
    title: "React",
    description:
      "Components, hooks, state management, and React best practices.",
    questionsCount: 50,
    route: "/(theory)/subjects/React"
  },
  {
    id: 4,
    icon: "🎨",
    title: "CSS",
    description: "Styling, layouts, animations, and modern CSS techniques.",
    questionsCount: 30,
    route: "/(theory)/subjects/CSS"
  },
  {
    id: 5,
    icon: "🔧",
    title: "Node.js",
    description:
      "Server-side JavaScript, APIs, and backend development concepts.",
    questionsCount: 15,
    route: "/(theory)/subjects/NodeJS"
  },
  {
    id: 7,
    icon: "🐍",
    title: "Python",
    description: "Python syntax, data structures, and programming concepts.",
    questionsCount: 50 ,
    route: "/(theory)/subjects/Python"
  },
  
];
export default function TabThreeScreen() {
  const handleCategoryPress = (category: Category) => {
    router.push(category.route );
  };

  const renderCategoryItem = (category: Category, index: number) => (
    <TouchableOpacity
      key={category.id}
      style={[
        styles.categoryCard,
        index % 2 === 0 ? styles.leftCard : styles.rightCard,
      ]}
      onPress={() => handleCategoryPress(category)}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <ThemedText style={styles.categoryIcon}> {category.icon}</ThemedText>
        </View>
        <View style={styles.arrowContainer}>
          <Ionicons name="chevron-forward" size={20} color="#a855f7" />
        </View>
      </View>
      <ThemedText type="subtitle" style={styles.categoryTitle}>
        {category.title}
      </ThemedText>
      <ThemedText style={styles.categoryDescription}>
        {category.description}
      </ThemedText>
      <View style={styles.questionsContainer}>
        <ThemedText style={styles.questionsCount}>
          {category.questionsCount} Questions
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
  const renderCategories = () => {
    const rows = [];
    for (let i = 0; i < categories.length; i += 2) {
      rows.push(
        <View key={i} style={styles.categoryRow}>
          {renderCategoryItem(categories[i], i)}
          {categories[i + 1] && renderCategoryItem(categories[i + 1], i + 1)}
        </View>
      );
    }
    return rows;
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator>
      <ThemedText style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Theory Practices
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.subtitle}>
        Choose a category to test your knowledge
      </ThemedText>
      <ThemedText style={styles.categoryContainer}>
        {renderCategories()}
      </ThemedText>
      <ThemedText style={styles.comingSoonContainer}>
        <View style={styles.comingSoonCard}>
          <ThemedText type="subtitle" style={styles.comingSoonTitle}>
            More Categories Coming Soon!🎯
          </ThemedText>
        </View>
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    textAlign: "center",
    color: "#a855f7",
  },
  subtitle: {
    textAlign: "center",
    color: "#cfcbcbff",
    fontSize: 16,
    marginBottom: 20,
  },
  categoryContainer: {
    paddingHorizontal: 20,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgba(168, 85, 247, 0.3)",
    borderWidth: 1,
    borderColor: "rgba(168, 85, 247, 0.4)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    minHeight: 140,
    marginBottom:20,
  },
  leftCard: {
    marginRight: 8,
  },
  rightCard: {
    marginLeft: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  iconContainer: {
    backgroundColor: "rgba(168, 85, 247, 0.1)",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryIcon: {
    fontSize: 20,
  },
  arrowContainer: {
    backgroundColor: "rgba(168, 85, 247, 0.1)",
    borderRadius: 12,
    padding: 4,
  },
  categoryTitle: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  categoryDescription: {
    color: "#cfcbcbff",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
    
  },
  questionsContainer: {
    marginTop: "auto",
  },
  questionsCount: {
    color: "#a855f7",
    fontSize: 12,
    fontWeight: "600",
  },
  comingSoonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  comingSoonCard: {
    backgroundColor: "rgba(168, 85, 247, 0.05)",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(168, 85, 247, 0.2)",
    alignItems: "center",
  },
  comingSoonTitle: {
    textAlign: "center",
    marginBottom: 8,
    color: "#a855f7",
  },
  comingSoonText: {
    textAlign: "center",
    lineHeight: 20,
    color: "#6b7280",
  },
});
