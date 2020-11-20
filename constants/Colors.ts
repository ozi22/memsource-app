import { StringMapping } from '../types/types';

const tintColorLight = '#10b1fc';
const tintColorDark = '#fff';

const Colors = {
  light: {
    text: '#242d37',
    background: '#f3f7f9',
    tint: tintColorLight,
    tabIconDefault: '#435569',
    tabIconSelected: tintColorLight
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark
  }
};

export const statuses: StringMapping<string> = {
  NEW: '#5CF29D',
  ASSIGNED: '#10AFFC',
  COMPLETED: '#00E262',
  ACCEPTED_BY_VENDOR: '#62C0EE',
  DECLINED_BY_VENDOR: '#FF8362',
  COMPLETED_BY_VENDOR: '#048600',
  CANCELLED: '#FF3500'
};

export default Colors;
