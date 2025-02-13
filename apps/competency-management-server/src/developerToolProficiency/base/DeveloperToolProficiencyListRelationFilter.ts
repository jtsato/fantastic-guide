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
import { DeveloperToolProficiencyWhereInput } from "./DeveloperToolProficiencyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeveloperToolProficiencyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DeveloperToolProficiencyWhereInput,
  })
  @ValidateNested()
  @Type(() => DeveloperToolProficiencyWhereInput)
  @IsOptional()
  @Field(() => DeveloperToolProficiencyWhereInput, {
    nullable: true,
  })
  every?: DeveloperToolProficiencyWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeveloperToolProficiencyWhereInput,
  })
  @ValidateNested()
  @Type(() => DeveloperToolProficiencyWhereInput)
  @IsOptional()
  @Field(() => DeveloperToolProficiencyWhereInput, {
    nullable: true,
  })
  some?: DeveloperToolProficiencyWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeveloperToolProficiencyWhereInput,
  })
  @ValidateNested()
  @Type(() => DeveloperToolProficiencyWhereInput)
  @IsOptional()
  @Field(() => DeveloperToolProficiencyWhereInput, {
    nullable: true,
  })
  none?: DeveloperToolProficiencyWhereInput;
}
export { DeveloperToolProficiencyListRelationFilter as DeveloperToolProficiencyListRelationFilter };
