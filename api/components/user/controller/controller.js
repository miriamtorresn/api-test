module.exports = (store) => {
  const list = async () => {
    const users = await store.list("users");
    return users;
  };

  const get = async (id) => {
    const user = await store.get("users", id);
    return user;
  };

  return {
    list,
    get,
  };
};
