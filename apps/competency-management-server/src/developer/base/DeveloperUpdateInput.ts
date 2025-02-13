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
import { DeveloperToolProficiencyUpdateManyWithoutDevelopersInput } from "./DeveloperToolProficiencyUpdateManyWithoutDevelopersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeveloperUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DeveloperToolProficiencyUpdateManyWithoutDevelopersInput,
  })
  @ValidateNested()
  @Type(() => DeveloperToolProficiencyUpdateManyWithoutDevelopersInput)
  @IsOptional()
  @Field(() => DeveloperToolProficiencyUpdateManyWithoutDevelopersInput, {
    nullable: true,
  })
  developerToolProficiencies?: DeveloperToolProficiencyUpdateManyWithoutDevelopersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  name?: string | null;
}

export { DeveloperUpdateInput as DeveloperUpdateInput };
