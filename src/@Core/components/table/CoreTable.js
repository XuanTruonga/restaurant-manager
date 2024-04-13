/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { theme } from '@Core/Theme/theme';
import { getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import CoreTableBody from '@Core/components/table/CoreTableBody';
import CoreTableHeader from '@Core/components/table/CoreTableHeader';
import { Box, MenuItem, Pagination, Select, Typography, styled } from '@mui/material';
import { useEffect } from 'react';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';
import { useState } from 'react';

export default function CoreTable(props) {
  const { columns, data = [], isLoading, isPagination = true, onClick, setTable, setRowCheckBox, dataPagination } = props;
  const { searchParams: dataPaginationPram } = useSearchParamsHook();
  const [sorting, setSorting] = React.useState();
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 30
  });
  const { setParams } = useSearchParamsHook();
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      rowSelection,
      pagination
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    onPaginationChange: setPagination
  });
  useEffect(() => {
    if (!isLoading) {
      // setTotalPage(dataPaginationPram?.total_page);
    }
  }, [isLoading]);
  // console.log(dataPagination);

  useEffect(() => {
    setTable && setTable(tableInstance);
    setRowCheckBox && setRowCheckBox(tableInstance.getSelectedRowModel());
  }, [columns, tableInstance.getSelectedRowModel()]);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: theme.restaurants.heightTable }}>
        <Table stickyHeader>
          <CoreTableHeader table={tableInstance} />
          <CoreTableBody table={tableInstance} isLoading={isLoading} onClick={onClick} />
        </Table>
      </TableContainer>
      {isPagination && (
        <Box
          sx={() => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: 1.5,
            py: 1,
            gap: 4,
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #D1D5DB'
          })}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ fontSize: theme.typography.font_14_medium }}>Số bản ghi:</Typography>
            <Select
              sx={{ width: 70, borderRadius: '12px', fontSize: '14px !important' }}
              size='small'
              variant='outlined'
              value={dataPaginationPram?.limit || 10}
              onChange={(e) => {
                setParams('limit', e.target.value);
              }}>
              <StyleMenuItem value={10}>10</StyleMenuItem>
              <StyleMenuItem value={20}>20</StyleMenuItem>
              <StyleMenuItem value={30}>30</StyleMenuItem>
            </Select>
          </Box>
          <StylePagination
            sx={{ fontSize: '14px !important' }}
            onChange={(_, page) => setParams('page', String(page))}
            count={dataPagination?.totalPage}
            page={Number(dataPaginationPram?.page) || 1}
            siblingCount={1}
          />
        </Box>
      )}
    </Paper>
  );
}
const StyleMenuItem = styled(MenuItem)(() => ({
  '&.MuiMenuItem-root': {
    fontSize: '14px'
  }
}));

const StylePagination = styled(Pagination)(() => ({
  '& .MuiButtonBase-root': {
    fontSize: '14px'
  }
}));
