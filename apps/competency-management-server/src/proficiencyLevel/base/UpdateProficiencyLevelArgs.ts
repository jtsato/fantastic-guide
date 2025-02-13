/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProficiencyLevelWhereUniqueInput } from "./ProficiencyLevelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProficiencyLevelUpdateInput } from "./ProficiencyLevelUpdateInput";

@ArgsType()
class UpdateProficiencyLevelArgs {
  @ApiProperty({
    required: true,
    type: () => ProficiencyLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProficiencyLevelWhereUniqueInput)
  @Field(() => ProficiencyLevelWhereUniqueInput, { nullable: false })
  where!: ProficiencyLevelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProficiencyLevelUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProficiencyLevelUpdateInput)
  @Field(() => ProficiencyLevelUpdateInput, { nullable: false })
  data!: ProficiencyLevelUpdateInput;
}

export { UpdateProficiencyLevelArgs as UpdateProficiencyLevelArgs };
