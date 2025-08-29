import ReactQuestions from "@/app/data/ReactQuestions";
import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const React = () => {
   const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const toggleitem = (id:number)=>{
    setExpandedItems((prev)=>{
      const newSet = new Set(prev);
      if(newSet.has(id)){
        newSet.delete(id);
      }else{
        newSet.add(id);
      }
      return newSet;
    })
  }
  const expandAll = () =>{
    setExpandedItems(new Set(ReactQuestions.map((q)=> q.id)))
  }

  const collapseAll = () =>{
    setExpandedItems(new Set())
  }
   return (
   <ScrollView style={styles.container}>
    <Text style={styles.header}>React Questions</Text>
    <Text style={styles.subHeader}>
      Learn about components, hooks, state management, and React best practices.
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
    {ReactQuestions.map((item)=>(
      <AccordionItem
      key={item.id}
      question={item.question}
      answer={item.answer}
      isExpanded={expandedItems.has(item.id)}
      onToggle={()=> toggleitem(item.id)}
      />
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
export default React