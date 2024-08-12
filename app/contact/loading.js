'use client';
import { Hourglass } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Hourglass
      visible={true}
      height='80'
      width='80'
      ariaLabel='hourglass-loading'
      wrapperStyle={{}}
      wrapperClass=''
      colors={['#C026D3', '#F0ABFC']}
    />
  );
};

export default Loading;
