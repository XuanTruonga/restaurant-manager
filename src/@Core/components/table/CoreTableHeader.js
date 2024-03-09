import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { flexRender } from '@tanstack/react-table';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Typography, styled } from '@mui/material';
import { theme } from '@Core/Theme/theme';

const CoreTableHeader = (props) => {
  const { table } = props;
  const dataHeader = table.getHeaderGroups()[0].headers;
  return (
    <TableHead>
      <StyleTableRow>
        {dataHeader.map((header, index) => {
          const cellColumn = header.column.columnDef;
          return (
            <TableCell key={index} sx={{ bgcolor: theme.palette.primary.light, fontWeight: '700' }}>
              <Box
                onClick={header.column.getToggleSortingHandler()}
                style={{
                  backgroundColor: theme.palette.primary.light,
                  minWidth: cellColumn.minWidth,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  userSelect: 'none'
                }}>
                {header.isPlaceholder ? null : flexRender(cellColumn.header)}
                <Typography fontSize={theme.typography.fontSize} display='flex' ml={'4px'}>
                  {
                    {
                      asc: <ArrowUpwardIcon fontSize='inherit' />,
                      desc: <ArrowDownwardIcon fontSize='inherit' />
                    }[header.column.getIsSorted() ?? null]
                  }
                </Typography>
              </Box>
            </TableCell>
          );
        })}
      </StyleTableRow>
    </TableHead>
  );
};

const StyleTableRow = styled(TableRow)(() => ({
  '& .MuiTableCell-root': {
    padding: '12px 15px'
  }
}));

export default CoreTableHeader;
