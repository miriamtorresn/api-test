const db = {
  users: [
    { id: "1", name: "Miriam" },
    { id: "2", name: "Miguel" },
    { id: "3", name: "Monse" },
  ],
  products: [
    { id: "1", name: "Notebook" },
    { id: "2", name: "Computer" },
  ],
};

const list = async (table) => db[table];

const get = async (table, id) => {
  const users = await list(table);
  return users.find((item) => item.id === String(id));
};

module.exports = {
  list,
  get,
};
