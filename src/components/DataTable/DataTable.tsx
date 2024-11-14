import { Table, TableProps } from 'antd';
import styled from 'styled-components';

interface IDataTableProps extends TableProps<any> {
  noShadow?: boolean;
  totalCount?: number;
  pageSize?: number;
  onPageChange?: (_page: number) => void;
}

const DataTable = ({
  noShadow,
  totalCount,
  pageSize = 60,
  onPageChange,
  ...props
}: IDataTableProps) => {
  return (
    <TableContainer noShadow={noShadow!!}>
      <StyledTable
        size="middle"
        scroll={{
          x: 'max-content',
        }}
        pagination={{
          total: totalCount,
          showTotal: (total, range) => {
            return `Showing ${range[0]}-${range[1]} of ${total} items`;
          },
          position: ['bottomLeft', 'topLeft'],
          pageSize,
          // hideOnSinglePage: true,
          showSizeChanger: false,
          responsive: true,
          onChange: onPageChange,
        }}
        {...props}
      />
    </TableContainer>
  );
};

export default DataTable;

interface ITableContainerProps {
  noShadow: boolean;
}
const TableContainer = styled.div<ITableContainerProps>`
  background: #fff;
  box-shadow: ${(p) =>
    p.noShadow ? 'none' : '-2px 0px 10px 1px rgb(221, 221, 221)'};
  border-radius: 10px;

  tr:nth-child(odd) {
    background-color: #f3f3f5;
  }
  .ant-table-column-sorters {
    .ant-table-column-title {
      color: #009fda;
    }
  }
  .ant-table-cell a {
    color: #009fda;
  }
`;

const StyledTable = styled(Table)`
  .ant-pagination {
    padding-left: 2rem;
  }
`;
