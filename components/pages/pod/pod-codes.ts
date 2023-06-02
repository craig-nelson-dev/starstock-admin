export const PODCodes = [
  { code: '101', description: 'Invalid Order Line Type', systemResponse: 'Line removed' },
  { code: '104', description: 'Invalid Material Code', systemResponse: 'Line removed' },
  { code: '105', description: 'Invalid Order Quantity', systemResponse: 'Line removed' },
  { code: '106', description: 'Invalid FOC item category', systemResponse: 'Line removed' },
  { code: '109', description: 'Invalid sales/return indicator', systemResponse: 'Line removed' },
  {
    code: '111',
    description: 'Low/No Stock warning',
    systemResponse: 'Warning (beer business only - not waverley business)',
  },
  {
    code: '112',
    description: 'Invalid material code (sales org. / Dist Ch.)',
    systemResponse: 'Line removed',
  },
  { code: '113', description: 'Material not on Product Listing', systemResponse: 'Line removed' },
  {
    code: '114',
    description: 'Material not valid for Cellar Tank',
    systemResponse: 'Line removed',
  },
  { code: '115', description: 'Invalid Sales of Container', systemResponse: 'Line removed' },
  {
    code: '116',
    description: 'Material not an empty for a returns order',
    systemResponse: 'Line removed',
  },
  {
    code: '117',
    description: 'W&S item rejected - order received after cut-off',
    systemResponse: 'Line removed',
  },
  { code: '118', description: 'Non W&S on W&S emergency order', systemResponse: 'Line removed' },
  { code: '119', description: 'W&S on non W&S order type', systemResponse: 'Line removed' },
  {
    code: '120',
    description: 'W&S Amend - Already Sent to Waverley',
    systemResponse: 'Line removed',
  },
  {
    code: '121',
    description: 'Unblock received after WVL cutoff, W&S itm deleted',
    systemResponse: 'Line removed',
  },
  { code: '125', description: 'Material flagged for deletion', systemResponse: 'Line removed' },
  {
    code: '126',
    description: 'WVL account number not found on ship-to acct',
    systemResponse: 'Line removed',
  },
  { code: '128', description: 'Material not yet available', systemResponse: 'Line removed' },
  {
    code: '130',
    description: 'Item cannot be amended - Del.Note created',
    systemResponse: 'Line removed',
  },
  { code: '131', description: 'W&S item rejected - No stock', systemResponse: 'Line removed' },
];
