parameter_classes = require('../../eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/7b2055a6-b1e9-4a30-aee4-86c0a828404b',
	params: {

"GAS_CONSUMED": new parameter_classes.Monotonic(1,5000000,10.1),
"OIL_CONSUMED": new parameter_classes.Monotonic(1,5000000,10.1),

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
