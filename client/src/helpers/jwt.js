const getJwt = () => {
  return localStorage.getItem("id_token");
};

export default getJwt;
