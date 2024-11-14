import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        min-width: 320px; // Base minimum width for mobile
        background: #f0f2f5;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    /* @media screen and (min-width: 760px) {
        body {
            min-width: 760px; // Your original minimum width
        }
    } */
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .ant-menu-vertical .ant-menu-item {
      margin: 0 !important;
    }
    .ant-menu-vertical {
      padding-bottom: 1rem !important;
      .ant-menu-item-group {
        padding-left: 1rem;
        .ant-menu-item {
          margin: 0 !important;
          padding: 0 !important;
          height: 2rem;
        }
        .ant-menu-item:not(.ant-menu-item-selected):hover {
          background-color: transparent;
          border-radius: 0;
          a {
            border-bottom: 1px solid ${({ theme }) => theme.colors.primary};;
          }
        }

      }
    }
    .ant-select-item-option-active, .ant-select-item-option-selected{
      background-color: #e0eaf5 !important;
    }

    /* Custom styles for the Cancel button */
.custom-modal-cancel-button {
  background-color: red; /* Change to your desired background color */
  color: #ffffff; /* Change to your desired text color */
}

/* Custom styles for the OK button */
.custom-modal-ok-button {
  background-color: blue; /* Change to your desired background color */
  color: #ffffff; /* Change to your desired text color */
}

/* ant-table-pagination ant-table-pagination-right */
.ant-pagination {
  margin-left: 30px !important;
}
.ant-pagination-item,
.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link,
.ant-pagination-options-quick-jumper input {
  border-radius: 25px !important;
}
`;

export default GlobalStyle;
