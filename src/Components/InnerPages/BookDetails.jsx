import React, { useMemo, useState, StrictMode } from 'react';
import {AgGridReact} from 'ag-grid-react';

import { useNavigate } from 'react-router-dom';
import image from '../assests/images/logo.png';

const BookDetails = () => {

    const navigate = useNavigate();

    const SaveBookDetails = () => {
        navigate("/bookListing");
    }

    const [rowData, setRowData] = useState([
        { id: '12', bookName: 'Dragon war', comments: 'text xyz' },
    ]);

    const [columnDefs, setColumnDefs] = useState([
        { field: "id", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor'},
        { field: "bookName", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
        { field: "comments", filter: 'agNumberColumnFilter', checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: false,
        }
    }, []);

    return (
        <div className='containers flip-card'>
            <img src={image} title="poc" className="logo" />
            <div className="ag-theme-quartz" style={{ height: 500 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowSelection="multiple"
                    suppressRowClickSelection={true}
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 25, 50]}
                />
            </div>
        </div>
    )
}

export default BookDetails