/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';
import categoryService from 'services/categoryService';
import diningRoomService from 'services/diningRoomService';
import productService from 'services/productService';

const useApiGetAll = () => {
  const { data: dataDiningRoom, refetch: refetchApiDiningRoom } = useQuery({
    queryKey: ['getAllDiningRoom'],
    queryFn: async () => {
      const res = await diningRoomService.getAll();
      return res.data;
    }
  });

  const { data: dataArea, refetch: refetchApiArea } = useQuery({
    queryKey: ['getAllArea'],
    queryFn: async () => {
      const res = await areaService.getAll();
      return res.data;
    }
  });

  const { data: dataCategoryEating, refetch: refetchApiCategoryEating } = useQuery({
    queryKey: ['getAllCategotyProduct'],
    queryFn: async () => {
      const res = await categoryService.getAll();
      return res.data;
    }
  });

  const { data: dataEating, refetch: refetchApiEating } = useQuery({
    queryKey: ['getAllEating'],
    queryFn: async () => {
      const res = await productService.getAll();
      return res.data;
    }
  });

  return {
    dataArea,
    dataDiningRoom,
    dataCategoryEating,
    dataEating,
    refetchApiDiningRoom,
    refetchApiArea,
    refetchApiCategoryEating,
    refetchApiEating
  };
};

export default useApiGetAll;
