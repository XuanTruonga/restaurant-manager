import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';
import categoryService from 'services/categoryService';
import diningRoomService from 'services/diningRoomService';
import { useCallApi } from 'useContext/ContextCallApi';

const UseDinningRoom = (id) => {
  const { api } = useCallApi();

  const { data: dataDiningRoom } = useQuery({
    queryKey: ['getAllDiningRoom', api],
    queryFn: async () => {
      try {
        const res = await diningRoomService.getAll();
        return res.data;
      } catch (error) {}
    }
  });

  const { data: dataArea } = useQuery({
    queryKey: ['getAllArea', api],
    queryFn: async () => {
      try {
        const res = await areaService.getAll();
        return res.data;
      } catch (error) {}
    }
  });

  const { data: dataCategoryEating } = useQuery({
    queryKey: ['getAllCategotyProduct', api],
    queryFn: async () => {
      try {
        const res = await categoryService.getAll();
        return res.data;
      } catch (error) {}
    }
  });

  return { dataArea, dataDiningRoom, dataCategoryEating };
};

export default UseDinningRoom;
