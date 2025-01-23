const storeAccessToken = (accessToken) => {
  try {
    localStorage.setItem("access-token", accessToken);
  } catch (error) {
    console.log("error while storing access token", error);
  }
};

const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("access-token");
    if (accessToken) {
      return accessToken;
    }
    return null;
  } catch (error) {
    console.log("error while getting access token", error);
  }
};

export const localStorageService = { storeAccessToken, getAccessToken };
