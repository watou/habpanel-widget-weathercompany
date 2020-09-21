# WeatherCompany widget for HABPanel (openHAB)

## Description

WeatherCompany widget for HABPanel (openHAB) for use with the WeatherCompany binding as in the openHAB 2.5.8 release (perhaps earlier or later will also work).

![Screenshot](https://github.com/watou/habpanel-widget-weathercompany/blob/master/screenshot.png)

## Change History

2020-09-21 Initial version, inspired by and bits copied from [Local Weather - OpenWeatherMap](https://github.com/BasvanH/habpanel-widget-openweathermap)

## Download

- [`wc.controller.js`](https://github.com/watou/habpanel-widget-weathercompany/blob/master/wc.controller.js)
- [`Local Weather - WeatherCompany.widget.json`](https://github.com/watou/habpanel-widget-weathercompany/blob/master/Local%20Weather%20-%20WeatherCompany.widget.json).
- [`weather-icons-master.zip`](https://github.com/erikflowers/weather-icons/archive/master.zip)

## Installation

* Install [The WeatherCompany binding](https://www.openhab.org/addons/bindings/weathercompany/) if not already installed and configure at least one of each type of Thing.
* Configure items as described for that binding, using the suggested item names in the binding's documentation.  Configure items for as as many future days of forecasts as you will want to see in the widget (limited by what the binding and service support).
* Verify that the binding is working by inspecting the states of the items you added.
* Create a folder within the `$CONF/html/` folder, name it `weathercompany`.  (For example, `$CONF` is the `etc/openhab2` folder on openHABian.)
* Extract (`unzip` works) the file [`weather-icons-master.zip`](https://github.com/erikflowers/weather-icons/archive/master.zip) and place the `weather-icons-master` folder in the `$CONF/html/weathercompany/` folder.
* Place the file [`wc.controller.js`](https://github.com/watou/habpanel-widget-weathercompany/blob/master/wc.controller.js) in the `$CONF/html/weathercompany/` folder.
* Import the downloaded [`Local Weather - WeatherCompany.widget.json`](https://github.com/watou/habpanel-widget-weathercompany/blob/master/Local%20Weather%20-%20WeatherCompany.widget.json) widget to your HABpanel.
* Add the widget to a dashboard; adjust the widget's settings, size and position as desired.

The complete file structure should look like this:

- `$CONF/html`
  - `weathercompany`
    - `wc.controller.js`
    - `weather-icons-master`
      - `...`
