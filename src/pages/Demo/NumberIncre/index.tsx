import React, { useState } from 'react';
import { produce } from 'immer';

import { PageHeaderWrapper } from '@ant-design/pro-layout';

import Test from './Test';

let arr: any[] = [];
for (let q = 0; q < 2; q++) {
  if (q % 2 === 1) {
    arr = arr.concat({
      id: q,
      name: '点击改变数据：' + q,
    });
  } else {
    arr = arr.concat(q);
  }
}

export default ({}) => {
  const [list, setList] = useState(arr);

  const onChangeItem = (index: number) => {
    let newArr = [...list];
    newArr = produce(newArr, (draftArr) => {
      draftArr[index].name += index;
    });
    setList(newArr);
  };

  return (
    <PageHeaderWrapper>
      <Test list={list} onChangeItem={(e: number) => onChangeItem(e)} />
    </PageHeaderWrapper>
  );
};
