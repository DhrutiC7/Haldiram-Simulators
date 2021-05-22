parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/c3a817a8-1168-4ef9-9c46-7d5dc7a88fae',
	params: {

"CURRENT_COUNT": new parameter_classes.Monotonic(1,15000000,100),
"RIBBON_KM": new parameter_classes.Monotonic(0,150000,1.01),

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
