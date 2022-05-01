import React from 'react';
import { Spin } from '@douyinfe/semi-ui';
import './index.less';

const Loading = () => (
  <div className="loader-container">
    <Spin tip="加载中..." size="large" />
  </div>
);

export default Loading;
