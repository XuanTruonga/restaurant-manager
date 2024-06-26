import { Box, FormControl, MenuItem, Select, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import pathFormController from 'utils/constants/pathFormController';
import { theme } from '@Core/Theme/theme';
import color from '@Core/Theme/color';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { openModalSecondary } from '../../../redux/SliceModalSecondary';
import ModalDetailCateBasic from 'components/Modal/ModalDetailCateBasic';
import ModalUpdateCategoryBasic from 'components/Modal/ModalUpdateCategoryBasic';
import areaService from 'services/areaService';

const styleWrapper = {
  borderRadius: 1,
  bgcolor: color.while,
  p: '16px 12px 22px 12px',
  mb: '18px',
  boxShadow: theme.shadows[2]
};

const SideBarArea = ({ dataArea }) => {
  const dispath = useDispatch();
  const [valueArea, setValueArea] = useState('all');
  const [modalUpdateArea, setModalUpdateArea] = useState(false);
  const [modalDetailArea, setModalDetailArea] = useState(false);
  const [areaItem, setAreaItem] = useState({});

  const handleFilterArea = (e) => {
    const areaId = String(e.target.value);
    setValueArea(areaId);
  };

  return (
    <Box sx={styleWrapper}>
      <Box sx={{ marginBottom: '18px', position: 'relative' }}>
        <Typography sx={{ fontWeight: theme.typography.font_semibold }}>Khu vực</Typography>
        <Tooltip title='Thêm khu vực'>
          <IconButton
            onClick={() => dispath(openModalSecondary())}
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
            <Select size='small' value={valueArea} onChange={handleFilterArea}>
              <MenuItem value='all' sx={{ fontSize: theme.typography.text_m }}>
                Tất cả
              </MenuItem>
              {dataArea &&
                dataArea.map((item, index) => {
                  return (
                    <MenuItem
                      onClick={() => setAreaItem(item)}
                      key={index}
                      value={item[pathFormController.area_id]}
                      sx={{ fontSize: theme.typography.text_m }}>
                      {item[pathFormController.area_name]}
                    </MenuItem>
                  );
                })}
            </Select>
          </CustomFormControl>
          {valueArea !== 'all' && (
            <Box
              onClick={() => setModalDetailArea(true)}
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
        modalDetail={modalDetailArea}
        setModalUpdate={setModalUpdateArea}
        setModalDetail={setModalDetailArea}
        dataModal={areaItem}
        setValue={setValueArea}
        serviceName={areaService}
      />
      <ModalUpdateCategoryBasic
        setModalDetail={setModalDetailArea}
        setModalUpdate={setModalUpdateArea}
        modalUpdate={modalUpdateArea}
        dataModal={areaItem}
        serviceName={areaService}
      />
    </Box>
  );
};
const CustomFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInput-root::after': {
    border: `1px solid ${theme.palette.secondary.main}`
  }
}));
export default SideBarArea;
