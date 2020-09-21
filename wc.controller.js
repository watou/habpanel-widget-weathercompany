(function () {
	'use strict';
	angular
		.module('app.widgets.wc', [])
		.controller('ngWcCtrl', ['$rootScope', '$scope', 'OHService',
			function ($rootScope, $scope, OHService) {
				function loadItems() {
					try {
						$scope.WC_PWS_Temperature = $scope.itemState("WC_PWS_Temperature");
						$scope.WC_PWS_TemperatureDewPoint = $scope.itemState("WC_PWS_TemperatureDewPoint");
						$scope.WC_PWS_TemperatureWindChill = $scope.itemState("WC_PWS_TemperatureWindChill");
						$scope.WC_PWS_TemperatureHeatIndex = $scope.itemState("WC_PWS_TemperatureHeatIndex");

						$scope.WC_PWS_WindDirection = $scope.itemState("WC_PWS_WindDirection");
						$scope.WC_PWS_WindSpeed = $scope.itemState("WC_PWS_WindSpeed");
						$scope.WC_PWS_WindSpeedGust = $scope.itemState("WC_PWS_WindSpeedGust");

						$scope.WC_PWS_PrecipitationRate = $scope.itemState("WC_PWS_PrecipitationRate");
						$scope.WC_PWS_PrecipitationTotal = $scope.itemState("WC_PWS_PrecipitationTotal");

						$scope.WC_PWS_Pressure = $scope.itemState("WC_PWS_Pressure");
						$scope.WC_PWS_RelativeHumidity = $scope.itemState("WC_PWS_RelativeHumidity");
						$scope.WC_PWS_StationId = $scope.itemState("WC_PWS_StationId");
						$scope.WC_PWS_ObservationTimeLocal = $scope.itemState("WC_PWS_ObservationTimeLocal");

						$scope.WC_Day = [];

						for (var day = 0; day < $scope.config.forecast_days; day++) {
							loadForecastItems(day);
						}
					} catch (err) {
						console.log("Error during loadItems: " + err)
					}
                }

				function loadForecastItems(day) {
					$scope.WC_Day[day] = {};
					$scope.WC_Day[day].DayOfWeek = $scope.itemState("WC_Day"+day+"_DayOfWeek");
					$scope.WC_Day[day].ValidTimeLocal = $scope.itemState("WC_Day"+day+"_ValidTimeLocal");
					$scope.WC_Day[day].TemperatureMin = $scope.itemState("WC_Day"+day+"_TemperatureMin");
					$scope.WC_Day[day].TemperatureMax = $scope.itemState("WC_Day"+day+"_TemperatureMax");
					$scope.WC_Day[day].PrecipitationRain = $scope.itemState("WC_Day"+day+"_PrecipitationRain");
					$scope.WC_Day[day].Day_WxPhraseLong = $scope.itemState("WC_Day"+day+"_Day_WxPhraseLong");
					$scope.WC_Day[day].Day_Temperature = $scope.itemState("WC_Day"+day+"_Day_Temperature");
					$scope.WC_Day[day].Day_RelativeHumidity = $scope.itemState("WC_Day"+day+"_Day_RelativeHumidity");
					$scope.WC_Day[day].Day_PrecipitationChance = $scope.itemState("WC_Day"+day+"_Day_PrecipitationChance");
					$scope.WC_Day[day].Day_PrecipitationRain = $scope.itemState("WC_Day"+day+"_Day_PrecipitationRain");
					$scope.WC_Day[day].Day_IconImage = $scope.itemState("WC_Day"+day+"_Day_IconImage");
					$scope.WC_Day[day].Night_WxPhraseLong = $scope.itemState("WC_Day"+day+"_Night_WxPhraseLong");
					$scope.WC_Day[day].Night_Temperature = $scope.itemState("WC_Day"+day+"_Night_Temperature");
					$scope.WC_Day[day].Night_RelativeHumidity = $scope.itemState("WC_Day"+day+"_Night_RelativeHumidity");
					$scope.WC_Day[day].Night_PrecipitationChance = $scope.itemState("WC_Day"+day+"_Night_PrecipitationChance");
					$scope.WC_Day[day].Night_PrecipitationRain = $scope.itemState("WC_Day"+day+"_Night_PrecipitationRain");
					$scope.WC_Day[day].Night_IconImage = $scope.itemState("WC_Day"+day+"_Night_IconImage");
				}

				$scope.degreeToCompass = function (direction) {
					var angle = parseFloat(direction);
				    var index = Math.floor((angle / 22.5) + 0.5);
				    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
				    return arr[(index % 16)];
				};

				$scope.beaufortFromWindSpeed = function (windSpeed) {
					var speed = parseFloat(windSpeed.split(' ')[0]);
					var units = windSpeed.split(' ')[1];
					if (units == 'km/h') speed = speed / 3.6;
					if (units == 'mph') speed = speed / 2.237;
					if (speed < 0.5) return 0;
					if (speed < 1.6) return 1;
					if (speed < 3.4) return 2;
					if (speed < 5.5) return 3;
					if (speed < 8.0) return 4;
					if (speed < 10.8) return 5;
					if (speed < 13.9) return 6;
					if (speed < 17.2) return 7;
					if (speed < 20.8) return 8;
					if (speed < 24.5) return 9;
					if (speed < 28.5) return 10;
					if (speed < 32.7) return 11;
					return 12;
				};

				// Run function when an item updates
				$rootScope.$on('openhab-update', function (event, item) {
					loadItems();
				});

				loadItems();
			}
		]);
})();
