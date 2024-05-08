import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { useNavigate } from 'react-router-dom';
import image from '../assests/images/logo.png';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const BookDetails = () => {
    const navigate = useNavigate();

    const SaveBookDetails = () => {
        navigate("/bookListing");
    }

    const [bookrowData, booksetRowData] = useState([
        { publications: 'Arihant', author: 'HC Verma', pubDate: '12-May-2023' },
        { publications: 'Wrox', author: 'Evan, Eric', pubDate: '14-May-2023' }
    ]);

    const [bookcolumnDefs, booksetColumnDefs] = useState([
        { field: "publications", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
        { field: "author", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
        { field: "pubDate", filter: 'agNumberColumnFilter', checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
    ]);

    const [filerowData, filesetRowData] = useState([
        { filePrint: 'File 1', specsPages: 120, pubDate: '12-May-2023' },
        { filePrint: 'File 2', specsPages: 300, pubDate: '14-May-2023' }
    ]);

    const [filecolumnDefs, filesetColumnDefs] = useState([
        { field: "filePrint", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
        { field: "specsPages", checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
        { field: "pubDate", filter: 'agNumberColumnFilter', checkboxSelection: false, editable: true, cellEditor: 'agSelectCellEditor' },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: false,
        }
    }, []);

    return (
        <div className='containers card'>
            <Card border="primary" className='cardProps'>
                <Card.Body>
                    <img src={image} title="poc" className="logo" />
                    <div className="ag-theme-quartz" style={{ height: 300,overflow:'auto' }}>
                        <span className='heading'>Book</span>
                        <AgGridReact
                            rowData={bookrowData}
                            columnDefs={bookcolumnDefs}
                            defaultColDef={defaultColDef}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}
                            pagination={false}
                            paginationPageSize={10}
                            paginationPageSizeSelector={[10, 25, 50]}
                        />
                    </div>

                    <div className="ag-theme-quartz" style={{ height: 300, overflow:'auto' }}>
                    <span className='heading'>File</span>
                        <AgGridReact
                            rowData={filerowData}
                            columnDefs={filecolumnDefs}
                            defaultColDef={defaultColDef}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}
                            pagination={false}
                            paginationPageSize={10}
                            paginationPageSizeSelector={[10, 25, 50]}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookDetails