import React from 'react';

import p1 from '../../assets/q2/1.png';
import p2 from '../../assets/q2/2.png';
import p3 from '../../assets/q2/3.png';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Quiz2Solution = () => {
  return (
    <Box>
      <Typography style={{ color: '#f00' }} variant='body1'>
        The process of the quiz2
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary='1. Show `Email` column in the table'
            secondary='如下图更改 Quiz2CreatorsTable.js 中表格显示区的渲染代码，将数据中的 email 解构出来后渲染。'
          />
        </ListItem>
        <img
          style={{ height: 'auto', width: '400px', marginLeft: 40 }}
          src={p1}
          alt='...'
        />
        <ListItem>
          <ListItemText
            primary='2. Complete the `Add` feature'
            secondary='1）处理 Quiz2CreatorsTable.js 中的 handleAddButtonPressed 函数，调用 dispatch 实现数据存入。2）修改 marketplace.js 中的 addNewQuiz2Creator 函数，通过 action 更新 redux 的 state 。'
          />
        </ListItem>
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
