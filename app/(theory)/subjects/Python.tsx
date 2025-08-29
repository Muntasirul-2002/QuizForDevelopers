import pythonQuestions from '@/app/data/Python';
import AccordionItem from '@/components/AccordionItem';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Python = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (id:number)=>{
    setExpandedItems((prev)=>{
      const newSet = new Set(prev);
      if(newSet.has(id)){
        newSet.delete(id);

      }else{
        newSet.add(id)
      }
      return newSet;
    })
  }

  const expandAll = () =>{
    setExpandedItems(new Set(pythonQuestions.map((q)=> q.id)))
  }

  const collapseAll = () =>{
    setExpandedItems(new Set())
  }
  return (
    <ScrollView stickyHeaderHiddenOnScroll style={styles.container}>
      <Text style={styles.header}>
        Python Questions
      </Text>
      <Text style={styles.subHeader}>
        Learn about Python syntax, data structures, and programming concepts.
      </Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={expandAll} style={styles.expandBtn}>
          <Text style={styles.btnText}>
            Expand All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={collapseAll} style={styles.collapseBtn}>
          <Text style={styles.btnText}>
            Collapse All
          </Text>
        </TouchableOpacity>

      </View>
      {pythonQuestions.map((items)=>(
        <AccordionItem key={items.id} question={items.question} answer={items.answer} onToggle={()=> toggleItem(items.id)} isExpanded={expandedItems.has(items.id)} />
      ))}
    </ScrollView>
  )
}
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
export default Python