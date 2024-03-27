/* eslint-disable react-hooks/exhaustive-deps */
import { CoreTableActionView } from '@Core/components/table/CoreTableAction';
import { columnHelper } from '@Core/components/table/CoreTableBody';
import { Box, Button, Grid, Typography } from '@mui/material';
import { BasicModalDetail, BasicModalPrimary, BasicModalSecondary, BasicModalUpdate } from 'components/Modal/Modal';
import { statusDingingRoom } from 'pages/DiningRoom/utils/statusDiningRoom';
import UseDinningRoom from 'pages/DiningRoom/utils/useDinningRoom';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import SidebarEating from './components/SideBarEeting';
import React, { useMemo, useState } from 'react';
import CoreTable from '@Core/components/table/CoreTable';
import IndeterminateCheckbox from 'components/Basic/IndeterminateCheckbox';
import useModal from 'components/Hook/useModal';
import { theme } from '@Core/Theme/theme';
import { useRef } from 'react';
import FormCreateCategoryEating from './components/FormCreateCategoryEating';

const Eating = () => {
  const [table, setTable] = useState();
  const tableInstance = useRef();
  const { dataDiningRoom, dataCategoryEating } = UseDinningRoom();
  const { onModalDetail, onModalPrimary: onModalAddEating } = useModal();

  const handleViewDetailDiningRoom = (value) => {
    onModalDetail(value);
  };
  const a = () => {};

  const columnDiningRoom = useMemo(() => {
    tableInstance.current = table;
    return [
      {
        id: 'select',
        header: (table) => {
          return (
            <IndeterminateCheckbox
              checked={tableInstance.current?.getIsAllRowsSelected() || false}
              indeterminate={tableInstance.current?.getIsSomeRowsSelected() || a()}
              onChange={tableInstance.current?.getToggleAllRowsSelectedHandler() || a()}
            />
          );
        },
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row?.getIsSelected(),
              disabled: !row?.getCanSelect(),
              indeterminate: row?.getIsSomeSelected(),
              onChange: row?.getToggleSelectedHandler()
            }}
          />
        )
      },

      columnHelper.accessor((_, index) => index + 1, {
        header: 'Stt',
        minWidth: 50
      }),
      columnHelper.accessor('name', {
        header: 'Tên hàng',
        minWidth: 150
      }),
      columnHelper.accessor('areaId', {
        header: 'Tên nhóm hàng',
        minWidth: 100,
        cell: ({ cell }) => {
          const areaId = Number(cell.getValue());
          const areaItem = dataCategoryEating?.find((area) => {
            return areaId === area.id;
          });
          return <Typography>{areaItem?.name}</Typography>;
        }
      }),
      columnHelper.accessor('seat', {
        header: 'Giá bán',
        enableGlobalFilter: false,
        minWidth: 70
      }),
      columnHelper.accessor('status', {
        header: 'Giá vốn',
        minWidth: 120,
        cell: ({ row }) => {
          return !row?.original?.status ? (
            <Typography>{statusDingingRoom.active}</Typography>
          ) : (
            <Typography>{statusDingingRoom.shutDown}</Typography>
          );
        }
      }),
      columnHelper.accessor('', {
        header: 'Tồn kho',
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
  }, [table]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={2.5} md={2.5}>
        <SidebarEating dataCategoryEating={dataCategoryEating} />
      </Grid>
      <Grid item xs={9.5} md={9.5}>
        <Box>
          <Box sx={{ pb: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: theme.typography.font_26_base }}>Hàng hóa</Typography>
            <Box>
              <Button
                onClick={() => onModalAddEating()}
                variant='contained'
                size='small'
                color='primary'
                sx={{ textWrap: 'nowrap' }}
                startIcon={<CreateNewFolderIcon />}>
                Thêm hàng hóa
              </Button>
            </Box>
          </Box>
          {dataDiningRoom?.length > 0 && <CoreTable columns={columnDiningRoom} data={dataDiningRoom} setTable={setTable} />}
          <BasicModalPrimary title={'Thêm phòng/bàn.'}>{/* <FormCreateDiningRoom dataArea={dataArea} /> */}</BasicModalPrimary>
          <BasicModalSecondary title='Thêm nhóm hàng hóa.' width={'480px'}>
            <FormCreateCategoryEating />
          </BasicModalSecondary>
          <BasicModalDetail title='Thông tin phòng/bàn.' width={'600px'}>
            {/* <DetailDiningRoom /> */}
          </BasicModalDetail>
          <BasicModalUpdate title='Sửa thông tin phòng/bàn.' width={'600px'}>
            {/* <FormUpdateDiningRoom /> */}
          </BasicModalUpdate>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Eating;
