import { storeValue } from '@/utils/storage';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { updateDetails } from '../api/useAuthApi';
import useAuth from '../hooks/useAuth';

const LanguageSwitcher = () => {
  const { locales, locale, asPath } = useRouter();
  const { user } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const langItems: ItemType[] = [];

  {
    locales?.map((loc) => {
      const langItem = {
        key: langItems.length,
        label: (
          <div
            onClick={() => handleLanguageChange(loc)}
            style={{ border: 'none' }}
          >
            <Link href={asPath} locale={loc}>
              {loc === 'en' ? (
                <StyledLang style={{}}>
                  <Image
                    height={20}
                    width={20}
                    src="/icons/gb.svg"
                    alt="Logo"
                  />
                </StyledLang>
              ) : (
                <StyledLang>
                  <Image
                    height={20}
                    width={20}
                    src="/icons/lt.svg"
                    alt="Logo"
                  />
                </StyledLang>
              )}
            </Link>
          </div>
        ),
      };
      langItems.push(langItem);
    });
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    storeValue('lang', language);
    if (user) {
      const { name, surname, email } = user;
      updateDetails({ language, name, surname, email })
        .then(() => console.log('done'))
        .catch((e) => console.log(e));
    }
  };

  const languageList = locales?.map((lang, index) => {
    return {
      key: index,
      label: (
        <div
          onClick={() => handleLanguageChange(lang)}
          style={{ border: 'none' }}
        >
          <Link href={asPath} locale={lang}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '5px 0',
              }}
            >
              <Image
                height={20}
                width={20}
                src={`/icons/${lang}.svg`}
                alt="Logo"
              />
            </div>
          </Link>
        </div>
      ),
    };
  });
  const languageOptions = <Menu items={languageList} />;

  return (
    <Container>
      <Dropdown
        trigger={['click']}
        overlay={languageOptions}
        overlayClassName={'dp-overlay'}
      >
        <div className="dropdown">
          <img
            style={{ width: '20px' }}
            src={`/icons/${selectedLanguage}.svg`}
            alt="Logo"
          />
          <DownOutlined />
        </div>
      </Dropdown>
    </Container>
  );
};

export default LanguageSwitcher;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  .dp-overlay {
    border-radius: 15px;
    overflow: hidden;
    ${({ theme }) => theme.boxShadow};
  }
  .dropdown {
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    align-self: flex-end;
    border-radius: 2rem;
    padding: 2px 12px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLang = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  img {
    width: 20px;
  }
`;
