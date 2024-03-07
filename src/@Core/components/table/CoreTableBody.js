import { theme } from '@Core/Theme/theme';
import { Skeleton, TableBody, TableCell, TableRow, styled } from '@mui/material';
import { flexRender } from '@tanstack/react-table';

function CoreTableBody(props) {
  const { table, isLoading } = props;

  const renderTableBody = () => {
    const { rows } = table && table.getRowModel();
    const allColumns = table.getAllColumns();
    if (isLoading) {
      return rows.map((row, index) => (
        <TableRow key={index}>
          {row.getVisibleCells().map((cell, index) => (
            <TableCell key={index}>
              <Skeleton variant='rectangular' width='100%' height={25} />
            </TableCell>
          ))}
        </TableRow>
      ));
    }

    if (rows.length === 0) {
      return (
        <TableRow>
          <TableCell align='center' colSpan={allColumns.length} sx={{ py: 2 }}>
            Không tìm thấy dữ liệu!
          </TableCell>
        </TableRow>
      );
    }

    return rows.map((row, index) => (
      <StyleTableRow
        key={index}
        sx={{
          '&:hover': {
            bgcolor: theme.palette.secondary.light,
            cursor: 'pointer',
            transition: theme.transitions.easing.easeIn
          }
        }}>
        {row.getVisibleCells().map((cell, index) => {
          return <TableCell key={index}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
        })}
      </StyleTableRow>
    ));
  };

  return <TableBody sx={{ height: '100%' }}>{renderTableBody()}</TableBody>;
}
const StyleTableRow = styled(TableRow)(() => ({
  '& .MuiTableCell-root': {
    padding: '12px 15px'
  }
}));
export default CoreTableBody;
