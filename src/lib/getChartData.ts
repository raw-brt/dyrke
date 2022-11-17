import dayjs from 'dayjs';
import { getIntervalUnits } from './getIntervalUnits';
import { Period } from "./../generated/dyrketypes";

// Calcular unidades para el intervalo

// Meter cada uno de los datos en el intervalo de unidades

export const getChartData = (period: Period) => {
  const units = getIntervalUnits(period);
  console.log(units)
  return
};