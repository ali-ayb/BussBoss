import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Rating } from "react-native-ratings";

function CurrentTripCard({ item }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const navigation = useNavigation();

  const openMap = () => {
    navigation.navigate("map");
  };

  const Cancel = () => {
    alert("trip cancel");
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onPressLearnMore = () => {
    setIsModalVisible(true);
  };

  const destination = item.destination;
  const first_name = item.first_name;
  const last_name = item.last_name;
  const departure_time = new Date(item.departure_time);
  const arrival_time = new Date(item.arrival_time);

  const handleRatingCompleted = (rating) => {
    setRating(rating);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.CurrentTripCard}>
      <Image
        style={styles.clock_icon}
        source={require("../../assets/clock_icon.png")}
      />
      <Image
        style={styles.pin_icon}
        source={require("../../assets/pin_icon.png")}
      />
      <Text style={styles.trip_time}>
        {departure_time.getHours()}:{departure_time.getMinutes()} {"<-->"}
        {arrival_time.getHours()}:{arrival_time.getMinutes()}
      </Text>
      <Text style={styles.trip_position}>{destination} </Text>
      <Text style={styles.driver_name}>
        Driver: {first_name} {last_name}
      </Text>
      <TouchableOpacity style={styles.finish_btn} onPress={onPressLearnMore}>
        <Text style={styles.finish_btn_text}>Finish Trip</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalView}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Rate you driver:
            </Text>
            <Rating
              type="custom"
              ratingColor="#146C94"
              ratingCount={5}
              imageSize={40}
              ratingBackgroundColor="#D9D9D9"
              tintColor="#fff"
              readonly={false}
              onFinishRating={handleRatingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <Text
              style={{ left: -60, top: 27, fontWeight: "bold", fontSize: 18 }}>
              Cancel your resevation:
            </Text>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => Cancel()}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => closeModal()}>
              <Text style={styles.cancelButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity style={styles.track_btn} onPress={openMap}>
        <Text style={styles.track_btn_text}>Track Bus</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CurrentTripCard;
const styles = StyleSheet.create({
  CurrentTripCard: {
    backgroundColor: "#FFF",
    height: 110,
    width: 335,
    left: "10%",
    borderRadius: 15,
    elevation: 20,
    marginBottom: 50,
  },
  clock_icon: {
    top: 20,
    left: 25,
  },
  pin_icon: {
    height: 50,
    width: 30,
    top: 25,
    left: 20,
  },
  trip_time: {
    top: -50,
    left: 60,
    fontWeight: "bold",
    fontSize: 16,
  },
  trip_position: {
    top: -30,
    left: 60,
    fontSize: 16,
    fontWeight: "bold",
  },
  driver_name: {
    top: -90,
    left: 180,
    fontSize: 16,
    fontWeight: "bold",
  },
  track_btn: {
    borderRadius: 15,
  },
  finish_btn: {
    backgroundColor: "#0E7BCB",
    borderRadius: 15,
    padding: 5,
    left: "73%",
    top: "-64%",
    width: 80,
  },
  finish_btn_text: {
    color: "#FFFFFF",
    left: 5,
  },

  track_btn: {
    backgroundColor: "#6CC1FF",
    borderRadius: 15,
    padding: 5,
    left: "47%",
    top: "-89%",
    width: 80,
  },
  track_btn_text: {
    color: "#000",
    left: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingLeft: 80,
    paddingRight: 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    top: "40%",
    left: "6%",
  },
  cancelButton: {
    backgroundColor: "#FF6F61",

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 0,
    left: 80,
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#6CC1FF",

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    left: 0,
    top: 30,
  },
});
