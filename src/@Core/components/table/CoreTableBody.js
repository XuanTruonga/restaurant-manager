/* eslint-disable react-hooks/exhaustive-deps */
import { theme } from '@Core/Theme/theme';
import { Skeleton, TableBody, TableCell, TableRow, styled } from '@mui/material';
import { createColumnHelper, flexRender } from '@tanstack/react-table';
import { useState } from 'react';
import { useEffect } from 'react';

export const columnHelper = createColumnHelper();

function CoreTableBody(props) {
  const [rows, setRows] = useState();
  const { table, isLoading } = props;

  useEffect(() => {
    setRows(table?.getRowModel().rows);
  });
  const renderTableBody = () => {
    const allColumns = table.getAllColumns();
    if (isLoading) {
      return rows?.map((row, index) => (
        <TableRow key={index}>
          {row.getVisibleCells().map((cell, index) => (
            <TableCell key={index}>
              <Skeleton variant='rectangular' width='100%' height={15} />
            </TableCell>
          ))}
        </TableRow>
      ));
    }
    if (rows?.length === 0 ) {
      return (
        <TableRow>
          <TableCell align='center' colSpan={allColumns.length} sx={{ py: 2 }}>
            Không tìm thấy dữ liệu!
          </TableCell>
        </TableRow>
      );
    }

    return rows?.map((row, index) => (
      <StyleTableRow
        key={index}
        sx={{
          '&:hover': {
            bgcolor: theme.palette.grey[100],
            transition: theme.transitions.easing.easeIn
          }
        }}>
        {row.getVisibleCells().map((cell, index) => {
          return (
            <TableCell sx={{ fontSize: '14px' }} key={index}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </StyleTableRow>
    ));
  };

  return <TableBody sx={{ height: '100%' }}>{renderTableBody()}</TableBody>;
}
const StyleTableRow = styled(TableRow)(() => ({
  '& .MuiTableCell-root': {
    padding: '4px 15px'
  }
}));
export default CoreTableBody;
