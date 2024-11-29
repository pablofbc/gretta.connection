import axios from "axios";
import { axiosApi } from "./axios";
import { Alert } from "react-native";

const API_URL = "https://cc210ecba693.sn.mynetname.net:";
let API_URLL = "";

export const comunidadApi = async (port: String) => {
  console.log(API_URL + port + "/comunidadAPI/api/UserOrganization/GetFormByCodUserByCodOrg?CodUser=AACA6001019D6&CodOrg=COD_MPI");
  try {
    const response = await axiosApi.get(
      API_URL + port + `/comunidadAPI/api/UserOrganization/GetFormByCodUserByCodOrg?CodUser=AACA6001019D6&CodOrg=COD_MPI`
    );
    return response.data;
  } catch (error) {
    Alert.alert("no se conecto a comunidad");
    throw error;
  }
};

export const editorApi = async (codUser: String, codOrg: String, port: String) => {
  try {
    const response = await axiosApi.get(
      API_URL + port + `/FormEditionAPI/api/Personas/GetPersonas/CE_3133195_202410090517381738`
    );
    return response.data;
  } catch (error) {
    Alert.alert("no se conecto a Editor");
    throw error;
  }
};

export const vrmApi = async (username: string, password: string, port: String) => {
  try {
    const response = await axios.post(
      API_URL + port + "/vrmApi/api/Users/sign-in",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: () => true, // Permitir todas las respuestas
      }
    );
    return response.data;
  } catch (error) {
    Alert.alert("No se conectó a VRM");
    throw error;
  }
};

export const SystemInfo = async (port: String) => {
  if (port == "9091") {
    API_URLL = API_URL + port + "/systemInfo/api/SystemInfo/system-info";
    console.log(API_URLL);
  }else{
    API_URLL = API_URL + "93/system-info";
    console.log(API_URLL);
  }
  try {
    const response = await axios.get(
      API_URLL
    );
    return response.data;
  } catch (error) {
    Alert.alert("No se conectó a SystemInfo");
    throw error;
  }
};

