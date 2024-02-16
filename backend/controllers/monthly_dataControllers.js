const Amenities = require('../models/Amenities');
const MonthlyData = require('../models/MonthlyData');

const monthly_dataControllers = {
  cal: async (req, res) => {
    // {
    //     "id": "1",
    //     "amenities": [
    //       "water": "100",
    //       "electricity": "100",
    //       "car": "4"
    //     ]
        
    //     "rooms": [
    //       {
    //         "id": "1"
    //         "amenities": [
    //           "water": "300000",
    //           "electricity": "400000",
    //           "car": "40000"
    //         ] 
    //       }
    //     ]
    // }
    try {
      const amenitiesData = req.body.amenities;

      let totalAmenitiesPrice = 0;
      for (const amenity of amenitiesData) {
        const amenityName = Object.keys(amenity)[0]; 
        const amenityQuantity = parseInt(Object.values(amenity)[0]); // 

        const amenityInfo = await Amenities.findOne({ name: amenityName });
        if (amenityInfo) {
            totalAmenitiesPrice += amenityInfo.price * amenityQuantity;
        }
      }

      const currentTime = {
        month: new Date().getMonth() + 1, 
        year: new Date().getFullYear() 
      }; 
      const monthlyData = {
        time: currentTime, 
        rooms: {
          id: req.body.id,
          amenities: amenitiesData,
          totalAmenitiesPrice: totalAmenitiesPrice 
        }
      }
      const newMonthlyData = new MonthlyData(monthlyData);
      const monthly_data = await newMonthlyData.save();
      res.status(200).json(monthly_data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  },
};

module.exports = monthly_dataControllers;
