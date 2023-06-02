import { Card, Col, Row, Select, Space, Timeline } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { usePageData, RepositoryFactory, getQuery, AdminOrderWeeklyStats } from 'dsl-admin-base';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Key } from 'react';
import Color from 'color';
import { Line } from 'react-chartjs-2';
import { Box, BoxProps, Image, Text } from 'rebass';

const chartData = (weekData: AdminOrderWeeklyStats[] = []) => {
  const labels = Array(7)
    .fill(0)
    .map((_, idx) => moment().subtract({ d: idx }).format('ddd'))
    .reverse();
  const data = labels.reduce<number[][]>((arr, next) => {
    const currentWeekData = weekData.find((wd) => {
      const [, month, day] = wd.dateTime.split('-');
      const orderDate = moment(wd.dateTime)
        .date(parseInt(day))
        .month(parseInt(month) - 1);
      return orderDate.format('ddd').toLocaleLowerCase() == next.toLocaleLowerCase();
    });

    arr.push([currentWeekData?.ordersCount || 0, (currentWeekData?.orderAmount || 0) / 100]);
    return arr;
  }, []);
  return {
    labels,
    datasets: [
      {
        label: 'Number of Orders',
        yAxisID: 'A',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#FE5568',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#FE5568',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#FE5568',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map((d) => d[0]),
      },
      {
        label: 'Amount',
        yAxisID: 'B',
        fill: true,
        lineTension: 0.1,
        backgroundColor: '#1b263860',
        borderColor: '#1b2638',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#1b2638',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#1b2638',
        pointHoverBorderColor: '#1b2638',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map((d) => d[1]),
      },
    ],
  };
};

const rectCardStyle = {
  color: '#fff',
};

const TimeLineDot: React.FC<BoxProps & { idx: number }> = ({ sx, idx }) => (
  <Box
    color="#ffffff"
    display="flex"
    sx={{
      ...sx,
      height: 18,
      width: 18,
      borderRadius: '50%',
      backgroundColor: 'primary',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    {idx}
  </Box>
);

type StatisticCardPort = {
  value: string | number;
  title: string;
  inline?: boolean;
  transparency: number;
};
const StatisticCard = ({ value, title, inline = false, transparency = 100 }: StatisticCardPort) => {
  let cardBodyPadding: React.CSSProperties = { padding: 4 };
  let body = (
    <Row style={{ flexDirection: 'row-reverse', height: '100%' }} gutter={8}>
      <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} span={24}>
        <Row style={{ justifyContent: 'center' }} gutter={8}>
          <Text textAlign="center" fontWeight={600} fontSize={16} color="#fff">
            {value}
          </Text>
        </Row>
        <Row style={{ margin: 0 }}>
          <Col span={24}>
            <Text
              style={{ display: 'flex', justifyContent: 'center' }}
              textAlign="center"
              alignSelf="center"
              fontSize={11}
              color="#fff"
            >
              {title}
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
  if (inline) {
    cardBodyPadding = { paddingTop: 0, paddingBottom: 0 };
    body = (
      <Row style={{ flexDirection: 'row-reverse', height: '100%' }} gutter={8}>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'end',
            padding: 0,
            height: '100%',
            alignSelf: 'center',
          }}
          span={16}
        >
          <Text
            style={{ padding: 0 }}
            textAlign="right"
            alignSelf="center"
            fontSize={13}
            fontWeight={600}
            color="#fff"
          >
            {title}
          </Text>
        </Col>
        <Col
          className="no-col-padding"
          style={{ height: '100%', padding: '0px !important' }}
          span={8}
        >
          <Text
            style={{
              padding: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column-reverse',
              justifyContent: 'center',
            }}
            textAlign="center"
            fontSize={18}
            color="#fff"
          >
            {value}
          </Text>
        </Col>
      </Row>
    );
  }
  return (
    <Card
      bordered={false}
      style={{ width: '100%' }}
      bodyStyle={{
        ...rectCardStyle,
        ...cardBodyPadding,
        backgroundColor: Color(`#1b2638`).fade(transparency).toString(),
        height: '100%',
      }}
    >
      {body}
    </Card>
  );
};

