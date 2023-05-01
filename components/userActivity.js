import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const UserActivity = () => {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Здесь может быть логика для получения процентной активности пользователя
    // Я просто создам случайное число в диапазоне от 0 до 100
    const randomActivity = Math.floor(Math.random() * 101);
    setActivity(randomActivity);
    setLoading(false);
  }, []);

  let indicatorColor = "red";
  if (activity !== null) {
    if (activity >= 52) {
      indicatorColor = "green";
    } else if (activity >= 26 && activity <= 51) {
      indicatorColor = "orange"; // or any other color you want to use for light red
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "92%",
            }}
          >
            <Text style={styles.infoText}>Sənin aktivliyin</Text>
            <Text style={styles.activityText}>{activity}%</Text>
          </View>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${activity}%`, backgroundColor: indicatorColor },
              ]}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 30,
    marginTop: 15,
    width: "97%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: "white",
  },
  activityText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  progressBar: {
    height: 10,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 10,
  },
  progressBarFill: {
    height: 10,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    color: "black",
    marginLeft: 20,
  },
});

export default UserActivity;
