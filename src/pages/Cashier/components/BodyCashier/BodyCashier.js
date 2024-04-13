import { theme } from '@Core/Theme/theme';
import { styled } from '@mui/material';
import React, { useState } from 'react';
import { FILTER_STATUS } from 'pages/Cashier/utlis/constant';
import BodyCashierRight from './BodyCashierRigh/BodyCashierRight';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';
import diningRoomService from 'services/diningRoomService';
import { useQuery } from '@tanstack/react-query';
import BodyCashierLeftTable from './BodyCashierLeft/BodyCashierLeftTable';

const BodyCashier = ({ setOpenPayBill, value }) => {
  const { searchParams } = useSearchParamsHook();
  const [valueArea, setValueArea] = useState(searchParams.areaId || 'all');
  const [statusDiningRoom, setStatusDiningRoom] = useState(searchParams.status || FILTER_STATUS.all);
  const [dataDiningRoom, setDataDiningRoom] = useState();

  const { data: listDiningRoom } = useQuery({
    queryKey: ['getDinngRoom', searchParams],
    queryFn: async () => {
      const res = await diningRoomService.getAll({ ...searchParams, operator: 'like' });
      return res.data;
    }
  });

  return (
    <WrapperBodyCashier>
      <BodyCashierLeftTable
        value={value}
        listDiningRoom={listDiningRoom}
        valueArea={valueArea}
        setValueArea={setValueArea}
        statusDiningRoom={statusDiningRoom}
        setStatusDiningRoom={setStatusDiningRoom}
        dataDiningRoom={dataDiningRoom}
        setDataDiningRoom={setDataDiningRoom}
      />
      <BodyCashierRight dataDiningRoom={dataDiningRoom} setOpenPayBill={setOpenPayBill} />
    </WrapperBodyCashier>
  );
};

export default BodyCashier;

const WrapperBodyCashier = styled('div')(() => ({
  fontSize: 13,
  display: 'flex',
  gap: '20px',
  flexDirection: 'row',
  height: `calc(100vh - ${theme.restaurants.HeadCashierHeight} - ${theme.restaurants.BodyCashierHeight} - 6px)`
}));
