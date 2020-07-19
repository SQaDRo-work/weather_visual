types_config = {
    date_time: {
        format: function(value) {
            return moment(value, 'X').format('DD.MM.YYYY HH:mm');
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