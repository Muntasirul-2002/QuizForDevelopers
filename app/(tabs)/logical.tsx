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
  route: Href;
}
const categories: Category[] = [
  {
    id: 1,
    icon: "🧩",
    title: "JavaScript",
    description: "Test your knowledge of Javascript tricky questions",
    questionsCount: 45,
    route: "/tricky/topics/JavaScript",
  },
  {
    id: 2,
    icon: "🐍",
    title: "Python",
    description: "Test your knowledge of Python tricky questions",
    questionsCount: 45,
    route: "/tricky/topics/Python",
  },
  
];
export default function TabFourScreen() {
  const handleCategoryPress = (category: Category) => {
    router.push(category.route);
  };

  const renderCategoryItems = (category: Category, index: number) => {
    return (
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
            <ThemedText style={styles.categoryIcon}>
              {" "}
              {category.icon}
            </ThemedText>
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
  };

  const renderCategories = () => {
    const rows = [];
    for (let i = 0; i < categories.length; i += 2) {
      rows.push(
        <View key={i} style={styles.categoryRow}>
          {renderCategoryItems(categories[i], i)}
          {categories[i + 1] && renderCategoryItems(categories[i + 1], i + 1)}
        </View>
      );
    }
    return rows;
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator>
      <ThemedText style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Logical Reasoning
        </ThemedText>
      </ThemedText>
      <ThemedText style={styles.categoryContainer}>
        {renderCategories()}
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
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
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
    marginBottom: 20,
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  categoryDescription: {
    color: "#6b7280",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    flex: 1,
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
