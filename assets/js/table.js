class Table {
    constructor(data) {
        this.config = $.extend(true, {}, table_config);
        this.table_data = [];
    }

    build_table(with_formate) {
        if (with_formate) this.formate_data();
        this.sort_data();
        let header = this.build_header();
        let body = this.build_body();
        $(this.config.selector).html(TableTemplates.table(header + body));
    }

    build_header() {
        let header_els = '';
        $.each(this.config.columns, function(i, column){
            header_els += TableTemplates.header_el(column.name, column.sort, column.label);
        });
        return TableTemplates.header(header_els);
    }

    build_body() {
        let body_els = '';
        $.each(this.table_data, function(i, row){
            let row_els = '';
             $.each(row, function(j, column){
                row_els += TableTemplates.body_el(column.formated);
             })
             body_els += TableTemplates.row(row_els);
        });
        return TableTemplates.body(body_els);
    }

    formate_data() {
        let self = this;
        $.each(data_extractor.data.list, function(i, el){
            let table_el = {};
            $.each(self.config.columns, function(j, column) {
                let value = column.get_value(el);
                table_el[column.name] = {
                    value: value,
                    formated: types_config[column.type].format(value)
                }
            });
            self.table_data.push(table_el);
        });
    }

    sort_data() {
        let self = this;
        let sort_vector = this.config.sort[1];
        this.table_data = $.extend(true, [], this.table_data.sort(function(a, b){
            let a_val = a[self.config.sort[0]].value;
            let b_val = b[self.config.sort[0]].value;
            if (sort_vector == 'asc') {
                return a_val - b_val;
            } else if (sort_vector == 'desc') {
                return b_val - a_val;
            }
            return 0;
        }));
    }

    change_sort(column_name) {
        if (this.config.sort[0] != column_name) {
            this.config.sort = [column_name, 'asc'];
        } else {
            this.config.sort[1] = this.config.sort[1] == 'asc' ? 'desc' : 'asc';
        }
        this.build_table(false);
    }
}