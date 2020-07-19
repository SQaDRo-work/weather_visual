types_config = {
    date_time: {
        format: function(value) {
            return moment(value, 'X').format('MM.DD.YYYY HH:mm:ss');
        }
    },
    temp: {
        format: function(value) {
            return value + ' C';
        }
    },
    pressure: {
        format: function(value) {
            return value + ' hPa';
        }
    },
    humidity: {
        format: function(value) {
            return value + ' %';
        }
    },
    weather: {
        format: function(value) {
            return value.weather;
        }
    }
}