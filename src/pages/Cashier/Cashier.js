import { theme } from '@Core/Theme/theme';
import { styled, Stack } from '@mui/material';
import React, { useState } from 'react';
import HeadCashier from './components/HeadCashier/HeadCashier';
import BodyCashier from './components/BodyCashier/BodyCashier';
import FooterCashier from './components/FooterCashier/FooterCashier';
import { useQuery } from '@tanstack/react-query';
import productService from 'services/productService';
import { BasicModalDetail, BasicModalPrimary, BasicModalSecondary, BasicModalUpdate } from 'components/Modal/Modal';
import ModalCombineOrder from './components/ModalCombineOrder';
import ModalSplitOrder from './components/ModalSplitOrder';
import ModalCheckBill from './components/ModalCheckBill';
import ModalUpdateTableBill from './components/ModalUpdateTableBill';
import diningRoomService from 'services/diningRoomService';
import ModalPayBill from './components/ModalPayBill';

const Cashier = () => {
  const [value, setValue] = React.useState(0);
  const [pramsEating, setPramsEating] = useState();
  const [openPayBill, setOpenPayBill] = React.useState(false);

  const { data: dataEating, refetch: refetchEating } = useQuery({
    queryKey: ['getProduct', pramsEating],
    queryFn: async () => {
      const res = await productService.getAll({ ...pramsEating, operator: 'like' });
      return res;
    }
  });

  const { data: dataDingingRoom } = useQuery({
    queryKey: ['getDiningRoom'],
    queryFn: async () => {
      const res = await diningRoomService.getAll();
      return res.data;
    }
  });

  return (
    <Stack>
      <WrapperCashier>
        <HeadCashier
          setPramsEating={setPramsEating}
          pramsEating={pramsEating}
          dataEating={dataEating}
          refetchEating={refetchEating}
          value={value}
          setValue={setValue}></HeadCashier>
        <BodyCashier value={value} setOpenPayBill={setOpenPayBill}></BodyCashier>
        <FooterCashier></FooterCashier>
      </WrapperCashier>
      <BasicModalPrimary width='850px' close={true} title='Ghép đơn.'>
        <ModalCombineOrder dataDingingRoom={dataDingingRoom} />
      </BasicModalPrimary>
      <BasicModalSecondary width='850px' close={true} title='Tách đơn.'>
        <ModalSplitOrder dataDingingRoom={dataDingingRoom} />
      </BasicModalSecondary>
      <BasicModalDetail width='850px' close={true} title='Kiểm đồ.'>
        <ModalCheckBill dataDingingRoom={dataDingingRoom} />
      </BasicModalDetail>
      <BasicModalUpdate close={true} title='Bàn ăn.' width='850px'>
        <ModalUpdateTableBill dataDingingRoom={dataDingingRoom} />
      </BasicModalUpdate>
      <ModalPayBill openPayBill={openPayBill} setOpenPayBill={setOpenPayBill} dataDingingRoom={dataDingingRoom} />
    </Stack>
  );
};

const WrapperCashier = styled('div')(() => ({
  height: '100vh',
  padding: '0 24px 34px',
  fontSize: theme.typography.text_m,
  backgroundColor: '#00408C'
}));
export default Cashier;
