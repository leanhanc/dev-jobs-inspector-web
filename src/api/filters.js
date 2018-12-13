import addDays from 'date-fns/add_days';

const timeStrings = ['Hoy', 'Ayer', 'Esta semana', 'Este mes'];
const times = {
  today: addDays(new Date(), 1),
  tomorrow: addDays(new Date(), 2),
  thisWeek: addDays(new Date(), 7),
  thisMonth: addDays(new Date(), 30)
};
const province = [
  'Ciudad de Buenos Aires',
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fé',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán'
];

export { times, timeStrings, province };
