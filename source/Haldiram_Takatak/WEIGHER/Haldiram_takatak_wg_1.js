parameter_classes = require('./eronkan_helpers.js');
var simulate_data = {
	topic: 'data/machine/machineID',
	url: 'https://v3.plant.works/incoming/data/10b1f0a2-781c-4968-8e29-d44e9891243e',
	params: {

"PRESET_NUMBER": new parameter_classes.Stat(21),
"PRODUCT_NAME": new parameter_classes.Stat(21),
"LOWER_WEIGHT_LIMIT": new parameter_classes.Stat(16),
"UPPER_WEIGHT_LIMIT": new parameter_classes.Stat(20),

"TOTAL_COUNT": new parameter_classes.Monotonic(10,520000,90),
"OVER_WEIGHT_DUMP_COUNT": new parameter_classes.Monotonic(1,12000,2),
"OVERSCALE_DUMP_COUNT": new parameter_classes.Monotonic(1,6000,1),

"TOTAL_WEIGHT": new parameter_classes.Monotonic(0,15000,1.69),
"OVERSCALE_DUMP_TOTAL_WEIGHT": new parameter_classes.Monotonic(0,200,0.02),

"AVG_SPEED": new parameter_classes.Stat(93),
"ERROR_CODE": new parameter_classes.Stat(0),
"MEAN_WEIGHT": new parameter_classes.Stat(18.39),
"TOTAL_DATA": new parameter_classes.Stat(1),
"UNDER": new parameter_classes.Stat(1),
"WEIGHER_EFFICIENCY": new parameter_classes.Stat(96.77),



"ERN_RSV_CLIENT_TIMESTAMP": new parameter_classes.TimeStamp()
                
//3600000
//60000

	},
	customFunctions: {},
	getConf: function () {
		var data = {
			simulationDuration: 345600000,	//milliseconds
			simulatingFrequency: 60000		//time period of simulation
		};
		return data;
	}
};

module.exports = simulate_data;
