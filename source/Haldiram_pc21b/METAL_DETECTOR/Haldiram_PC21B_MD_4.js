parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/8e1667bd-6928-4188-a34d-07e2d9461bb6',
	params: {

"OK_COUNT": new parameter_classes.Monotonic(1,1500000,100),
"REJECT_COUNT": new parameter_classes.Monotonic(1,150000,1),
"SENSITIVITY": new parameter_classes.Stat(1),
"TOTAL_COUNT": new parameter_classes.Monotonic(1,5000000,100),

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
