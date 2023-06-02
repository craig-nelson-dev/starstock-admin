import { CATEGORY_STATUSES, PAGES } from '@utils/constant';
import { Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DslCategory, Maybe, reloadPage, TablePage, useDataTable } from 'dsl-admin-base';
import { useMemo } from 'react';
import { Text } from 'rebass';

const { Option } = Select;

const baseColumns: ColumnsType<DslCategory> = [
  {
    title: 'Position',
    width: '5%',
    dataIndex: 'position',
    sorter: true,
    render: () => {
      return <Text>1</Text>;
    },
  },
  {
    title: 'Name',
    width: '40%',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    sorter: true,
    render: (name: string) => {
      return <Text pr="4">{name}</Text>;
    },
  },
  {
    title: 'Products',
    width: '30%',
    dataIndex: 'products',
    align: 'center',
    sorter: true,
    render: () => {
      return <Text textAlign="center">365</Text>;
    },
  },
  {
    title: 'Status',
    align: 'right',
    width: '25%',
    dataIndex: 'status',
    sorter: true,
    key: 'status',
    render: (_: string, record) => {
      return (
        <Select
          defaultValue={record?.status?.displayName}
          style={{ width: 104 }}
          className="select-no-border"
        >
          {CATEGORY_STATUSES.map((stt, idx) => (
            <Option key={`${stt}-${idx}`} value={stt.value}>
              {stt.label}
            </Option>
          ))}
        </Select>
      );
    },
  },
];

interface Props {
  categories: DslCategory[];
  totalItems: number;
  loading: boolean;
}

interface DslCategoryTreeSub extends DslCategory {
  children?: Maybe<Array<DslCategoryTreeSub>>;
}

const CategoriesTable: React.FC<Props> = ({ categories, totalItems, loading }) => {
  const { columns, selectedRowKeys, rowSelection, onchange } = useDataTable(baseColumns);

  const onClickBulk = async (key: string) => {
    if (key === 'delete') {
      // TODO: handle delete
      // await CategoryRepository.deleteProducts(selectedRowKeys as string[]);
    }

    reloadPage();
  };

  const menu = [
    {
      label: 'Delete Selected',
      value: 'delete',
    },
    {
      label: 'Edit Seleteced',
      value: 'edit',
    },
  ];

  const treeSubCategories: DslCategoryTreeSub[] = useMemo(
    () =>
      categories.map((cat) => {
        return subCategoriesRecursion(cat);
      }),
    [categories],
  );

  return (
    <TablePage
      pagination={{
        storageKey: PAGES.CATEGORIES,
        type: 'Categories',
        totalItems,
        menu,
        qtySelected: selectedRowKeys.length,
        onClickBulk,
      }}
    >
      <Table<DslCategoryTreeSub>
        className="clickable-row"
        onChange={onchange}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={treeSubCategories}
        pagination={false}
        rowKey="id"
        loading={loading}
        showSorterTooltip={false}
        expandIconColumnIndex={3}
        rowClassName="table-row-expanded-center"
      />
    </TablePage>
  );
};

export default CategoriesTable;

function subCategoriesRecursion(category: DslCategory): DslCategoryTreeSub {
  while (Array.isArray(category.subCategories) && category.subCategories.length > 0) {
    const { subCategories } = category;
    ((category as unknown) as DslCategoryTreeSub).children = (subCategories as unknown) as DslCategoryTreeSub[];
    subCategories.forEach((sub: any) => {
      return subCategoriesRecursion(sub);
    });
    const { subCategories: _, ...rest } = category;
    return rest;
  }
  return category;
}
