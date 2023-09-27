import { getNames } from 'country-list';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';

@ValidatorConstraint({ name: 'isCountry', async: false })
export class IsCountryValidator implements ValidatorConstraintInterface {
  validate(country: string, args: ValidationArguments) {
    const countries = getNames();
    return countries.includes(country);
  }

  defaultMessage(args: ValidationArguments) {
    return `The country '${args.value}' doesn't exist in our database.`;
  }
}

export function IsCountry() {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isCountry',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      validator: IsCountryValidator,
    });
  };
}
