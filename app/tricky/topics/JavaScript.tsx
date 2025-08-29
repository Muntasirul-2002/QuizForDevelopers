import { ThemedText } from "@/components/ThemedText"
import { ScrollView, StyleSheet } from "react-native"


const JavaScript = () => {
  return (
   <ScrollView style={styles.container}>
    <ThemedText>
        JavaScript Tricky Questions Coming Soon!
    </ThemedText>
   </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    padding: 16,
  },
})
export default JavaScript