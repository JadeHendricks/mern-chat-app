export const getSender = (users) => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  if (loggedInUser) {
    return users[0]._id === loggedInUser._id ? users[1].name : users[0].name;
  }
  return;
};
