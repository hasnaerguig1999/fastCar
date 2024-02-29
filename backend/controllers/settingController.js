import Setting from '../models/setting';

const getAllSettings = async (req, res) => {
  try {
    const settings = await Setting.findAll();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllSettings };