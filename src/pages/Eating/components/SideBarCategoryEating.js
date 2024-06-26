import { Box, FormControl, MenuItem, Select, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import pathFormController from 'utils/constants/pathFormController';
import { theme } from '@Core/Theme/theme';
import color from '@Core/Theme/color';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useModal from 'components/Hook/useModal';
import ModalDetailCateBasic from 'components/Modal/ModalDetailCateBasic';
import ModalUpdateCategoryBasic from 'components/Modal/ModalUpdateCategoryBasic';
import categoryService from 'services/categoryService';

const styleWrapper = {
  borderRadius: 1,
  bgcolor: color.while,
  p: '16px 12px 22px 12px',
  mb: '18px',
  boxShadow: theme.shadows[2]
};

const SideBarCategoryEating = ({ dataCategoryEating }) => {
  const { onModalSecondary: onModalCategoryEating } = useModal();
  const [valueCategoryEating, setValueCategoryEating] = useState('all');

  const [modalUpdateCategoryEating, setModalUpdateCategoryEating] = useState(false);
  const [modalDetailCategoryEating, setModalDetailCategoryEating] = useState(false);
  const [categoryEatingItem, setCategoryEatingItem] = useState({});

  const handleFilterArea = (e) => {
    const areaId = String(e.target.value);
    setValueCategoryEating(areaId);
  };

  return (
    <Box sx={styleWrapper}>
      <Box sx={{ marginBottom: '18px', position: 'relative' }}>
        <Typography sx={{ fontWeight: theme.typography.font_semibold }}>Nhóm hàng hóa</Typography>
        <Tooltip title='Thêm khu vực'>
          <IconButton
            onClick={() => onModalCategoryEating()}
            sx={{
              '& .MuiSvgIcon-root': { fontSize: theme.typography.text_2xl },
              position: 'absolute',
              right: -2,
              top: -5,
              width: 29,
              height: 29
            }}>
            <AddCircleIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{}}>
        <Box sx={{ display: 'flex' }}>
          <CustomFormControl variant='standard' sx={{ minWidth: 120, width: '100%', fontSize: theme.typography.text_m, display: 'flex' }}>
            <Select size='small' value={valueCategoryEating} onChange={handleFilterArea}>
              <MenuItem value='all' sx={{ fontSize: theme.typography.text_m }}>
                Tất cả
              </MenuItem>
              {dataCategoryEating &&
                dataCategoryEating.map((item, index) => {
                  return (
                    <MenuItem
                      onClick={() => setCategoryEatingItem(item)}
                      key={index}
                      value={item[pathFormController.area_id]}
                      sx={{ fontSize: theme.typography.text_m }}>
                      {item[pathFormController.area_name]}
                    </MenuItem>
                  );
                })}
            </Select>
          </CustomFormControl>
          {valueCategoryEating !== 'all' && (
            <Box
              onClick={() => setModalDetailCategoryEating(true)}
              sx={{
                '& .MuiSvgIcon-root': { fontSize: theme.typography.text_xl, color: color.gray2 },
                borderBottom: '1px solid #949494',
                display: 'flex',
                alignItems: 'center'
              }}>
              <Tooltip title='Sửa khu vực'>
                <IconButton sx={{ width: 21, height: 21 }}>
                  <BorderColorIcon size='small' />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
      </Box>
      <ModalDetailCateBasic
        modalDetail={modalDetailCategoryEating}
        setModalUpdate={setModalUpdateCategoryEating}
        setModalDetail={setModalDetailCategoryEating}
        dataModal={categoryEatingItem}
        setValue={setValueCategoryEating}
        serviceName={categoryService}
      />
      <ModalUpdateCategoryBasic
        setModalDetail={setModalDetailCategoryEating}
        setModalUpdate={setModalUpdateCategoryEating}
        modalUpdate={modalUpdateCategoryEating}
        dataModal={categoryEatingItem}
        serviceName={categoryService}
      />
    </Box>
  );
};
const CustomFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInput-root::after': {
    border: `1px solid ${theme.palette.secondary.main}`
  }
}));
export default SideBarCategoryEating;
