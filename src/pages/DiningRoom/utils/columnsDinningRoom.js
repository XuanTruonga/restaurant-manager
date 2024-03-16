import { CoreTableActionDelete, CoreTableActionView } from '@Core/components/table/CoreTableAction';
import { columnHelper } from '@Core/components/table/CoreTableBody';
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModalDetail } from '../../../redux/SliceModalDetail';

export const ColumnsDiningRoom = () => {
  const dispath = useDispatch();

  const handleViewDetailDiningRoom = (value) => {
    dispath(openModalDetail(value));
  };
  const handleDeleteDiningRoom = (value) => {
    // console.log(value);
  };

  return [
    columnHelper.accessor((_, index) => index + 1, {
      header: 'Stt',
      minWidth: 50
    }),
    columnHelper.accessor('diningRoom', {
      header: 'Tên phòng bàn',
      minWidth: 120
    }),
    {
      accessorKey: 'note',
      header: 'Ghi chú',
      minWidth: 200
    },
    columnHelper.accessor('area', {
      header: 'Khu vực',
      minWidth: 100
    }),
    columnHelper.accessor('quantitySeats', {
      header: 'Số ghế',
      enableGlobalFilter: false,
      minWidth: 70
    }),
    columnHelper.accessor('', {
      header: 'Trạng thái',
      minWidth: 120,
      cell: ({ row }) => {
        return row.original.status ? (
          <Typography>Đang hoạt động</Typography>
        ) : (
          <Typography>Ngừng hoạt động</Typography>
        );
      }
    }),
    columnHelper.accessor('', {
      header: 'Thao tác',
      enableGlobalFilter: false,
      minWidth: 80,
      cell: ({ row }) => {
        const subject = row?.original;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CoreTableActionView callback={() => handleViewDetailDiningRoom(subject)} />
            <CoreTableActionDelete
              callback={handleDeleteDiningRoom(subject?._id)}
              content='Bạn có muốn xoá phòng bàn này?'
              isIcon={true}
            />
          </Box>
        );
      }
    })
  ];
};
