import CoreTable from '@Core/components/table/CoreTable';
import { createColumnHelper } from '@tanstack/react-table';

export const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('diningRoom', {
    header: 'Tên phòng bàn',
    minWidth: 150
  }),
  {
    accessorKey: 'note',
    header: 'Ghi chú',
    minWidth: 250
  },
  columnHelper.accessor('area', {
    header: 'Khu vực',
    minWidth: 150
  }),
  columnHelper.accessor('quantitySeats', {
    header: 'Số ghế',
    minWidth: 100
  }),
  columnHelper.accessor('status', {
    header: 'Trạng thái',
    minWidth: 150
  }),
  columnHelper.accessor((row, index) => index + 1, {
    header: 'STT',
    minWidth: 100
  })
];
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
  }
];

const DiningRoom = () => {
  return <CoreTable columns={columns} data={data} />;
};

export default DiningRoom;
