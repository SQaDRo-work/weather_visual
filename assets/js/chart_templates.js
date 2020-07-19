class ChartTemplates {
    static svg_container(options, html) {
        return `<svg width="${options.width}" height="${options.height}" class="chart-svg-block">${html}</svg>`;
    }

    static horizontal_lines_wrapper(horizontal_lines_html) {
        return `<g class="horizontal-lines-wrapper">${horizontal_lines_html}</g>`;
    }

    static horizontal_lines(options) {
        return `<path class="chart-horizontal-line" shape-rendering="crispEdges" d="M ${options.x_pos_left} ${options.y_pos} L ${options.x_pos_right} ${options.y_pos}"></path>`;
    }

    static oy_legend_wrapper(oy_legend_html) {
        return `<g class="oy-legend-wrapper">${oy_legend_html}</g>`;
    }

    static oy_legend(options) {
        return `<text x="${options.x_pos}" y="${options.y_pos}" class="chart-legend-text">${options.text}</text>`;
    }

    static vertical_lines_wrapper(vertical_lines_html) {
        return `<g class="vertical-lines-wrapper">${vertical_lines_html}</g>`;
    }

    static vertical_lines(options) {
        return `<path class="chart-vertical-line" shape-rendering="crispEdges" d="M ${options.x_pos} ${options.y_pos} L ${options.x_pos} 0"></path>`;
    }

    static ox_legend_wrapper(oy_legend_html) {
        return `<g class="ox-legend-wrapper">${oy_legend_html}</g>`;
    }

    static ox_legend(options) {
        return `<text x="${options.x_pos}" y="${options.y_pos}" class="chart-date-legend-text" transform="rotate(90, ${options.x_pos}, ${options.y_pos})">${options.text}</text>`;
    }

    static chart_dot_wrapper(dots_html) {
        return `<g class="chart-dots-wrapper">${dots_html}</g>`;
    }

    static chart_dot(options) {
        return `<circle cx="${options.x_pos}" cy="${options.y_pos}" r="3" class="chart-dot"/>`;
    }

    static chart_line_wrapper(line_html) {
        return `<g class="chart-line-wrapper">${line_html}</g>`;
    }

    static chart_line(options) {
        return `<path d="${options.d_points}" class="chart-line"/>`
    }
}