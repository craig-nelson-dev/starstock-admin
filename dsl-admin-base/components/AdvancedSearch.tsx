import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { SavedSearch } from '../models';
import { Modal, Divider, Input, Row, Col, Button } from 'antd';
import { Box, Text } from 'rebass';
import { useRouter } from 'next/router';
import { reloadPage } from '../utils/reload-page';
import { useState } from 'react';
import React from 'react';
import { useEvent } from '../hooks/event';

interface SavedSearchRepository {
  deleteSavedSearch(id: string): Promise<void>;
  createSavedSearch(params: any): Promise<string>;
}

interface Props {
  savedSearches?: SavedSearch[];
  repository: SavedSearchRepository;
  type: string;
}

export const AdvancedSearch: React.FC<Props> = ({ savedSearches, repository, children, type }) => {
  const router = useRouter();
  const activeId = router.query.savedSearchId || '';
  const [isOpenForm, setOpenForm] = useState(false);
  const [name, setName] = useState('');

  useEvent('OPEN_ADVANCED_SEARCH', () => {
    setOpenForm(true);
  });

  const requestSearchFormData = useEvent('REQUEST_SEARCH_FORM_DATA');

  useEvent(
    'SUBMIT_SEARCH_FORM',
    async (values) => {
      if (!name.trim()) {
        router.push({ pathname: router.pathname, query: { ...values, advancedSearch: '1' } });
        closeForm();
        return;
      }

      const savedSearchId = await repository.createSavedSearch({
        ...values,
        savedSearchName: name,
      });

      if (savedSearchId) {
        router.push({ pathname: router.pathname, query: { savedSearchId } });
        closeForm();
      }
    },
    [name],
  );

  const items: SavedSearch[] = [
    {
      name: `All ${type}`,
      id: '',
    },
    ...(savedSearches || []),
  ];

  const onSelectSearch = (id: string) => {
    router.push({ pathname: router.pathname, query: { savedSearchId: id } });
  };

  const deleteSavedSearch = async (id: string) => {
    await repository.deleteSavedSearch(id);
    if (activeId === id) {
      router.push({ pathname: router.pathname, query: { savedSearchId: null } });
    } else {
      reloadPage();
    }
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  return (
    <Box sx={{ mb: 3, mt: 4, display: 'none' }}>
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <Box
            onClick={() => {
              onSelectSearch(item.id);
            }}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              mr: 2,
              position: 'relative',
              fontWeight: 500,
              py: 1,
              px: 4,
              color: isActive ? 'white' : 'textColor',
              bg: isActive ? 'primary' : 'white',
              cursor: 'pointer',
              textTransform: 'uppercase',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: isActive ? 'primary' : 'midGrey',
              height: 38,
            }}
            key={item.id}
          >
            {item.name}
            {item.id !== '' && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '4px',
                  right: '5px',
                  p: 1,
                  ':hover': { color: '#333' },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSavedSearch(item.id);
                }}
              >
                <CloseOutlined />
              </Box>
            )}
          </Box>
        );
      })}
      <PlusOutlined
        onClick={() => {
          setOpenForm(true);
        }}
        style={{ fontSize: 18, marginLeft: 10, cursor: 'pointer' }}
      />
      <Modal
        title="Advanced Search"
        visible={isOpenForm}
        okText="Search"
        footer={null}
        maskClosable={false}
        onCancel={closeForm}
        destroyOnClose={false}
      >
        <Box
          sx={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto', overflowX: 'hidden', p: 1 }}
        >
          {children}
        </Box>
        <Divider style={{ marginTop: 0 }}></Divider>
        <Box sx={{ px: 2 }}>
          <Row align="middle" gutter={16}>
            <Col>
              <Text>Save this search as</Text>
            </Col>
            <Col>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Input>
            </Col>
            <Box sx={{ ml: 'auto' }} />
            <Col>
              <Button>Save</Button>
            </Col>
          </Row>
        </Box>
        <Box sx={{ justifyContent: 'flex-end', display: 'flex', mt: 4 }}>
          <Box sx={{ mr: 2 }}>
            <Button type="default" onClick={closeForm}>
              Cancel
            </Button>
          </Box>
          <Button type="primary" onClick={requestSearchFormData}>
            Search
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
