import { Skeleton, Spin } from 'antd';
import styled from 'styled-components';

const AppInitSkeleton = () => {
  return (
    <SkeletonContainer style={{ marginTop: 50, padding: '2% 4%' }}>
      <Skeleton active />
      <Spin tip="Initializing application" />
      <Skeleton active />
    </SkeletonContainer>
  );
};

export default AppInitSkeleton;

const SkeletonContainer = styled.div`
  h3,
  li {
    width: 100% !important;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
