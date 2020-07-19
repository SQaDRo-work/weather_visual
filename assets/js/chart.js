class Chart {
    constructor() {
        this.config = $.extend(true, {}, table_config);
        this.chart_data = {
            ox_data: [],
            oy_data: []
        }
        this.setting = {};
    }

    build_chart() {
        let self = this;
        this.format_data();
        this.drop_chart_state();
        this.setup_settings();
        let vertical_legend_html = this.build_vertical_legend();
        let horizontal_legend_html = this.build_horizontal_legend();
        let chart_blocks = this.build_chart_dots();
        let chart_html = ChartTemplates.svg_container({
            width: self.setting.chart_width,
            height: self.setting.chart_height
        }, vertical_legend_html + horizontal_legend_html + chart_blocks);
        $(this.config.chart_selector).html(chart_html);
    }

    drop_chart_state() {
        this.setting = {
            min_oy: null,
            max_oy: null,
            scale: null,
            ox_step: null,
            oy_step: null,
            count_oy_steps: 4,
            x_pos_chart: 70,
            y_pos_chart: 150,
            chart_width: 0,
            chart_height: 0
        }
    }

    format_data() {
        let self = this;
        this.chart_data = {
            ox_data: table.table_data.map(function(el){ return el.dt; }),
            oy_data: table.table_data.map(function(el){ return el[self.config.chart_column]; })
        }
    }

    setup_settings() {
        let chart_container = $(this.config.chart_selector);
        this.setting.chart_width = chart_container.outerWidth();
        this.setting.chart_height = chart_container.outerHeight();

        let values_arr = this.chart_data.oy_data.map(function(el){ return el.value; });
        this.setting.min_oy = Math.min( ...values_arr );
        this.setting.max_oy = Math.max( ...values_arr );

        this.setting.scale = (this.setting.chart_height - this.setting.y_pos_chart) / (Math.ceil(this.setting.max_oy) - Math.floor(this.setting.min_oy));

        this.setting.ox_step = (this.setting.chart_width - this.setting.x_pos_chart) / (this.chart_data.ox_data.length - 1);
        this.setting.oy_step = (Math.ceil(this.setting.max_oy) - Math.floor(this.setting.min_oy)) / this.setting.count_oy_steps;
    }

    build_vertical_legend() {
        let self = this;
        let oy_legend_html = '';
        let oy_horizontal_lines = '';
        let type_for_format = this.config.columns.find(function(col){ return col.name == self.config.chart_column}).type;
        for (let i = 0; i < this.setting.count_oy_steps + 1; i++) {
            let y_pos = this.normalize_shape_lines((this.setting.chart_height - this.setting.y_pos_chart) - i * this.setting.oy_step * this.setting.scale);
            let value =  Math.floor(this.setting.min_oy) + i * this.setting.oy_step;
            oy_legend_html += ChartTemplates.oy_legend({
                x_pos: this.normalize_shape_lines(this.setting.x_pos_chart - 10),
                y_pos: y_pos + 5,
                text: types_config[type_for_format].format(value)
            });
            oy_horizontal_lines += ChartTemplates.horizontal_lines({
                x_pos_left: this.normalize_shape_lines(this.setting.x_pos_chart),
                x_pos_right: this.normalize_shape_lines(this.setting.x_pos_chart + (this.setting.chart_width - this.setting.x_pos_chart)),
                y_pos: y_pos
            });
        }
        oy_legend_html = ChartTemplates.oy_legend_wrapper(oy_legend_html);
        oy_horizontal_lines = ChartTemplates.horizontal_lines_wrapper(oy_horizontal_lines);
        return oy_legend_html + oy_horizontal_lines;
    }

    build_horizontal_legend() {
        let self = this;
        let ox_legend_html = '';
        let ox_vertical_lines = '';
        let y_pos = this.normalize_shape_lines(this.setting.chart_height - this.setting.y_pos_chart);
        for (let i = 0; i < this.chart_data.ox_data.length; i++) {
            let x_pos = this.normalize_shape_lines(this.setting.x_pos_chart + i * this.setting.ox_step);
            ox_legend_html += ChartTemplates.ox_legend({
                x_pos: x_pos,
                y_pos: y_pos + 65,
                text: this.chart_data.ox_data[i].formated
            });
            ox_vertical_lines += ChartTemplates.vertical_lines({
                x_pos: x_pos,
                y_pos: y_pos
            });
        }
        ox_legend_html = ChartTemplates.ox_legend_wrapper(ox_legend_html);
        ox_vertical_lines = ChartTemplates.vertical_lines_wrapper(ox_vertical_lines);
        return ox_legend_html + ox_vertical_lines;
    }

    build_chart_dots() {
        let line_html = '';
        let dots_html = '';
        let x_pos = this.setting.x_pos_chart;
        let d_points = '';
        for (let i = 0; i < this.chart_data.oy_data.length; i++) {
            console.log({
                height: this.setting.chart_height,
                start: this.setting.y_pos_chart,
                value: this.chart_data.oy_data[i].value - Math.floor(this.setting.min_oy),
                scale: this.setting.scale
            })
            let y_pos = this.setting.chart_height - this.setting.y_pos_chart - (this.chart_data.oy_data[i].value - Math.floor(this.setting.min_oy)) * this.setting.scale;
            dots_html += ChartTemplates.chart_dot({
                x_pos: x_pos,
                y_pos: y_pos
            })
            d_points += `${i == 0 ? 'M' : 'L'}${x_pos} ${y_pos} `;
            x_pos += this.setting.ox_step;
        }
        line_html = ChartTemplates.chart_dot_wrapper(dots_html);
        dots_html = ChartTemplates.chart_line_wrapper(ChartTemplates.chart_line({d_points: d_points}));
        return line_html + dots_html;
    }

    normalize_shape_lines(val) {
        return Math.round(val) - 0.5;
    }
}