parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/3aa4fa2d-1f81-4416-9ed0-221782fb2f16',
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
