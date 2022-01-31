import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const peg_multiplier = 10 ** 8;
const type = 'number';
const columns = [
    { field: 'token' },
    { field: 'amount', type: 'number' },
    { field: 'price', type: 'number' },
]

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo({ composition }) {
    const rows = [...Array(10).keys()].map( (value, id) => {
        const token = composition[0][id].toUpperCase();
        const amount = composition[1][id];
        const price = '$' + (
            composition[2][id] / peg_multiplier
        ).toFixed(2);
        return { id, token, amount, price };
    });

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                autoHeight
            />
        </div>
    );
}
