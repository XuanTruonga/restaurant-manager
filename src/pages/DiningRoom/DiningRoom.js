import CoreTable from '@Core/components/table/CoreTable';
import { columnsDinningRoom } from './utils/columnsDinningRoom';
import { Fragment } from 'react';
import BasicModal from 'components/Modal/BasicModal';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';

const data = [
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTB',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTC',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTD',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },

  {
    diningRoom: 'HTE',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTF',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },
  {
    diningRoom: 'HTG',
    note: 'ok ban oi',
    area: 'khu vuc 8',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  },

  {
    diningRoom: 'HTA',
    note: 'ok ban oi',
    area: 'khu vuc 1',
    quantitySeats: '5',
    status: 'đang hoạt động',
    numericalOrder: '1'
  }
];

const DiningRoom = () => {
  const dispath = useDispatch();

  const handleChange = (row) => {
    dispath(openModal());
  };
  return (
    <Fragment>
      <CoreTable columns={columnsDinningRoom} data={data} onClick={handleChange} />
      <BasicModal title={'Thêm phòng/bàn'} />
    </Fragment>
  );
};

export default DiningRoom;
