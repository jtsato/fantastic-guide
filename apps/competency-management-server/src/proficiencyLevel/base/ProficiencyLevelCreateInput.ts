/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput } from "./DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProficiencyLevelCreateInput {
  @ApiProperty({
    required: false,
    type: () =>
      DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput,
  })
  @ValidateNested()
  @Type(
    () => DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput
  )
  @IsOptional()
  @Field(
    () => DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput,
    {
      nullable: true,
    }
  )
  developerToolProficiencies?: DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  levelName?: string | null;
}

export { ProficiencyLevelCreateInput as ProficiencyLevelCreateInput };
