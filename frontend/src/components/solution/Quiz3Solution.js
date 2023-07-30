import React from 'react';

import p1 from '../../assets/q3/1.png';
import p2 from '../../assets/q3/2.png';
import p3 from '../../assets/q3/3.png';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Quiz2Solution = () => {
  return (
    <Box>
      <Typography style={{ color: '#f00' }} variant='body1'>
        The process of the quiz3
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText secondary='如下图:1）在 Quiz3CreatorsTable.js 处理 handleAddButtonPressed 函数，负责调用保存接口，及保存成功后更新页面；2）在 marketplace.js 中使用 axios 调用后端保存接口；3）后端获取数据后保存到 quiz3Creators 中模拟数据存储。' />
        </ListItem>
        <img
          style={{ height: 'auto', width: '400px', marginLeft: 40 }}
          src={p1}
          alt='...'
        />
        <img
          style={{ height: 'auto', width: '400px', marginLeft: 40 }}
          src={p2}
          alt='...'
        />
        <img
          style={{ height: 'auto', width: '400px', marginLeft: 40 }}
          src={p3}
          alt='...'
        />
      </List>
    </Box>
  );
};

export default Quiz2Solution;
