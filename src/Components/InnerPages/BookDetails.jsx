import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { useNavigate } from 'react-router-dom';
import image from '../assests/images/logo.png';

import Card from 'react-bootstrap/Card';

const BookDetails = () => {

    const navigate = useNavigate();

    const SaveBookDetails = () => {
        navigate("/bookListing");
    }

    const [rowData, setRowData] = useState([
        { id: '12', bookName: 'Dragon war', comments: 'text xyz' },
        { id: '13', bookName: 'Dragon war 2nd', comments: 'text xyz' },
        { id: '14', bookName: 'Dragon war 3rd', comments: 'text xyz' },
    ]);

    const [columnDefs, setColumnDefs] = useState([
        { field: "id", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
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
            <Card border="primary" className='cardProps'>
                <Card.Body>
                    <img src={image} title="poc" className="logo" />
                    <div className="ag-theme-quartz" style={{ height: 200 }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}
                            pagination={false}
                            paginationPageSize={10}
                            paginationPageSizeSelector={[10, 25, 50]}
                        />
                    </div>

                    <Button variant="primary" type="submit" onClick={SaveBookDetails}>
                            Submit
                        </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookDetails