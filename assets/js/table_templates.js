class TableTemplates {
    static table(table_content) {
        return `<table id="table">${table_content}</table>`;
    }

    static header(header_elements_html) {
        let html_string = '';
        html_string += '<thead class="table-header">';
        html_string += '<tr class="table-header-row">';
        html_string += header_elements_html;
        html_string += '</tr></thead>';
        return html_string;
    }

    static header_el(label) {
        return `<th class='table-header-cell'>${label}</th>`;
    }

    static body(body_element_html) {
        let html_string = '';
        html_string += '<tbody class="table-body">';
        html_string += '<tr class="table-body-row">';
        html_string += body_element_html;
        html_string += '</tr></tbody>';
        return html_string;
    }

    static body_el(formated_value) {
        return `<td class="table-body-cell">${formated_value}</td>`;
    }
}