const { Option } = Select;

type QueryProps = {
  overviewDay: number;
  topProductDay: number;
  promotionDay: number;
  orderOverview: number;
};
const UseDashboardParamTracker = () => {
  const router = useRouter();

  return {
    setDayFor: (forVal: 'OVERVIEW' | 'TOP_PRODUCT' | 'PROMOTION' | 'ORDER_OVERVIEW') => (
      val: Key,
    ) => {
      const query: QueryProps = {
        overviewDay: parseInt(router.query.overviewDay?.toString() || '0'),
        topProductDay: parseInt(router.query.topProductDay?.toString() || '0'),
        promotionDay: parseInt(router.query.promotionDay?.toString() || '0'),
        orderOverview: parseInt(router.query.orderOverview?.toString() || '0'),
      };
      if (forVal == 'OVERVIEW') {
        query.overviewDay = parseInt(val.toString());
      }
      if (forVal == 'TOP_PRODUCT') {
        query.topProductDay = parseInt(val.toString());
      }
      if (forVal == 'PROMOTION') {
        query.promotionDay = parseInt(val.toString());
      }
      if (forVal == 'ORDER_OVERVIEW') {
        query.orderOverview = parseInt(val.toString());
      }

      router.push({ pathname: router.pathname, query });
    },
  };
};

const TodayTag = () => {
  const today = moment().format('D MMM');

  return (
    <Box>
      <span style={{ color: 'gray', textTransform: 'uppercase' }}>{today}</span>,{' '}
      <span style={{ color: 'black' }}>TODAY</span>
    </Box>
  );
};

