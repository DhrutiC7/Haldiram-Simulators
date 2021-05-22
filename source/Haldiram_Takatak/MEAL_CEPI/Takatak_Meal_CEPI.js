parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/7a3000a9-288c-4612-ac6b-7021ebeb874e',
	params: {

"ACTIVE_SILO_NO": new parameter_classes.Stat(1),
"INFEED_KG": new parameter_classes.Monotonic(1,500000000,100),
"INFEED_RATE": new parameter_classes.Stat(100),

"ERN_RSV_CLIENT_TIMESTAMP": new parameter_classes.TimeStamp()
                
//3600000
//60000

	},
	customFunctions: {},
	getConf: function () {
		var data = {
			simulationDuration: 72000000000,	//milliseconds
			simulatingFrequency: 60000		//time period of simulation
		};
		return data;
	}
};

module.exports = simulate_data;
