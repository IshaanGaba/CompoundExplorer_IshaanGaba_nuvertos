const { Compound } = require('../models');

exports.getCompounds = async (req, res) => {
  const page  = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;
  try {
    const { rows, count } = await Compound.findAndCountAll({
      limit,
      offset,
      order: [['id','ASC']]
    });
    res.json({ data: rows, total: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompound = async (req, res) => {
  try {
    const compound = await Compound.findByPk(req.params.id);
    if (!compound) return res.status(404).json({ error: 'Not found' });
    res.json(compound);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCompound = async (req, res) => {
  try {
    const [updated] = await Compound.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    const updatedCompound = await Compound.findByPk(req.params.id);
    res.json(updatedCompound);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
