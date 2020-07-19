let data_extractor = new DataExtractor;
let table = new Table;
let chart = new Chart;

data_extractor.get_one_call_data();

function change_city(select) {
    var new_city = select.options[select.selectedIndex].value;
    data_extractor.query_params.q = new_city;
    data_extractor.get_one_call_data();
}