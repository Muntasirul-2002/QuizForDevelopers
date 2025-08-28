import { AccordionItemProps } from "@/types/AccordionItem.types";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isExpanded,
  onToggle,
}) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? contentHeight : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, contentHeight]);

  const renderAnswerContent = () => {
    if (Array.isArray(answer.content)) {
      return answer.content.map((item, index) => {
        if (item.type === "text") {
          return (
            <Text key={index} style={styles.answerText}>
              {item.content}
            </Text>
          );
        }
        if (item.type === "code") {
          return (
            <View key={index} style={styles.codeBlock}>
              <Text style={styles.codeText}>{item.content}</Text>
            </View>
          );
        }
        return null;
      });
    }
    if (typeof answer.content === "string") {
      return <Text style={styles.answerText}>{answer.content}</Text>;
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={styles.button}>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.icon}>{isExpanded ? "-" : "+"}</Text>
      </TouchableOpacity>
      <View
        style={styles.hiddenContent}
        onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}
      >
        <View style={{ padding: 12 }}>{renderAnswerContent()}</View>
      </View>
      <Animated.View
        style={[
          styles.answerContainer,
          {
            maxHeight: animatedHeight,
            opacity: animatedOpacity,
          },
        ]}
      >
        <View style={{ padding: 12 }}>{renderAnswerContent()}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E9D5FF",
    marginBottom: 10,
    overflow: "hidden",
  },
  button: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    flex: 1,
    paddingRight: 8,
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9333EA",
  },
  answerContainer: {
    overflow: "hidden",
  },
  answerText: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 6,
  },
  codeBlock: {
    backgroundColor: "#111827",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  codeText: {
    color: "#34D399",
    fontSize: 12,
    fontFamily: "monospace",
  },
  hiddenContent: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
  },
});

export default AccordionItem;
