import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ColumnsDiningRoom } from './utils/columnsDinningRoom';
import { Box, Button, Grid, Typography } from '@mui/material';
import { openModalPrimary } from '../../redux/SliceModalPrimary';
import CoreTable from '@Core/components/table/CoreTable';
import FormCreateDiningRoom from './components/FormCreateDiningRoom';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FormCreateAreaDiningRoom from './components/FormCreateAreaDiningRoom';
import DetailDiningRoom from './components/DetailDiningRoom';
import FormUpdateDiningRoom from './components/FormUpdateDiningRoom';
import { theme } from '@Core/Theme/theme';
import SidebarDiningRoom from './components/SidebarDiningRoom';
import { BasicModalDetail, BasicModalPrimary, BasicModalSecondary, BasicModalUpdate } from 'components/Modal/modal';

const data = [
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'HTB',
    quantitySeats: '5',
    status: false,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'HTA',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'HTD',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'HTB',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'HTC',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTB',
    note: 'ok ban oi',
    area: 'HTA',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTC',
    note: 'ok ban oi',
    area: '',
    quantitySeats: '5',
    status: false,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTD',
    note: 'ok ban oi',
    area: 'HTC',
    quantitySeats: '5',
    status: false,
    numericalOrder: '1'
  },

  {
    diningRoom: 'HTE',
    note: 'ok ban oi',
    area: 'HTB',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTF',
    note: 'ok ban oi',
    area: 'HTD',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTG',
    note: 'ok ban oi',
    area: 'HTA',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  },

  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'HTC',
    quantitySeats: '5',
    status: true,
    numericalOrder: '1'
  }
];

const DiningRoom = () => {
  const [filtering, setFiltering] = useState();

  const dispath = useDispatch();

  return (
    <Grid container spacing={3}>
      <Grid item xs={2.5} md={2.5}>
        <SidebarDiningRoom />
      </Grid>
      <Grid item xs={9.5} md={9.5}>
        <Box>
          <Box sx={{ pb: '10px', display: 'flex', justifyContent: 'space-between' }}>
            {/* <DebouncedInput value='' onChange={(value) => setFiltering(value)} placeholder={`Search... `} /> */}
            <Typography sx={{ fontSize: theme.typography.font_26_base }}>Hàng hóa</Typography>
            <Box>
              <Button
                onClick={() => dispath(openModalPrimary())}
                variant='contained'
                size='small'
                color='primary'
                sx={{ textWrap: 'nowrap' }}
                startIcon={<CreateNewFolderIcon />}>
                Thêm phòng/bàn
              </Button>
            </Box>
          </Box>
          <CoreTable columns={ColumnsDiningRoom()} data={data} filtering={filtering} setFiltering={setFiltering} />
          <BasicModalPrimary title={'Thêm phòng/bàn.'}>
            <FormCreateDiningRoom />
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
