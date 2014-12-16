					$.ajaxSetup({
						contentType : "application/json"
					});
					$.ajax({
						type : "GET",
						url : "webresources/myresource/testdata2",
						async : false, 
						success : function(data) {
							$(data).each(
									function(index, value) {
										if (year == 'allyear') {
											var date =value[0]+"/"+value[1]+"/"+value[2];
											so2data.push({
												x : date,
												y : parseFloat(value[3]).toFixed(3)
											});										
										} else {
											if (value[0] == year) {
												var date = new Date(
														parseInt(value[0]),
														parseInt(value[1]) - 1,
														1).getTime();//change the date from Date to integer,if not,the tooltips on the chart do not pop up on hovering it
												so2data.push({
													x : date,
													y : parseFloat(value[3])
												});
										
											}
										}
										
									});
							
						},
						dataType : "json"
					});
