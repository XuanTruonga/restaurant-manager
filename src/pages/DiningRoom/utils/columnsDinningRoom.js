import { columnHelper } from "@Core/components/table/CoreTableBody";

export const columnsDinningRoom = [
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
      enableGlobalFilter: false,
      minWidth: 100
    }),
    columnHelper.accessor('status', {
      header: 'Trạng thái',
      minWidth: 150
    }),
    columnHelper.accessor((row, index) => index + 1, {
      header: 'STT',
      enableGlobalFilter: false,
      minWidth: 100
    })
  ];