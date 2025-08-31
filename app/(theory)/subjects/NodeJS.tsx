import { nodeQuestions } from "@/app/data/NodejsQuestions";
import AccordionItem from "@/components/AccordionItem";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const NodeJS = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedItems(new Set(nodeQuestions.map((q) => q.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>NodeJS Questions</Text>
      <Text style={styles.subHeader}>
        Learn about Node.js architecture, modules, asynchronous programming, and
        best practices.
      </Text>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.expandBtn} onPress={expandAll}>
          <Text style={styles.btnText}>Expand All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.collapseBtn} onPress={collapseAll}>
          <Text style={styles.btnText}>Collapse All</Text>
        </TouchableOpacity>
      </View>
      {nodeQuestions.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isExpanded={expandedItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
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
export default NodeJS;
