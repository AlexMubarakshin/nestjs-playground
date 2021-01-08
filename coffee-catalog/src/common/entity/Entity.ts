import {
  ClassValidationDetails,
  ClassValidator,
} from 'src/common/utils/class-validator';

export class Entity {
  public async validate() {
    const details:
      | ClassValidationDetails
      | undefined = await ClassValidator.validate(this);

    if (details) {
      throw new Error('ValidationError: ' + JSON.stringify(details));
    }
  }
}
