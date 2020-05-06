const logout = () => {
  localStorage.removeItem("id_token");
  this.props.history.push("/");
};

export default logout;
