import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import coins from './prospectus.json';

const rows = coins.map( (coin, id) => ({ id, ...coin }) );
const columns = Object.keys(coins[0]).map(field => ({ field, width: 111 }) );

export default function DataGridDemo() {
    const ids = rows.map(row => (row.id) );
    const amounts = rows.map(row => ( Math.round(row.amount * 10 ** 6) ) );
    // console.log(ids, amounts);

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                autoHeight
            />
        </div>
    );
}
