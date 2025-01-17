class DataExtractor {
    constructor() {
        this.end_point = "https://api.openweathermap.org";
        this.query_params = {
            q: "Moscow",
            units: "metric",
            lang: 'ru',
            appid: "c41e47bdc77ee3a9b612935e28ebc444"
        }
        this.data;
    }

    change_city(new_city) {
        this.query_params.q = new_city;
    }
    
    get_one_call_data() {
        let self = this;
        trobber_toggle(true);
        $.ajax({
            url: `${this.end_point}/data/2.5/forecast`,
            method: "GET",
            data: this.query_params,
            dataType: "json",
            success: function(response){
                self.data = $.extend(true, {}, response);
                table.build_table(true);
                chart.build_chart();
                trobber_toggle(false);
            }
        });
    }
}