import { Input, Row, Col } from 'antd';
import { Currency, formatPrice } from 'dsl-admin-base';
import { Box } from 'rebass';
import { PriceDetail } from './CreateCreditOrderItems';

interface Props {
  value: PriceDetail;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SetIndividualPriceDialog: React.FC<Props> = ({ value, onInputChange }) => {
  const { inputPrice, starStockFee, logisticsFee, taxRate, totalDiscount } = value;

  let creditPrice = (inputPrice + starStockFee + logisticsFee) * 100;
  let taxTotal =
    creditPrice && taxRate
      ? creditPrice * (taxRate - 1) -
        (totalDiscount * value.promoTaxMultiplier - totalDiscount) * 100
      : 0;
  const taxtRatePercent = taxRate ? taxRate * 100 - 100 : 0;

  creditPrice = formatPrice(creditPrice ? creditPrice / 100 : 0) * 100;
  taxTotal = formatPrice(taxTotal ? taxTotal / 100 : 0) * 100;

  const creditTotal = creditPrice + taxTotal - totalDiscount * 100;
  return (
    <Box sx={{ '.ant-row': { mt: 2 } }}>
      <Row align="middle">
        <Col xs={8}>
          <label>Input Price</label>
        </Col>
        <Col xs={8}>
          <Input name="inputPrice" onChange={onInputChange} value={inputPrice}></Input>
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>Platform Fee</label>
        </Col>
        <Col xs={8}>
          <Input name="starStockFee" onChange={onInputChange} value={starStockFee}></Input>
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>Logistics Fee</label>
        </Col>
        <Col xs={8}>
          <Input name="logisticsFee" onChange={onInputChange} value={logisticsFee}></Input>
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>Credit Unit Price(Ex VAT)</label>
        </Col>
        <Col xs={8}>
          <Currency value={creditPrice} />
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>Discount</label>
        </Col>
        <Col xs={8}>
          <Currency value={totalDiscount * 100} />
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>VAT Amount</label>
        </Col>
        <Col xs={8}>
          <Currency value={taxTotal} />
          <span>{` (${taxtRatePercent}%)`}</span>
        </Col>
      </Row>
      <Row align="middle">
        <Col xs={8}>
          <label>Total Unit Credit to Customer</label>
        </Col>
        <Col xs={8}>
          <Currency value={creditTotal} />
        </Col>
      </Row>
    </Box>
  );
};
