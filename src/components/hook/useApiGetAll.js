/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';
import categoryService from 'services/categoryService';
import diningRoomService from 'services/diningRoomService';
import productService from 'services/productService';
import { useCallApi } from 'useContext/ContextCallApi';

const useApiGetAll = () => {
  const { api } = useCallApi();

  const { data: dataDiningRoom } = useQuery({
    queryKey: ['getAllDiningRoom', api],
    queryFn: async () => {
      const res = await diningRoomService.getAll();
      return res.data;
    }
  });

  const { data: dataArea } = useQuery({
    queryKey: ['getAllArea', api],
    queryFn: async () => {
      const res = await areaService.getAll();
      return res.data;
    }
  });

  const { data: dataCategoryEating } = useQuery({
    queryKey: ['getAllCategotyProduct', api],
    queryFn: async () => {
      const res = await categoryService.getAll();
      return res.data;
    }
  });

  const { data: dataEating } = useQuery({
    queryKey: ['getAllEating', api],
    queryFn: async () => {
      const res = await productService.getAll();
      return res.data;
    }
  });

  return { dataArea, dataDiningRoom, dataCategoryEating, dataEating };
};

export default useApiGetAll;
