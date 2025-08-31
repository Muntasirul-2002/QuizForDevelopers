import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface Category {
  id: number;
  title: string;
  discussion: string;
  route: Href;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Freshers",
    discussion:
      "Tips and strategies for acing your first technical interviews and landing your first job.",
    route: "/tips/Freshers",
  },
  {
    id: 2,
    title: "Experienced",
    discussion:
      "Advanced interview techniques and strategies for experienced developers.",
    route: "/tips/Experienced",
  },
  {
    id: 3,
    title: "Resume Building",
    discussion:
      "Crafting a standout resume to showcase your skills and experience.",
    route: "/tips/ResumeBuilding",
  },
  {
    id: 4,
    title: "Email Templates",
    discussion:
      "Professional email templates for job applications and follow-ups.",
    route: "/tips/EmailTemplates",
  },
  {
    id: 5,
    title: "Organization Behavior",
    discussion: "Understanding workplace dynamics and effective communication.",
    route: "/tips/OrganizationBehavior",
  },
  {
    id: 6,
    title: "Improve Productivity",
    discussion:
      "Techniques and tools to enhance your productivity as a developer.",
    route: "/tips/ImproveProductivity",
  },
];

const tips = () => {
  const [screenData, setScreenData] = useState(Dimensions.get("window"));

  useEffect(() => {
    const onChange = (result: { window: any }) => {
      setScreenData(result.window);
    };

    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  const isTablet = screenData.width >= 768;
  const isLargeScreen = screenData.width >= 1024;

  const handleCategoryPress = (category: Category) => {
    router.push(category.route);
  };

  const renderCategoryItem = (category: Category, index: number) => {
    return (
      <TouchableOpacity
        key={category.id}
        style={[
          styles.categoryCard,
          {
            width: isLargeScreen ? "30%" : isTablet ? "45%" : "100%",
            marginBottom: isTablet ? 20 : 15,
            marginHorizontal: isLargeScreen ? "1.5%" : isTablet ? "2.5%" : 0,
          },
        ]}
        onPress={() => handleCategoryPress(category)}
        activeOpacity={0.7}
      >
        <View style={styles.cardHeader}>
          <View style={styles.arrowContainer}>
            <Ionicons
              name="chevron-forward"
              size={isTablet ? 24 : 20}
              color="#a855f7"
            />
          </View>
        </View>
        <View style={styles.cardContent}>
          <ThemedText
            type="title"
            style={[styles.categoryTitle, { fontSize: isTablet ? 20 : 16 }]}
          >
            {category.title}
          </ThemedText>
          <ThemedText
            style={[
              styles.categoryDescription,
              { fontSize: isTablet ? 16 : 12 },
            ]}
          >
            {category.discussion}
          </ThemedText>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategories = () => {
    if (isLargeScreen || isTablet) {
      return (
        <View style={styles.responsiveGrid}>
          {categories.map((category, index) =>
            renderCategoryItem(category, index)
          )}
        </View>
      );
    } else {
      return (
        <View style={styles.mobileStack}>
          {categories.map((category, index) =>
            renderCategoryItem(category, index)
          )}
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View
        style={[
          styles.titleContainer,
          { paddingHorizontal: isTablet ? 40 : 20 },
        ]}
      >
        <Text style={[styles.title, { fontSize: isTablet ? 32 : 24 }]}>
          Tips & Tricks
        </Text>
        <Text style={[styles.subtitle, { fontSize: isTablet ? 20 : 16 }]}>
          Choose a category
        </Text>
      </View>
      <View
        style={[
          styles.categoryContainer,
          { paddingHorizontal: isTablet ? 40 : 20 },
        ]}
      >
        {renderCategories()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 20,
  },
  title: {
    textAlign: "center",
    color: "#a855f7",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "center",
    color: "#cfcbcbff",
    marginBottom: 10,
  },
  categoryContainer: {
    flex: 1,
  },
  responsiveGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  mobileStack: {
    flexDirection: "column",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryCard: {
    padding: 15,
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
    minHeight: 150,
  },
  leftCard: {
    marginRight: 8,
  },
  rightCard: {
    marginLeft: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
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
    padding: 6,
  },
  categoryTitle: {
    color: "#ffff",
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  categoryDescription: {
    color: "#cfcbcbff",
    lineHeight: 20,
    textAlign: "center",
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

export default tips;
