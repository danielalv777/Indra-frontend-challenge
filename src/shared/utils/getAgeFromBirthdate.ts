export function getAgeFromBirthdate(birthdate: string): number {
  const [day, month, year] = birthdate.split('-').map(Number);
  const birthDateObj = new Date(year, month - 1, day); // Meses: 0 = enero

  const today = new Date();
  let age = today.getFullYear() - birthDateObj.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() &&
      today.getDate() >= birthDateObj.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}
