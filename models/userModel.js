const connection = require('./connection');

const addUser = async (user) => {
  const { name, email, password } = user;
  return connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name,  email, password])
  .then((result) => result[0]);
};

const getUserById = async (id) => {
  const [user] = await connection.query('SELECT * FROM users where id = ?', [id]);
  return user;
};

const getUserByEmail = async (emailLogin) => {
  const [result] = await connection.execute('SELECT * FROM users WHERE email=?', [emailLogin]);
  return result;
};

const updateUser = async (newName, newEmail, newPassword, userId) => {
  await connection
    .execute('UPDATE users SET name=?, email=?, password=? WHERE id=?', [newName, newEmail, newPassword, userId]);
  return null;
};

module.exports = { addUser, getUserById, getUserByEmail, updateUser };
