import jsQuestions from "@/app/data/JsQuestions";
import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Javascript = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else newSet.add(id);
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedItems(new Set(jsQuestions.map((q) => q.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>JavaScript Questions</Text>
      <Text style={styles.subHeader}>
        Test your knowledge of JavaScript fundamentals, ES6+, and modern
        features without opening the accordion.
      </Text>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.expandBtn} onPress={expandAll}>
          <Text style={styles.btnText}>Expand All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.collapseBtn} onPress={collapseAll}>
          <Text style={styles.btnText}>Collapse All</Text>
        </TouchableOpacity>
      </View>

      {jsQuestions.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isExpanded={expandedItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
      <View style={styles.footer}>
        <Text style={styles.footerEmoji}>🎯</Text>
        <Text style={styles.footerTitle}>Keep Practicing!</Text>
        <Text style={styles.footerText}>
          Consistent practice is key to mastering JavaScript. Keep exploring,
          coding, and challenging yourself with new questions to enhance your
          skills and confidence.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7C3AED",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 12,
  },
  controls: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 8,
  },
  expandBtn: {
    backgroundColor: "#7C3AED",
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  collapseBtn: {
    backgroundColor: "#4B5563",
    padding: 10,
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    backgroundColor: "#E9D5FF",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#D8B4FE",
    alignItems: "center",
  },
  footerEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7C3AED",
    marginBottom: 4,
  },
  footerText: {
    fontSize: 13,
    color: "#6D28D9",
    textAlign: "center",
  },
});
export default Javascript;
