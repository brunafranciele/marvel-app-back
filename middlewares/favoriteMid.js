const { getByUserId } = require('../models/favoriteModel');
const UNAUTHORIZED = 401;

const FavoriteValidation = async (req, res, next) => {
  const { id_favorite: favorite, user_id } = req.body;
  const getUser = await getByUserId(user_id);
  const filter = getUser.find((element) => element.id_favorite == favorite);
  if(filter) return res.status(UNAUTHORIZED).json({ message: 'It is already your favorite' });
  next();
};

module.exports = { FavoriteValidation };