import { antCustom } from './ant-custom';

const theme = {
  colors: {
    white: '#fff',
    blurOrange: 'rgba(255, 106, 56, 0.18)',
    headingGrey: '#615D5D',
    primary: '#FE5568',
    lightGrey: '#EFEFEF',
    midGrey: '#CFCFCF',
    midDarkGrey: '#797979',
    darkGrey: '#595959',
    darknestGrey: '#373F41',
    textColor: '#131b25',
    brandTwo: '#1C2638',
    promoGreen: '#39CDA7',
    promoOrange: '#EF674A',
    ourBlack: '#131B25',
    skyBlueC: '#0092E34D',
    yellowOrange: '#FFE5D0',
    pinkOrange: '#BF28274D',
    brightGreen: '#016B434D',
  },
  variants: {
    card: {
      bg: 'white',
      marginTop: 3,
    },
    tenaryBtn: {
      backgroundColor: 'midGrey',
      cursor: 'pointer',
      borderRadius: 25,
      py: 1,
      px: 2,
      textTransform: 'uppercase',
      display: 'inline-block',
    },
    settingElm: {
      display: 'inline-block',
      bg: '#f4f5f6',
      borderRadius: '2px',
      py: 1,
      px: 2,
      color: '#565767',
      cursor: 'pointer',
    },
    breadcrumbHeader: {
      borderBottom: '2px solid #EFEFEF',
      display: 'flex',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      py: '8px',
      fontSize: 20,
      fontWeight: 500,
      height: 53,
    },
    userStatusAlert: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 1,
      color: '#FE5568',
      '> button': {
        padding: '4px 36px',
        borderColor: 'snow',
      },
    },
    orderItemImage: {
      maxWidth: 60,
      padding: '8px',
      border: '1px solid #EFEFEF',
    },
    formWithCapsSelect: {
      '.ant-select-selection-placeholder': {
        textTransform: 'uppercase',
      },
    },
    customAntDesign: antCustom,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.125)',
  },
  borders: {
    standard: '2px solid #EFEFEF',
  },
  text: {
    pageHeading: {
      fontSize: 20,
      fontWeight: 500,
      textTransform: 'uppercase',
      py: '10px',
      borderBottom: '2px solid #EFEFEF',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    modalHeading: {
      fontSize: 30,
      fontWeight: 500,
      textTransform: 'uppercase',
      py: 10,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    textBtn: {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'darknestGrey',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: 'darkGrey',
      cursor: 'pointer',
    },
    h4: {
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: 20,
      color: '#131B25',
    },
    heading: {
      fontSize: '16px',
      fontWeight: 500,
    },
    caps: {
      textTransform: 'uppercase',
    },
  },
};

export default theme;
