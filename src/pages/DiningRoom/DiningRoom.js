/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, Typography } from '@mui/material';
import CoreTable from '@Core/components/table/CoreTable';
import FormCreateDiningRoom from './components/FormCreateDiningRoom';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FormCreateAreaDiningRoom from './components/FormCreateAreaDiningRoom';
import DetailDiningRoom from './components/DetailDiningRoom';
import FormUpdateDiningRoom from './components/FormUpdateDiningRoom';
import { theme } from '@Core/Theme/theme';
import SidebarDiningRoom from './components/SidebarDiningRoom';
import { BasicModalDetail, BasicModalPrimary, BasicModalSecondary, BasicModalUpdate } from 'components/Modal/Modal';
import { columnHelper } from '@Core/components/table/CoreTableBody';
import { statusDingingRoom, statusDiningRoomkey } from './utils/statusDiningRoom';
import { CoreTableActionView } from '@Core/components/table/CoreTableAction';
import useApiGetAll from '../../components/Hook/useApiGetAll';
import { useMemo } from 'react';
import useModal from 'components/Hook/useModal';

const DiningRoom = () => {
  const { dataArea, dataDiningRoom, paginationDiningRoom } = useApiGetAll();
  const { onModalDetail, onModalPrimary } = useModal();

  const handleViewDetailDiningRoom = (value) => {
    onModalDetail(value);
  };
  const columnDiningRoom = useMemo(() => {
    return [
      columnHelper.accessor((_, index) => index + 1, {
        header: 'Stt',
        minWidth: 50
      }),
      columnHelper.accessor('name', {
        header: 'Tên phòng bàn',
        minWidth: 120
      }),
      {
        accessorKey: 'note',
        header: 'Ghi chú',
        minWidth: 200
      },
      columnHelper.accessor('areaId', {
        header: 'Khu vực',
        minWidth: 100,
        cell: ({ cell }) => {
          const areaId = Number(cell.getValue());
          const areaItem = dataArea?.find((area) => {
            return areaId === area.id;
          });
          return <Typography>{areaItem?.name}</Typography>;
        }
      }),
      columnHelper.accessor('seat', {
        header: 'Số ghế',
        enableGlobalFilter: false,
        minWidth: 70
      }),
      columnHelper.accessor('status', {
        header: 'Trạng thái',
        minWidth: 120,
        cell: ({ row }) => {
          if (row.original.status === statusDiningRoomkey.idle) {
            return <Typography>{statusDingingRoom.shutDown}</Typography>;
          }
          if (row.original.status === statusDiningRoomkey.active) {
            return <Typography>{statusDingingRoom.active}</Typography>;
          }
        }
      }),
      columnHelper.accessor('', {
        header: 'Thao tác',
        enableGlobalFilter: false,

        minWidth: 80,
        cell: ({ row }) => {
          const subject = row?.original;
          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
              <CoreTableActionView callback={() => handleViewDetailDiningRoom(subject)} />
            </Box>
          );
        }
      })
    ];
  }, [dataDiningRoom, dataArea]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={2.5} md={2.5}>
        <SidebarDiningRoom dataArea={dataArea} />
      </Grid>
      <Grid item xs={9.5} md={9.5}>
        <Box>
          <Box sx={{ pb: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: theme.typography.font_26_base }}>Hàng hóa</Typography>
            <Box>
              <Button
                onClick={() => onModalPrimary()}
                variant='contained'
                size='small'
                color='primary'
                sx={{ textWrap: 'nowrap' }}
                startIcon={<CreateNewFolderIcon />}>
                Thêm phòng/bàn
              </Button>
            </Box>
          </Box>
          {dataDiningRoom && <CoreTable columns={columnDiningRoom} data={dataDiningRoom} paginationDiningRoom={paginationDiningRoom} />}
          <BasicModalPrimary title={'Thêm phòng/bàn.'}>
            <FormCreateDiningRoom dataArea={dataArea} />
          </BasicModalPrimary>
          <BasicModalSecondary title='Thêm khu vực.' width={'480px'}>
            <FormCreateAreaDiningRoom />
          </BasicModalSecondary>
          <BasicModalDetail title='Thông tin phòng/bàn.' width={'600px'}>
            <DetailDiningRoom />
          </BasicModalDetail>
          <BasicModalUpdate title='Sửa thông tin phòng/bàn.' width={'600px'}>
            <FormUpdateDiningRoom />
          </BasicModalUpdate>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DiningRoom;
