/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { theme } from '@Core/Theme/theme';
import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';
import CoreTableBody from '@Core/components/table/CoreTableBody';
import CoreTableHeader from '@Core/components/table/CoreTableHeader';

export default function CoreTable(props) {
  const { columns, data, isLoading } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sorting, setSorting] = React.useState();
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
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting
    },
    onSortingChange: setSorting
  });

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: theme.restaurants.heightTable }}>
        <Table stickyHeader>
          <CoreTableHeader table={tableInstance} />
          <CoreTableBody table={tableInstance} isLoading={isLoading} />
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
