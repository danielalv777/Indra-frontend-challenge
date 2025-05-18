// Icons
import HomeCard from '../../../assets/Planes/cardDetails/IcHomeLight.svg';
import HospitalCard from '../../../assets/Planes/cardDetails/IcHospitalLight.svg';

// Constants
export const CASA = 'Plan en Casa';
export const CASA_CLINICA = 'Plan en Casa y Clínica';
export const CASA_BIENESTAR = 'Plan en Casa + Bienestar';
export const CASA_CHEQUEO = 'Plan en Casa + Chequeo ';
export const CASA_FITNESS = 'Plan en Casa + Fitness';

const iconsCard: Record<string, string> = {
  [CASA]: HomeCard,
  [CASA_CLINICA]: HospitalCard,
  [CASA_BIENESTAR]: HomeCard,
  [CASA_CHEQUEO]: HospitalCard,
  [CASA_FITNESS]: HomeCard,
};

export default iconsCard;
