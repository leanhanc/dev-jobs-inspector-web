import addDays from 'date-fns/add_days';

const timeStrings = ['Hoy', 'Ayer', 'Esta semana', 'Este mes'];
const times = {
  today: addDays(new Date(), 1),
  tomorrow: addDays(new Date(), 2),
  thisWeek: addDays(new Date(), 7),
  thisMonth: addDays(new Date(), 30)
};
const provinces = [
  { name: 'Argentina', value: '' },
  { name: 'Ciudad de Buenos Aires', value: 'Capital Federal' },
  { name: 'Buenos Aires', value: 'Buenos Aires' },
  { name: 'Catamarca', value: 'Catamarca' },
  { name: 'Chaco', value: 'Chaco' },
  { name: 'Chubut', value: 'Chubut' },
  { name: 'Córdoba', value: 'Cordoba' },
  { name: 'Corrientes', value: 'Corrientes' },
  { name: 'Entre Ríos', value: 'Entre Rios' },
  { name: 'Formosa', value: 'Formosa' },
  { name: 'Jujuy', value: 'Jujuy' },
  { name: 'La Pampa', value: 'La Pampa' },
  { name: 'La Rioja', value: 'La Rioja' },
  { name: 'Mendoza', value: 'Mendoza' },
  { name: 'Misiones', value: 'Misiones' },
  { name: 'Neuquén', value: 'Neuquen' },
  { name: 'Río Negro', value: 'Rio Negro' },
  { name: 'Salta', value: 'Salta' },
  { name: 'San Juan', value: 'San Juan' },
  { name: 'San Luis', value: 'San Luis' },
  { name: 'Santa Cruz', value: 'Santa Cruz' },
  { name: 'Santa Fé', value: 'Santa Fe' },
  { name: 'Santiago del Estero', value: 'Santiago del Estero' },
  { name: 'Tierra del Fuego', value: 'Tierra del Fuego' },
  { name: 'Tucumán', value: 'Tucuman' }
];

export { times, timeStrings, provinces };
