class TableTemplates {
    static table(table_content) {
        return `<table id="table">${table_content}</table>`;
    }

    static header(header_elements_html) {
        return `<thead class="table-header"><tr class="table-header-row">${header_elements_html}</tr></thead>`;
    }

    static header_el(label) {
        return `<th class='table-header-cell'>${label}</th>`;
    }

    static body(body_elements_html) {
        return `<tbody class="table-body">${body_elements_html}</tbody>`;
    }

    static row(row_elements_html) {
        return `<tr class="table-body-row">${row_elements_html}</tr>`;
    }

    static body_el(formated_value) {
        return `<td class="table-body-cell">${formated_value}</td>`;
    }
}