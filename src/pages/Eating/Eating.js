/* eslint-disable react-hooks/exhaustive-deps */
import { CoreTableActionView } from '@Core/components/table/CoreTableAction';
import { columnHelper } from '@Core/components/table/CoreTableBody';
import { Box, Grid, Typography } from '@mui/material';
import { BasicModalDetail, BasicModalPrimary, BasicModalSecondary, BasicModalUpdate } from 'components/Modal/Modal';
import SidebarEating from './components/SideBarEeting';
import React, { useMemo, useState } from 'react';
import CoreTable from '@Core/components/table/CoreTable';
import IndeterminateCheckbox from 'components/Basic/IndeterminateCheckbox';
import useModal from 'components/Hook/useModal';
import { useRef } from 'react';
import FormCreateCategoryEating from './components/FormCreateCategoryEating';
import FormCreateEating from './components/FormCreateEating/FormCreateEating';
import useApiGetAll from 'components/Hook/useApiGetAll';
import DetailEating from './components/DetailEating';
import FormUpdateEating from './components/FormUpdateEating';
import ControlTableEatingTop from './components/ControlTableEatingTop';

const Eating = () => {
  const [table, setTable] = useState();
  const [rowCheckBox, setRowCheckBox] = useState();
  const tableInstance = useRef();
  const { dataEating, dataCategoryEating } = useApiGetAll();
  const { onModalDetail } = useModal();
  tableInstance.current = table;
  const columnEating = useMemo(() => {
    return [
      {
        id: 'select',
        header: () => {
          return (
            <IndeterminateCheckbox
              checked={tableInstance.current?.getIsAllRowsSelected()}
              indeterminate={tableInstance.current?.getIsSomeRowsSelected()}
              onChange={tableInstance.current?.getToggleAllRowsSelectedHandler()}
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
        minWidth: 180
      }),
      columnHelper.accessor('categoryId', {
        header: 'Tên nhóm hàng',
        minWidth: 130,
        cell: ({ cell }) => {
          const categoryId = Number(cell.getValue());
          const categoryItem =
            dataCategoryEating &&
            dataCategoryEating?.find((category) => {
              return categoryId === category.id;
            });
          return <Typography>{categoryItem?.name}</Typography>;
        }
      }),
      columnHelper.accessor('price', {
        header: 'Giá bán',
        enableGlobalFilter: false,
        minWidth: 100,
        cell: (row) => <Typography>{Number(row.getValue()).toLocaleString()}</Typography>
      }),
      columnHelper.accessor('cost', {
        header: 'Giá vốn',
        minWidth: 100
      }),
      columnHelper.accessor('quantity', {
        header: 'Tồn kho',
        enableGlobalFilter: false,
        minWidth: 80
      }),
      columnHelper.accessor('', {
        header: 'Thao tác',
        enableGlobalFilter: false,

        minWidth: 80,
        cell: ({ row }) => {
          const subject = row?.original;
          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
              <CoreTableActionView callback={() => onModalDetail(subject)} />
            </Box>
          );
        }
      })
    ];
  }, [table, dataEating]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={2.5} md={2.5}>
        <SidebarEating dataCategoryEating={dataCategoryEating} />
      </Grid>
      <Grid item xs={9.5} md={9.5}>
        <Box>
          <ControlTableEatingTop rowCheckBox={rowCheckBox} />
          {dataEating?.length > 0 && (
            <CoreTable columns={columnEating} data={dataEating} setTable={setTable} setRowCheckBox={setRowCheckBox} />
          )}
          <BasicModalPrimary width={960} title={'Thêm hàng hóa.'}>
            {<FormCreateEating />}
          </BasicModalPrimary>
          <BasicModalSecondary title='Thêm nhóm hàng hóa.' width={'480px'}>
            <FormCreateCategoryEating />
          </BasicModalSecondary>
          <BasicModalDetail title='Chi tiết hàng hóa.' width={'700px'}>
            <DetailEating />
          </BasicModalDetail>
          <BasicModalUpdate title='Cập nhập hàng hóa.' width={960}>
            <FormUpdateEating />
          </BasicModalUpdate>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Eating;
