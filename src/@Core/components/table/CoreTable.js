/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { theme } from '@Core/Theme/theme';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useMemo } from 'react';
import CoreTableBody from '@Core/components/table/CoreTableBody';
import CoreTableHeader from '@Core/components/table/CoreTableHeader';
import DebouncedInput from '../../../components/DebouncedInput/DebouncedInput';
import { Box, MenuItem, Pagination, Select } from '@mui/material';
import useSearchParamsHook from 'components/hook/useSearchParamsHook';

export default function CoreTable(props) {
  const { columns, data, isLoading, isPagination = true, dataPagination, onClick } = props;
  const [sorting, setSorting] = React.useState();
  const [filtering, setFiltering] = React.useState();
  const [totalPage, setTotalPage] = React.useState(1);

  const finalColumn = useMemo(() => columns, []);
  const finalData = useMemo(() => data, []);
  const { setParams } = useSearchParamsHook();

  const tableInstance = useReactTable({
    columns: finalColumn,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filtering
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering
  });
  React.useEffect(() => {
    if (!isLoading) {
      setTotalPage(dataPagination?.total_page);
    }
  }, [isLoading]);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: '10px' }}>
        <DebouncedInput value='' onChange={(value) => setFiltering(value)} placeholder={`Search... `} />
      </Box>
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
          <Box>
            <Select
              sx={{ width: 70, borderRadius: '12px', fontSize: '14px' }}
              size='small'
              variant='outlined'
              value={dataPagination?.limit || 10}
              onChange={(e) => {
                setParams('limit', e.target.value);
              }}>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </Box>
          <Pagination
            onChange={(_, page) => setParams('page', String(page))}
            count={totalPage}
            page={dataPagination?.page}
            siblingCount={1}
          />
        </Box>
      )}
    </Paper>
  );
}