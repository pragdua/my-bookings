import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TextInput,
} from "react-native-web";

const UpcomingCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>
        9/11 Ground Zero Tour with Skip the Line Tickets
      </Text>
      <View style={styles.orderIdAndCost}>
        <Text style={styles.orderId}>BOOKING ID: 234564</Text>
        <Text style={styles.Cost}>$ 109.53</Text>
      </View>
      <View style={styles.ticketInfo}>
        <View style={styles.infoItem}>
          <Image
            source="./ticketInfoIcons/Calendar.svg"
            style={styles.infoIcon}
          />
          <Text>30 Dec 2022 – Wednesday</Text>
        </View>
        <View style={styles.infoItem}>
          <Image source="./ticketInfoIcons/Clock.svg" style={styles.infoIcon} />
          <Text>02:00 PM</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            source="./ticketInfoIcons/Calendar.svg"
            style={styles.infoIcon}
          />
          <Text>2 Adults</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            source="./ticketInfoIcons/Calendar.svg"
            style={styles.infoIcon}
          />
          <Text>English Live Guided Tour</Text>
        </View>
      </View>
      <View style={styles.btn}>View Bookings</View>
      <View style={styles.status}>
        <Text style={styles.confirmation}>Booking Confirmed</Text>
        <View style={styles.confirmation}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: "344px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "16px",
    borderRadius: "8px",
    display: "flex",
    gap: "16px",
    marginTop: "16px",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0.6px",
  },
  orderIdAndCost: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderId: {
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "4px",
    paddingBottom: "4px",
    border: "0.5px solid #E2E2E2",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  cost: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
  },
  ticketInfo: {
    display: "flex",
    gap: "10px",
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  infoIcon: {
    width: "16px",
    height: "16px",
  },
  statusIcon: {
    width: "16px",
    height: "16px",
    color: "#088943",
  },
  btn: {
    color: "#8000FF",
    backgroundColor: "#F3E9FF",
    paddingTop: "11px",
    paddingBottom: "13px",
    borderRadius: "8px",
    textAlign: "center",
  },
  confirmation: {
    color: "#088943",
  },
});

export default UpcomingCard;
