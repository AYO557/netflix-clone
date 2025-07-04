function useUser() {
  const getUser = () => {
    const res = localStorage.getItem("user-data");
    if (res) {
      return JSON.parse(res);
    }
    return null;
  };

  const setUser = (data: { name: string; email: string }) => {
    localStorage.setItem("user-data", JSON.stringify(data));
  };

  const removeUser = () => {
    localStorage.removeItem("user-data");
  };

  return {
    getUser,
    setUser,
    removeUser,
  };
}

export default useUser;
