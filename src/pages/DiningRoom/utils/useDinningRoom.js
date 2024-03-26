import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';
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

  return { dataArea, dataDiningRoom };
};

export default UseDinningRoom;
