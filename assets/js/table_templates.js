class TableTemplates {
    static table(table_content) {
        return `<table id="table">${table_content}</table>`;
    }

    static header(header_elements_html) {
        return `<thead class="table-header"><tr class="table-header-row">${header_elements_html}</tr></thead>`;
    }

    static header_el(column_name, is_sorted, label) {
        let sort_handler = is_sorted ? `onclick='table.change_sort("${column_name}");'` : '';
        let sort_icon = '';
        if (is_sorted) {
            sort_icon = 'sorted';
            if (column_name == table.config.sort[0]) sort_icon = `sort-${table.config.sort[1]}`;
        }
        return `<th class='table-cell table-header-cell ${sort_icon}' ${sort_handler}>${label}</th>`;
    }

    static body(body_elements_html) {
        return `<tbody class="table-body">${body_elements_html}</tbody>`;
    }

    static row(row_elements_html) {
        return `<tr class="table-body-row">${row_elements_html}</tr>`;
    }

    static body_el(formated_value) {
        return `<td class="table-cell table-body-cell">${formated_value}</td>`;
    }
}