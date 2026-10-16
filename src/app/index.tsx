import { sounds } from "@/sounds";
import { AudioSource, createAudioPlayer } from "expo-audio";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const player = createAudioPlayer();

  function play(file: AudioSource) {
    player.replace(file);
    player.play();
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Mesa de Sons 🎛️</Text>
            <Text style={styles.subtitle}>Toque um botão para tocar</Text>
          </View>
          <View style={styles.icon}>
            <Text style={styles.iconText}>🔊</Text>
          </View>
        </View>

        <View style={styles.grade}>
          {sounds.map((sound) => (
            <Pressable
              onPress={() => play(sound.file)}
              key={sound.id}
              style={[styles.botao, { backgroundColor: sound.color }]}
            >
              <Text style={styles.emoji}>{sound.emoji}</Text>
              <Text style={styles.nome}>{sound.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const colors = {
  orange: "#F28C28",
  blue: "#0B3D6E",
  background: "#FFF8F0",
  text: "#1F2933",
  lightText: "#6B7280",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.blue,
  },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, gap: 20 },
  subtitle: { fontSize: 15, color: colors.lightText, marginTop: 2 },
  icon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: { fontSize: 24 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  grade: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 14,
    justifyContent: "space-between",
  },
  botao: {
    width: "48%",
    height: 130,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emoji: { fontSize: 44 },
  nome: { fontSize: 16, fontWeight: "bold", color: "#fff" },
});
