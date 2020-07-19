let table_config = {
    table_selector: "#table-main-container",
    chart_selector: "#chart-main-container",
    sort: ["dt", "asc"],
    chart_column: "temp",
    columns: [
        {
            name: "dt",
            type: "date_time",
            label: "Дата",
            sort: true,
            chart: false,
            get_value: function(el) {
                return el.dt;
            }
        },
        {
            name: "temp",
            type: "temp",
            label: "Температура",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.temp;
            }
        },
        {
            name: "feels_like",
            type: "temp",
            label: "Ощущается как",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.feels_like;
            }
        },
        {
            name: "temp_min",
            type: "temp",
            label: "Минимальная температура",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.temp_min;
            }
        },
        {
            name: "temp_max",
            type: "temp",
            label: "Максимальная температура",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.temp_max;
            }
        },
        {
            name: "pressure",
            type: "pressure",
            label: "Атмосферное давление",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.pressure;
            }
        },
        {
            name: "sea_level",
            type: "pressure",
            label: "Давление над уровнем моря",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.sea_level;
            }
        },
        {
            name: "grnd_level",
            type: "pressure",
            label: "Давление над уровнем земли",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.grnd_level;
            }
        },
        {
            name: "humidity",
            type: "humidity",
            label: "Влажность",
            sort: true,
            chart: true,
            get_value: function(el) {
                return el.main.humidity;
            }
        },
        {
            name: "weather",
            type: "weather",
            label: "Погода",
            sort: false,
            chart: false,
            get_value: function(el) {
                return {
                    weather: el.weather[0].description,
                    weather_params: el[el.weather[0].main.toLowerCase()]
                };
            }
        }
    ]
}