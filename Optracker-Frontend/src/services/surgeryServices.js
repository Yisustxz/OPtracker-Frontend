import api from "./api";

export const createSurgery = async (surgeryData) => {
  try {
    const response = await api.post(`/surgery`, surgeryData);
    return response.data;
  } catch (error) {
    console.log("Error al crear cirguía");
    throw error;
  }
};

export const fetchSurgerys = async () => {
  try {
    // const response = await api.get("/surgery");
    // return response.data.map(() => {
    //     id: id,
    // });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
