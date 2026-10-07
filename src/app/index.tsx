import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";

import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { styles } from "../styles/HomeStyle";

export default function HomeScreen() {
  const showPopup = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "Fast Registration",
    },
    {
      id: 2,
      icon: "📱",
      title: "QR Attendance",
    },
    {
      id: 3,
      icon: "📊",
      title: "Progress Tracking",
    },
    {
      id: 4,
      icon: "🔔",
      title: "Smart Notification",
    },
  ];

  const events = [
    "Open Recruitment 2026",
    "Organization Introduction",
    "Leadership Training",
  ];

  const news = [
    "Registration Open",
    "New Division Available",
    "Training Schedule Updated",
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* HERO */}

      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.heroTitle}>Smart QR Onboarding</Text>

        <Text style={styles.heroSubtitle}>
          Digitalize Your Organization Journey
        </Text>

        <Pressable
          style={styles.mainButton}
          onPress={() =>
            showPopup(
              "Get Started",
              "Halaman registrasi akan tersedia pada modul berikutnya.",
            )
          }
        >
          <Text style={styles.mainButtonText}>Get Started</Text>
        </Pressable>
      </View>

      {/* DASHBOARD */}

      <Pressable
        style={styles.dashboardCard}
        onPress={() =>
          showPopup(
            "Dashboard",
            "120 Anggota Aktif, 5 Event Berjalan, Progress 75%",
          )
        }
      >
        <Text style={styles.dashboardTitle}>Welcome Back 👋</Text>

        <View style={styles.dashboardRow}>
          <View>
            <Text style={styles.dashboardNumber}>120</Text>
            <Text style={styles.dashboardLabel}>Members</Text>
          </View>

          <View>
            <Text style={styles.dashboardNumber}>5</Text>
            <Text style={styles.dashboardLabel}>Events</Text>
          </View>

          <View>
            <Text style={styles.dashboardNumber}>75%</Text>
            <Text style={styles.dashboardLabel}>Progress</Text>
          </View>
        </View>
      </Pressable>

      {/* QUICK MENU */}

      <Text style={styles.sectionTitle}>Quick Access</Text>

      <View style={styles.menuContainer}>
        <Pressable
          style={styles.menuCard}
          onPress={() =>
            showPopup("QR Attendance", "Fitur QR sedang dikembangkan.")
          }
        >
          <Ionicons name="qr-code" size={32} color="#06B6D4" />
          <Text style={styles.menuText}>QR Scan</Text>
        </Pressable>

        <Pressable
          style={styles.menuCard}
          onPress={() => showPopup("Events", "Menampilkan daftar event.")}
        >
          <MaterialIcons name="event" size={32} color="#8B5CF6" />
          <Text style={styles.menuText}>Events</Text>
        </Pressable>

        <Pressable
          style={styles.menuCard}
          onPress={() => showPopup("Members", "Data anggota akan tersedia.")}
        >
          <FontAwesome5 name="users" size={28} color="#22C55E" />
          <Text style={styles.menuText}>Members</Text>
        </Pressable>

        <Pressable
          style={styles.menuCard}
          onPress={() => showPopup("About", "Informasi aplikasi onboarding.")}
        >
          <Ionicons name="information-circle" size={32} color="#F59E0B" />
          <Text style={styles.menuText}>About</Text>
        </Pressable>
      </View>

      {/* PROGRESS */}

      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Onboarding Progress</Text>

        <Text style={styles.progressPercent}>75%</Text>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      {/* FEATURES */}

      <Text style={styles.sectionTitle}>Core Features</Text>

      {features.map((feature) => (
        <Pressable
          key={feature.id}
          style={styles.featureCard}
          onPress={() => showPopup(feature.title, `${feature.title} selected`)}
        >
          <Text style={styles.featureIcon}>{feature.icon}</Text>

          <Text style={styles.featureText}>{feature.title}</Text>
        </Pressable>
      ))}

      {/* EVENTS */}

      <Text style={styles.sectionTitle}>Upcoming Events</Text>

      {events.map((event, index) => (
        <Pressable
          key={index}
          style={styles.eventCard}
          onPress={() => showPopup("Event Detail", event)}
        >
          <Text style={styles.eventText}>{event}</Text>
        </Pressable>
      ))}

      {/* NEWS */}

      <Text style={styles.sectionTitle}>Latest News</Text>

      {news.map((item, index) => (
        <Pressable
          key={index}
          style={styles.newsCard}
          onPress={() => showPopup("News Detail", item)}
        >
          <Text style={styles.newsText}>{item}</Text>
        </Pressable>
      ))}

      {/* CTA */}

      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>Ready To Join?</Text>

        <Text style={styles.ctaText}>Start your onboarding journey today.</Text>

        <Pressable
          style={styles.ctaButton}
          onPress={() =>
            showPopup(
              "Register",
              "Registrasi akan tersedia pada modul berikutnya.",
            )
          }
        >
          <Text style={styles.ctaButtonText}>Register Now</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>© 2026 Smart QR Onboarding System</Text>
    </ScrollView>
  );
}
