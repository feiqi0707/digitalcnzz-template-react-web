import React, { Suspense } from 'react';
import PageLoading from './components/PageLoading';

const DataAnalysis = () => {
  return (
    <div>
      <Suspense fallback={<PageLoading />}>数据分析</Suspense>
    </div>
  );
};

export default DataAnalysis;
