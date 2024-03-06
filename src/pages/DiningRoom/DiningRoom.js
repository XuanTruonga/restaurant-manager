import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { theme } from '@Core/Theme/theme';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';

const columns = [
  { id: 'name', label: 'Tên phòng bàn', minWidth: 170 },
  { id: 'note', label: 'Ghi chú', minWidth: 260 },
  {
    id: 'area',
    label: 'Khu vực',
    minWidth: 150,
    align: 'left'
  },
  {
    id: 'quantity',
    label: 'Số ghế',
    minWidth: 150,
    align: 'left'
  },
  {
    id: 'status',
    label: 'Trạng thái',
    minWidth: 170,
    align: 'left'
  },
  {
    id: 'numericalOrder',
    label: 'Số thứ tự',
    minWidth: 100,
    align: 'left'
  }
];

const data = [
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  }
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const finalColumn = useMemo(() => columns, []);
  const finalData = useMemo(() => data, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableInstance = useReactTable({
    columns: finalColumn,
    data: finalData,
    getCoreRowModel: getCoreRowModel()
  });
  const dataHeader = tableInstance.getHeaderGroups()[0].headers;
  console.log(tableInstance.getRowModel().rows);
  const dataRow = tableInstance.getRowModel().rows;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: theme.restaurants.heightTable }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {dataHeader.map((header) => (
                <TableCell key={header.id} align={header.align} style={{ minWidth: header.minWidth }}>
                  {flexRender()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>



          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                  {dataHeader.map((column) => {
                    const value = dataRow[column.id];
                  
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ fontSize: theme.typography.font_14_base, color: theme.palette.grey[600], padding: '4px !important' }}
        rowsPerPageOptions={[10, 15, 30]}
        component='div'
        count={data.length}
        labelRowsPerPage='Số bản ghi:'
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) => `Hiển thị ${from} - ${to} trên tổng số ${count} phòng/bàn`}
      />
    </Paper>
  );
}
