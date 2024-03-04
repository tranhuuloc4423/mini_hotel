const AnnualData = require('../models/AnnualData');

const getAllAnnualData = async (req, res) => {
  try {
    const annualData = await AnnualData.find();
    res.status(200).json(annualData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAnnualDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const annualData = await AnnualData.findById(id);
    if (annualData) {
      res.status(200).json(annualData);
    } else {
      res.status(404).json({ error: 'Annual data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createAnnualData = async (req, res) => {
  const { january, february, march, april, may, june, july, august, september, october, november, december } = req.body;

  try {
    const annualData = new AnnualData({
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december
    });

    const newAnnualData = await annualData.save();
    res.status(201).json(newAnnualData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateAnnualDataById = async (req, res) => {
  const { id } = req.params;
  const { january, february, march, april, may, june, july, august, september, october, november, december } = req.body;

  try {
    const updatedAnnualData = await AnnualData.findByIdAndUpdate(
      id,
      {
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december
      },
      { new: true }
    );

    if (updatedAnnualData) {
      res.status(200).json(updatedAnnualData);
    } else {
      res.status(404).json({ error: 'Annual data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteAnnualDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnnualData = await AnnualData.findByIdAndDelete(id);
    if (deletedAnnualData) {
      res.status(200).json({ message: 'Annual data deleted successfully' });
    } else {
      res.status(404).json({ error: 'Annual data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllAnnualData,
  getAnnualDataById,
  createAnnualData,
  updateAnnualDataById,
  deleteAnnualDataById
};

// const data = {
//     january: {
//         revenue: 100000,
//         rooms: [
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ],
//                 customer: {
//                     name: "roku",
//                     phone: "",
//                     idcard: "",
//                 },

//             },
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ]
//             }
//         ]
//     },
//     february: {
//         revenue: 100000,
//         rooms: [
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ],
//                 customer: {
//                     name: "roku",
//                     phone: "",
//                     idcard: "",
//                 },

//             },
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ]
//             }
//         ]
//     },
//     march: {
//         revenue: 100000,
//         rooms: [
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ],
//                 customer: {
//                     name: "roku",
//                     phone: "",
//                     idcard: "",
//                 },

//             },
//             {
//                 water: 1,
//                 electricity: 1,
//                 others: [

//                 ]
//             }
//         ]
//     }
// }
