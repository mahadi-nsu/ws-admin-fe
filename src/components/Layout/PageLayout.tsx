import Image from 'next/image';
import styled from 'styled-components';

interface IPageLayoutProps {
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  icon: string;
  title: React.ReactNode;
  subtitle?: string;
}

const PageLayout = ({
  children,
  icon,
  title,
  subtitle,
  rightContent,
}: IPageLayoutProps) => {
  return (
    <StyledLayout>
      <PageInfoContainer>
        <TextsContainer>
          {icon && <Image src={icon} alt={'icon'} width={64} height={64} />}
          <div className="titles">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </TextsContainer>
        {rightContent}
      </PageInfoContainer>
      <ContentContainer>{children}</ContentContainer>
    </StyledLayout>
  );
};

export default PageLayout;

const StyledLayout = styled.div`
  margin-bottom: 48px;
  min-width: 600px;
`;

const PageInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #fff;
  padding: 0% 4%;
  gap: 20px;
  ${({ theme }) => theme.boxShadow}
`;

const TextsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  .titles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.primary};

    h3 {
      font-size: 1.3rem;
      font-weight: bold;
    }
    p {
      font-size: 0.9rem;
      margin-top: 5px;
    }
  }
`;

const ContentContainer = styled.div`
  margin: 2% 4%;
`;
