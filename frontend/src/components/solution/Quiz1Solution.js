import React from 'react';

import picture from '../../assets/q1/structure.png';
import code from '../../assets/q1/serverJs.png';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Quiz1Solution = () => {
  return (
    <Box>
      <Typography style={{ color: '#f00' }} variant='body1'>
        There are my answer for quiz1:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="1. The project's structure" />
        </ListItem>
        <img
          style={{ height: 'auto', width: '400px', marginLeft: 40 }}
          src={picture}
          alt='...'
        />
        <ListItem>
          <ListItemText
            primary='2. Life of a request'
            secondary='Answer: 根据server.js中的代码，node服务对于路径中包含了“/api/v1”的请求使用 Routes 进行处理，没有包含的则进入下面if-else的判断逻辑进行转发或返回响应。所以http://localhost:8080 会被转发到，而 http://localhost:8080/api/v1? Routes会根据？的值进行路由匹配。'
          />
        </ListItem>
        <img
          style={{ height: 'auto', width: '400px', marginLeft: 40 }}
          src={code}
          alt='...'
        />
      </List>
    </Box>
  );
};

export default Quiz1Solution;
