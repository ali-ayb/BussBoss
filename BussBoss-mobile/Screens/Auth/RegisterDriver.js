import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import RegisterLogo from "../../components/RegisterLogo/RegisterLogo";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import UseHttp from "../../hooks/request";
import axios from "axios";

export default function RegisterDriver() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [first_name, setfirstName] = useState("Ali2");
  const [last_name, setLastName] = useState("Ayoub");
  const [email, setEmail] = useState("Ali2@gmail.com");
  const [phone, setPhone] = useState("76102030");
  const [password, setPassword] = useState("code123");
  const [license_number, setLicenseNumber] = useState("F515F");
  const [profile, setProfile] = useState("");

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, Camera roll permissions needed to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      const cacheDirectory = FileSystem.cacheDirectory;
      const fileName = result.assets[0].uri.split("/").pop();
      const filePath = `${cacheDirectory}${fileName}`;
      try {
        await FileSystem.copyAsync({
          from: result.assets[0].uri,
          to: filePath,
        });

        setProfile(filePath);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("license_number", license_number);
    formData.append("user_type", "driver");
    formData.append("profile_image", {
      name: "img/jpeg",
      type: "image/jpeg",
      uri: profile,
    });

    formData.append("rating", 5);

    const result = await UseHttp("register", "POST", formData, {
      "Content-Type": "multipart/form-data",
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <View style={{ top: -60 }}>
        <RegisterLogo />
      </View>

      <View style={{ gap: 20, marginBottom: 200 }}>
        <TextInput
          style={styles.first_name}
          placeholder="  First Name"
          onChangeText={(e) => {
            setfirstName(e);
          }}
        />
        <TextInput
          style={styles.last_name}
          placeholder="  Last Name"
          onChangeText={(e) => {
            setLastName(e);
          }}
        />
        <TextInput
          style={styles.Email}
          placeholder="  Email"
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          style={styles.Password}
          placeholder="  Password"
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <TextInput
          style={styles.licence}
          placeholder="  Licence Number"
          onChangeText={(e) => {
            setLicenseNumber(e);
          }}
        />
        <Image
          source={{ uri: selectedImage }}
          style={{
            width: 100,
            height: 100,
            left: 250,
            top: 160,
            borderRadius: 15,
          }}
        />
        <TouchableOpacity onPress={handleChoosePhoto}>
          <View style={styles.imageUpload}>
            <View>
              <Feather name="image" size={30} color={"blue"} />
            </View>
            <View>
              <Text>Choose Photo</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register_btn} onPress={handleRegister}>
          <Text style={{ fontSize: 24, color: "#FFF", top: 8, left: 30 }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  first_name: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 150,
    borderRadius: 15,
    top: 230,
    left: 50,
    elevation: 10,
  },
  last_name: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 150,
    borderRadius: 15,
    top: 163,
    left: 220,
    elevation: 10,
  },
  Email: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 320,
    borderRadius: 15,
    top: 160,
    left: 50,
    elevation: 10,
  },
  Password: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 320,
    borderRadius: 15,
    top: 160,
    left: 50,
    elevation: 10,
  },
  birth: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 320,
    borderRadius: 15,
    top: 160,
    left: 50,
    elevation: 10,
  },
  licence: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 320,
    borderRadius: 15,
    top: 160,
    left: 50,
    elevation: 10,
  },
  register_btn: {
    backgroundColor: "#146C94",
    width: 150,
    height: 50,
    top: 100,
    left: 135,
    borderRadius: 15,
    elevation: 5,
  },
  imageUpload: {
    top: 60,
    left: 80,
  },
});
