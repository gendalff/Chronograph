Chronograph = (function(){

	var scope = {};
	var quantity = {};

	function start(name, description){
		var report = true;
		if(scope[name]!==undefined) report = reportSingle(name, "before " + description||"" + "was a timer - ");
		scope[name] = [];
		lap(name, description || "start");
		return report;
	};
	function lap(name, description){
		var desc = description || "lap";
		if(scope[name]===undefined) return false;
		scope[name].push([desc, Date.now()]);
		return true;
	};
	function stop(name, description){
		return lap(name, description || "stop");
	};
	function tick(name){
		if(!quantity[name]){
			quantity[name] = 1;
		} else{
			quantity[name]++;
		}
	}
	function clear(name){
		scope[name] = undefined;
		quantity[name] = undefined;
	}
	function reportSingle(name){
		var report = "Chronograph.", start, cur;
		if(scope[name]===undefined){
			return "the time does not exists!";
		}
		report += name + ": ";
		if(scope[name].length===1) stop(name);
		for(var i = 0; i < scope[name].length; i++){
			if(!start){
				start = scope[name][i][1];
				report+=scope[name][i][0] + " 0ms; "
			}else{
				cur = scope[name][i][1];
				report+=scope[name][i][0] + ": "
						+ (cur - scope[name][i-1][1])
						+ "ms ("
						+ (cur - start)
						+ "ms); "
			}
		}
		if(quantity[name]){
			report+= " FPS: " + (quantity[name]/(cur - start)*1000).toFixed(2) + ";";
		}
	return report;
	};
	function reportScope(){};

	var Chronograph = {
		start : function(name, description){
			return start(name, description);
		},
		lap : function(name, description){
			return lap(name, description);
		},
		stop : function(name, description){
			return stop(name, description);
		},
		tick : function(name){
			return tick(name);
		},
		clear : function(name){
			return clear(name);
		},
		reportSingle : function(name){
			return reportSingle(name);
		},
		reportScope : function(name){
			return reportScope(name);
		}
	};

	return Chronograph;
})()
