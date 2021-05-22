parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/4206f5fe-27d2-4d57-a9a2-ed0df74bdd6e',
	params: {

"TAKATAK_FRYER_ENERGY_CONSUMED": new parameter_classes.Monotonic(1,50000000,1.1),
"TAKATAK_DUSCOLLECTOR_ENERGY_CONSUMED": new parameter_classes.Monotonic(1,50000000,1.1),

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
