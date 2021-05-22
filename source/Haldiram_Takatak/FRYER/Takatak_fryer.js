parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/e49a743c-f1f7-4459-957a-60a679d28f1e',
	params: {

"BULK_WEIGHT": new parameter_classes.Monotonic(10,500000000,85.6),
"OIL_INLET_TEMPERATURE": new parameter_classes.Stat(100),
"OIL_OUTLET_TEMPERATURE": new parameter_classes.Stat(85),
"SEASONING_CONSUMED": new parameter_classes.Monotonic(10,50000000,15.6),
"SEASONING_PERCENTAGE": new parameter_classes.Stat(85),

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