type DaysInputProps = {
  onChange: (v: Key) => void;
  hideTodayTag?: boolean;
  fullWidth?: boolean;
};
const DaysInput = ({ onChange, hideTodayTag = false, fullWidth = true }: DaysInputProps) => {
  return (
    <Box
      sx={{
        flex: fullWidth === true ? 1 : 'unset',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {hideTodayTag === false && <TodayTag />}
      <Space direction="horizontal">
        <Select onChange={onChange} defaultValue={0} style={{ width: 120 }} size="small">
          <Option value={0}>TODAY</Option>
          <Option value={1}>YESTERDAY</Option>
          <Option value={7}>LAST WEEK</Option>
        </Select>
      </Space>
    </Box>
  );
};

const Dashboard: React.FC = () => {
  const { setDayFor } = UseDashboardParamTracker();
  const params = getQuery();
  const { data: overViewData } = usePageData(
    () => {
      return RepositoryFactory.get('dashboard').getAdminOverview({ days: params.overviewDay || 0 });
    },
    [],
    [params.overviewDay],
  );

  const { data: ordersOverviewData } = usePageData(
    () => {
      return RepositoryFactory.get('dashboard').getAdminOrdersOverview({
        days: params.orderOverview || 0,
      });
    },
    [],
    [params.orderOverview],
  );

  const { data: topProductData } = usePageData(
    () => {
      return RepositoryFactory.get('dashboard').getAdminTopProducts({
        days: params.topProductDay || 0,
      });
    },
    [],
    [params.topProductDay],
  );
  const { data: topPromotions = [] } = usePageData(
    () => {
      return RepositoryFactory.get('dashboard').getAdminTopPromotions({
        days: params.promotionDay || 0,
      });
    },
    [],
    [params.promotionDay],
  );

  const { data: orderWeeklyData } = usePageData(() => {
    return RepositoryFactory.get('dashboard').getAdminOrdersWeeklyStats();
  });

  const widgetBorderRadius = 10;
  const rowGutter = 0;

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Box>
        <Text variant="pageHeading">
          <Row gutter={rowGutter}>
            <Text letterSpacing="0.5px">Dashboard</Text>
          </Row>
        </Text>
      </Box>

      <Box
        sx={{
          pt: 4,
          '.ant-col:not(.no-col-padding)': { padding: '4px !important' },
          '.ant-statistic-content-suffix': { fontSize: '16px', display: 'block' },
        }}
      >
        <Row gutter={[rowGutter, rowGutter]} align="top">
          <Col span={24}>
            <Row
              style={{
                background: 'white',
                borderRadius: '10px',
                padding: '0.5rem',
                minHeight: '45vh',
              }}
            >
              <Col span={16}>
                <Row style={{ height: '100%' }}>
                  <Col style={{ height: '15%' }} span={24}>
                    <Row>
                      <Col span={10}>
                        <DaysInput onChange={setDayFor('OVERVIEW')} />
                      </Col>
                      <Col span={13} offset={1}>
                        <DaysInput onChange={setDayFor('ORDER_OVERVIEW')} />
                      </Col>
                    </Row>
                  </Col>

                  <Col style={{ height: '85%' }} span={24}>
                    <Row style={{ height: '100%' }}>
                      <Col
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                        span={10}
                      >
                        <Row style={{ height: '100%' }} gutter={9}>
                          <Col style={{ display: 'flex' }} span={24}>
                            <StatisticCard
                              transparency={0.1}
                              inline={true}
                              value={overViewData?.brandOwners || 0}
                              title={'Brand Owner'}
                            />
                          </Col>
                        </Row>
                        <Row style={{ height: '100%' }} gutter={8}>
                          <Col style={{ display: 'flex' }} span={24}>
                            <StatisticCard
                              transparency={0.15}
                              inline={true}
                              value={overViewData?.activeProducts || 0}
                              title={'Active Products'}
                            />
                          </Col>
                        </Row>
                        <Row style={{ height: '100%' }} gutter={8}>
                          <Col style={{ display: 'flex' }} span={24}>
                            <StatisticCard
                              transparency={0.25}
                              inline={true}
                              value={overViewData?.registeredCustomers || 0}
                              title={'Registered Customers'}
                            />
                          </Col>
                        </Row>
                        <Row style={{ height: '100%' }} gutter={8}>
                          <Col style={{ display: 'flex' }} span={24}>
                            <StatisticCard
                              transparency={0.35}
                              inline={true}
                              value={overViewData?.orderingAccounts || 0}
                              title={'Ordering Accounts'}
                            />
                          </Col>
                        </Row>
                        <Row style={{ height: '100%' }} gutter={8}>
                          <Col style={{ display: 'flex' }} span={24}>
                            <StatisticCard
                              transparency={0.45}
                              inline={true}
                              value={overViewData?.registeredCustomers || 0}
                              title={'Unsubscribed'}
                            />
                          </Col>
                        </Row>
                        <Row style={{ height: '100%' }} gutter={8}>
                          <Col style={{ display: 'flex' }} span={24}>
                            <StatisticCard
                              transparency={0.55}
                              inline={true}
                              value={overViewData?.noWeekOrderCustomers || 0}
                              title={'Lapsed (Past 3 Weeks)'}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                        span={13}
                        offset={1}
                      >
                        <Row style={{ height: '50%' }}>
                          <Col style={{ width: '9vw', height: '9vw', display: 'flex' }} span={8}>
                            <StatisticCard
                              transparency={0.1}
                              value={ordersOverviewData?.ordersStats?.totalOrders || 0}
                              title={'Number of Orders'}
                            />
                          </Col>
                          <Col style={{ width: '9vw', height: '9vw', display: 'flex' }} span={8}>
                            <StatisticCard
                              transparency={0.15}
                              value={`£${
                                (ordersOverviewData?.ordersStats?.ordersValue || 0) / 100
                              }`}
                              title={'Value of Orders'}
                            />
                          </Col>
                          <Col style={{ width: '9vw', height: '9vw', display: 'flex' }} span={8}>
                            <StatisticCard
                              transparency={0.25}
                              value={overViewData?.orderingAccounts || 0}
                              title={'Ordering Accounts'}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col style={{ width: '9vw', height: '9vw', display: 'flex' }} span={8}>
                            <StatisticCard
                              transparency={0.1}
                              value={(
                                (ordersOverviewData?.ordersStats?.ordersItems || 0) /
                                (ordersOverviewData?.ordersStats?.totalOrders || 1)
                              ).toFixed(2)}
                              title={'Average Order Lines'}
                            />
                          </Col>
                          <Col style={{ width: '9vw', height: '9vw', display: 'flex' }} span={8}>
                            <StatisticCard
                              transparency={0.15}
                              value={`£${(
                                (ordersOverviewData?.ordersStats?.ordersValue || 0) /
                                (ordersOverviewData?.ordersStats?.totalOrders || 1) /
                                100
                              ).toFixed(2)}`}
                              title={'Average Order Values'}
                            />
                          </Col>
                          <Col style={{ width: '9vw', height: '9vw', display: 'flex' }} span={8}>
                            <StatisticCard
                              transparency={0.25}
                              value={overViewData?.registeredCustomers || 0}
                              title={'New Customers Registration'}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row style={{ height: '100%' }}>
                  <Col style={{ height: '15%' }} span={24}>
                    <Meta title="Top Products" style={{ textTransform: 'uppercase' }} />
                    <DaysInput onChange={setDayFor('TOP_PRODUCT')} />
                  </Col>

                  <Col style={{ height: '85%' }} span={24}>
                    {topProductData?.map((item, idx) => {
                      return (
                        <Box
                          key={item.id}
                          sx={{
                            display: 'flex',
                            borderBottom:
                              idx < (topProductData?.length || 0) - 1 ? '1px solid #EFEFEF' : '',
                            alignItems: 'center',
                            pt: '7px',
                          }}
                        >
                          <Image
                            sx={{
                              height: '3vw',
                              width: '3vw',
                              border: '1px solid #EFEFEF',
                              objectFit: 'cover',
                            }}
                            src={item.thumbnailPath}
                          />
                          <Box
                            sx={{ display: 'flex', flexDirection: 'column', ml: 2, width: '100%' }}
                          >
                            <Text
                              sx={{
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                mb: 1,
                                fontSize: '0.7vw',
                              }}
                            >
                              {item.name}
                            </Text>
                            <Text sx={{ fontSize: 10, fontWeight: 500, color: 'midGrey' }}>
                              CODE: {item.code}
                            </Text>
                          </Box>
                        </Box>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={[rowGutter, rowGutter]}>
          <Col xs={12} xl={12}>
            <Card bordered={false} style={{ height: 300, borderRadius: widgetBorderRadius }}>
              <Box sx={{ height: 250 }}>
                <Line
                  type="point"
                  data={chartData(orderWeeklyData || [])}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      A: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'A',
                      },
                      B: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'B',
                        gridLines: {
                          drawOnArea: false,
                        },
                      },
                    },
                  }}
                />
              </Box>
            </Card>
          </Col>
          <Col xs={12} xl={12}>
            <Card bordered={false} style={{ height: 300, borderRadius: widgetBorderRadius }}>
              <Meta title="Rankings" style={{ textTransform: 'uppercase' }} />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  my: 2,
                }}
              >
                <Box sx={{ textTransform: 'uppercase', flex: 1 }}>Top 5 Promotions</Box>
                <DaysInput
                  fullWidth={false}
                  hideTodayTag={true}
                  onChange={setDayFor('PROMOTION')}
                />
              </Box>

              <Box mt={4}>
                <Timeline style={{ padding: 0 }}>
                  {topPromotions?.map((p, idx) => {
                    return (
                      <Timeline.Item key={p.id} dot={<TimeLineDot idx={idx + 1} />}>
                        <Text sx={{ textTransform: 'uppercase', fontSize: 10, fontWeight: 500 }}>
                          {p.name}
                        </Text>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </Box>
            </Card>
          </Col>
        </Row>
      </Box>
    </>
  );
};

export default Dashboard;
