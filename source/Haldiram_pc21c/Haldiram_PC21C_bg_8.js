parameter_classes = require('../../eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/de5a1c3a-99cc-401b-950e-0d1f5be76a0c',
	params: {

"FAILED_BAG": new parameter_classes.Monotonic(10,5000,1),
"FILLED_BAG": new parameter_classes.Monotonic(10,5000000,100),
"SPEED": new parameter_classes.Stat(100),
"TOTAL_COUNT": new parameter_classes.Monotonic(10,5000000,100),

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