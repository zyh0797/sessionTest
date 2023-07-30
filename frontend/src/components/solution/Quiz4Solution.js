import React from 'react';

import p1 from '../../assets/q4/1.png';
import p2 from '../../assets/q4/2.png';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Quiz2Solution = () => {
  return (
    <Box>
      <Typography style={{ color: '#f00' }} variant='body1'>
        The process of the quiz4
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary='根据此题要求，主要的是优化在返回数据时的过滤查找的耗时，Map对比与Array.filter中有更好的查找效率，故先进数据存储改为Map可提升查找效率。' />
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
      </List>
    </Box>
  );
};

export default Quiz2Solution;
