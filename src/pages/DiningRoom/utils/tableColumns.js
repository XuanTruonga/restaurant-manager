const TABLE_COLUMNS = [
  {
    name: 'Tên phòng/bàn',
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: 'Ghi chú',
    selector: (row) => row.note,
    sortable: true,
    grow: 2
  },
  {
    name: 'Khu vực',
    selector: (row) => row.area,
    sortable: true
  },
  {
    name: 'Số ghế',
    selector: (row) => row.quantitySeats,
    sortable: true
  },
  {
    name: 'Trạng thái',
    selector: (row) => row.status,
    sortable: true
  },
  {
    name: 'Số thự tứ  ',
    selector: (row) => row.ordinalNumber,
    sortable: true
  }
];

export default TABLE_COLUMNS;
