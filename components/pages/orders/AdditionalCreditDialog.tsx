import { Input, Row, Col, Select } from 'antd';
import { Currency, TaxCode } from 'dsl-admin-base';
import { Box } from 'rebass';

interface Props {
  value: any;
  onInputChange: (name: string, value: any) => void;
  taxCodes: TaxCode[];
}
const { Option } = Select;

export const SetAdditionalCreditDataDialog: React.FC<Props> = ({
  value,
  onInputChange,
  taxCodes,
}) => {
  const { taxRate, price } = value;
  const taxAmount = price * taxRate;
  const totalAmount = price * (100 + taxRate);
  return (
    <Box sx={{ '.ant-row': { mt: 2 }, '.ant-select': { width: '100%' } }}>
      <Row align="middle">
        <Col xs={8}>
          <label>Input Price</label>
        </Col>
        <Col xs={8}>
          <Input
            name="inputPrice"
            onChange={(e) => onInputChange('price', Number(e.target.value))}
            type="number"
            value={price}
          ></Input>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <label>VAT</label>
        </Col>
        <Col xs={8}>
          <Select
            placeholder="SELECT"
            style={{ maxWidth: 320 }}
            onChange={(value) => onInputChange('taxRate', value)}
            value={taxRate || 0}
          >
            {taxCodes.map((tax) => {
              return (
                <Option value={tax.rate} key={tax.id}>
                  {`${tax.name}(${tax.rate}%)`}
                </Option>
              );
            })}
          </Select>
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>VAT Amount</label>
        </Col>
        <Col xs={8}>
          <Currency value={taxAmount} />
          <span>{` (${taxRate || 0}%)`}</span>
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>Total Unit Credit to Customer</label>
        </Col>
        <Col xs={8}>
          <Currency value={totalAmount} />
        </Col>
      </Row>
    </Box>
  );
};
