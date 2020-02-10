import 'intl';
import 'intl/locale-data/jsonp/en';

export const CurrencyFormat = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);