class ChartTemplates {
    static svg_container(options, html) {
        return `<svg width="${options.width}" height="${options.height}" class="chart-svg-block">${html}</svg>`;
    }

    static wrap_group(html, class_name) {
        return `<g class="${class_name}">${html}</g>`;
    }

    static horizontal_lines(options) {
        return `<path class="chart-horizontal-line" shape-rendering="crispEdges" d="M ${options.x_pos_left} ${options.y_pos} L ${options.x_pos_right} ${options.y_pos}"></path>`;
    }

    static oy_legend(options) {
        return `<text x="${options.x_pos}" y="${options.y_pos}" class="chart-legend-text">${options.text}</text>`;
    }

    static vertical_lines(options) {
        return `<path class="chart-vertical-line" shape-rendering="crispEdges" d="M ${options.x_pos} ${options.y_pos} L ${options.x_pos} 0"></path>`;
    }

    static ox_legend(options) {
        return `<text x="${options.x_pos}" y="${options.y_pos}" class="chart-date-legend-text" transform="rotate(90, ${options.x_pos}, ${options.y_pos})">${options.text}</text>`;
    }

    static chart_dot(options) {
        return `<circle cx="${options.x_pos}" cy="${options.y_pos}" r="3" class="chart-dot"/>`;
    }
    
    static chart_line(options) {
        return `<path d="${options.d_points}" class="chart-line"/>`
    }
}