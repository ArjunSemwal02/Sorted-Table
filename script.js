const data = [
    {
        id: 1,
        title: 'Google pixel 8',
        price: 86599,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 2,
        title: 'iPhone 13',
        price: 50399,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 3,
        title: 'Google pixel 7 pro',
        price: 69899,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 4,
        title: 'iPhone Mini',
        price: 45999,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 5,
        title: 'Samsung s12',
        price: 88899,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 6,
        title: 'Samsung Galaxy s14',
        price: 168399,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 7,
        title: 'Samsung Galaxy Note 12',
        price: 90899,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 8,
        title: 'Google pixel 6a',
        price: 35399,
        inStock: true,
        Category: 'Smartphones',
    },
    {
        id: 9,
        title: 'Google pixel 8a',
        price: 56999,
        inStock: true,
        Category: 'Smartphones',
    },
]

const createTable = productData => {
    const tableElement = document.createElement('table');
    const tableHeadElement = document.createElement('thead');
    const tableBodyElement = document.createElement('tbody');

    const headers = Object.keys(productData[0]);
    tableHeadElement.appendChild(createHeaderRow(headers));

    tableElement.appendChild(tableHeadElement);

    return tableElement;
};

const createHeaderRow = columnNames => {
    const tr = document.createElement('tr');
    columnNames.forEach( columnName => {
        const th = document.createElement('th');
        th.textContent = columnName[0].toUpperCase() + columnName.slice(1);

        const searchUp = document.createElement('span');
        searchUp.textContent = '🔼';
        const searchDown = document.createElement('span');
        searchDown.textContent = '🔽';

        th.appendChild(searchDown);
        th.appendChild(searchUp);

        tr.appendChild(th);
    });

    return tr;
}

const renderTable = productData => {
    const sortableTableElement = document.getElementById('sortable-table');
    sortableTableElement.innerHTML = '';
    sortableTableElement.appendChild(createTable(productData));
}

renderTable(data);