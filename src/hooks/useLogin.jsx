function useLogin() {
  const token = window.localStorage.getItem("token");
  return !!token;
}

export default useLogin;
