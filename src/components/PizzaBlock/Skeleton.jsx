import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={282}
    height={500}
    viewBox='0 0 282 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <circle cx='125' cy='125' r='125' />
    <rect x='0' y='279' rx='10' ry='10' width='274' height='30' />
    <rect x='0' y='323' rx='10' ry='10' width='280' height='88' />
    <rect x='254' y='351' rx='0' ry='0' width='1' height='0' />
    <rect x='119' y='429' rx='16' ry='16' width='163' height='45' />
    <rect x='9' y='438' rx='9' ry='9' width='80' height='34' />
  </ContentLoader>
);

export default Skeleton;
