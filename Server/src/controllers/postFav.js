const { Favorite } = require('../DB_connection');


const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  if (!id || !name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send('Faltan datos');
  }

  try {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { id },
      defaults: { name, origin, status, image, species, gender }
    });

    if (!created) {
      return res.status(401).send('El personaje ya existe en favoritos');
    }

    const favorites = await Favorite.findAll();
    return res.status(200).send(favorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postFav;
