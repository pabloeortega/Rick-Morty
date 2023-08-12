const Favorite = require('../models/Favorite')

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    await Favorite.destroy({
      where: { id }
    });

    const favorites = await Favorite.findAll();
    return res.status(200).send(favorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = deleteFav;
