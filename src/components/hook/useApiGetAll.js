/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';
import categoryService from 'services/categoryService';
import diningRoomService from 'services/diningRoomService';
import productService from 'services/productService';
import useSearchParamsHook from './useSearchParamsHook';

const useApiGetAll = () => {
  const { searchParams } = useSearchParamsHook();
  const prams = { page: 1, ...searchParams, isPagination: true, operator: 'like' };
  const { data: dataDiningRoom, refetch: refetchApiDiningRoom } = useQuery({
    queryKey: ['getAllDiningRoom', searchParams],
    queryFn: async () => {
      const res = await diningRoomService.getAll(prams);
      return res;
    }
  });

  const { data: dataArea, refetch: refetchApiArea } = useQuery({
    queryKey: ['getAllArea', searchParams],
    queryFn: async () => {
      const res = await areaService.getAll(prams);
      return res;
    }
  });

  const { data: dataCategoryEating, refetch: refetchApiCategoryEating } = useQuery({
    queryKey: ['getAllCategotyProduct', searchParams],
    queryFn: async () => {
      const res = await categoryService.getAll(prams);
      return res;
    }
  });

  const { data: dataEating, refetch: refetchApiEating } = useQuery({
    queryKey: ['getAllEating', searchParams],
    queryFn: async () => {
      const res = await productService.getAll(prams);
      return res;
    }
  });

  return {
    dataArea: dataArea?.data,
    dataDiningRoom: dataDiningRoom?.data,
    dataCategoryEating: dataCategoryEating?.data,
    dataEating: dataEating?.data,
    paginationDiningRoom: dataDiningRoom?.pagination,
    paginationEating: dataEating?.pagination,
    refetchApiDiningRoom,
    refetchApiArea,
    refetchApiCategoryEating,
    refetchApiEating
  };
};

export default useApiGetAll;
