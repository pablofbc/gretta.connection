import axios from "axios";
import { axiosApi } from "./axios";
import { Alert } from "react-native";

export const comunidadApi = async () => {
  try {
    const response = await axiosApi.get(
      `https://cc210ecba693.sn.mynetname.net:90/comunidadAPI/api/UserOrganization/GetFormByCodUserByCodOrg?CodUser=AACA6001019D6&CodOrg=COD_MPI`
    );
    return response.data;
  } catch (error) {
    Alert.alert("no se conecto a comunidad");
    throw error;
  }
};

export const editorApi = async (codUser: String, codOrg: String) => {
  try {
    const response = await axiosApi.get(
      `https://cc210ecba693.sn.mynetname.net:90/FormEditionAPI/api/Personas/GetPersonas/CE_3133195_202410090517381738`
    );
    return response.data;
  } catch (error) {
    Alert.alert("no se conecto a Editor");
    throw error;
  }
};

export const vrmApi = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "https://cc210ecba693.sn.mynetname.net:90/vrmApi/api/Users/sign-in",
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

