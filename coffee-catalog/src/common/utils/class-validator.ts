// Based on: https://github.com/pvarentsov/typescript-clean-architecture/blob/master/src/core/common/type/CommonTypes.ts

import { validate, ValidationError } from 'class-validator';

export type ClassValidationDetails = {
  context: string;
  errors: ClassValidationErrors[];
};

export type ClassValidationErrors = {
  property: string;
  message: string[];
};

export class ClassValidator {
  public static async validate<TTarget extends object>(
    target: TTarget,
    context?: string,
  ): Promise<ClassValidationDetails | undefined> {
    const errors: ValidationError[] = await validate(target);

    if (errors.length === 0) return undefined;

    return {
      context: context || target.constructor.name,
      errors: errors.map((error) => ({
        property: error.property,
        message: error.constraints ? Object.values(error.constraints) : [],
      })),
    };
  }
}
