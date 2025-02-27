import type { Prisma } from "@prisma/client";
import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(["Serializable"]);

export const UserScalarFieldEnumSchema = z.enum(["id", "name", "email", "image", "createdAt", "updatedAt"]);

export const ToolScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "memo",
  "brand",
  "kind",
  "authorId",
  "createdAt",
  "updatedAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const NullsOrderSchema = z.enum(["first", "last"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// TOOL SCHEMA
/////////////////////////////////////////

export const ToolSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  memo: z.string(),
  brand: z.string(),
  kind: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Tool = z.infer<typeof ToolSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
// ------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  tools: z.union([z.boolean(), z.lazy(() => ToolFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  tools: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tools: z.union([z.boolean(), z.lazy(() => ToolFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

// TOOL
// ------------------------------------------------------

export const ToolIncludeSchema: z.ZodType<Prisma.ToolInclude> = z.object({
  author: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const ToolArgsSchema: z.ZodType<Prisma.ToolDefaultArgs> = z.object({
  select: z.lazy(() => ToolSelectSchema).optional(),
  include: z.lazy(() => ToolIncludeSchema).optional(),
}).strict();

export const ToolSelectSchema: z.ZodType<Prisma.ToolSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  memo: z.boolean().optional(),
  brand: z.boolean().optional(),
  kind: z.boolean().optional(),
  authorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  tools: z.lazy(() => ToolListRelationFilterSchema).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tools: z.lazy(() => ToolOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
  .and(
    z.object({
      id: z.string().uuid().optional(),
      email: z.string().optional(),
      AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
      OR: z.lazy(() => UserWhereInputSchema).array().optional(),
      NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      image: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
      createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
      updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
      tools: z.lazy(() => ToolListRelationFilterSchema).optional(),
    }).strict(),
  );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([
    z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
    z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
  ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([
    z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
    z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
  ]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const ToolWhereInputSchema: z.ZodType<Prisma.ToolWhereInput> = z.object({
  AND: z.union([z.lazy(() => ToolWhereInputSchema), z.lazy(() => ToolWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ToolWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToolWhereInputSchema), z.lazy(() => ToolWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  memo: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  brand: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  author: z.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
}).strict();

export const ToolOrderByWithRelationInputSchema: z.ZodType<Prisma.ToolOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
}).strict();

export const ToolWhereUniqueInputSchema: z.ZodType<Prisma.ToolWhereUniqueInput> = z.object({
  id: z.string().uuid(),
})
  .and(
    z.object({
      id: z.string().uuid().optional(),
      AND: z.union([z.lazy(() => ToolWhereInputSchema), z.lazy(() => ToolWhereInputSchema).array()]).optional(),
      OR: z.lazy(() => ToolWhereInputSchema).array().optional(),
      NOT: z.union([z.lazy(() => ToolWhereInputSchema), z.lazy(() => ToolWhereInputSchema).array()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      memo: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      brand: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      kind: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      authorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
      updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
      author: z.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
    }).strict(),
  );

export const ToolOrderByWithAggregationInputSchema: z.ZodType<Prisma.ToolOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ToolCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ToolMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ToolMinOrderByAggregateInputSchema).optional(),
}).strict();

export const ToolScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ToolScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([
    z.lazy(() => ToolScalarWhereWithAggregatesInputSchema),
    z.lazy(() => ToolScalarWhereWithAggregatesInputSchema).array(),
  ]).optional(),
  OR: z.lazy(() => ToolScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([
    z.lazy(() => ToolScalarWhereWithAggregatesInputSchema),
    z.lazy(() => ToolScalarWhereWithAggregatesInputSchema).array(),
  ]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  memo: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  brand: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tools: z.lazy(() => ToolCreateNestedManyWithoutAuthorInputSchema).optional(),
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tools: z.lazy(() => ToolUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tools: z.lazy(() => ToolUpdateManyWithoutAuthorNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tools: z.lazy(() => ToolUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ToolCreateInputSchema: z.ZodType<Prisma.ToolCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  memo: z.string(),
  brand: z.string(),
  kind: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutToolsInputSchema),
}).strict();

export const ToolUncheckedCreateInputSchema: z.ZodType<Prisma.ToolUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  memo: z.string(),
  brand: z.string(),
  kind: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export const ToolUpdateInputSchema: z.ZodType<Prisma.ToolUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutToolsNestedInputSchema).optional(),
}).strict();

export const ToolUncheckedUpdateInputSchema: z.ZodType<Prisma.ToolUncheckedUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ToolCreateManyInputSchema: z.ZodType<Prisma.ToolCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  memo: z.string(),
  brand: z.string(),
  kind: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export const ToolUpdateManyMutationInputSchema: z.ZodType<Prisma.ToolUpdateManyMutationInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ToolUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ToolUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const ToolListRelationFilterSchema: z.ZodType<Prisma.ToolListRelationFilter> = z.object({
  every: z.lazy(() => ToolWhereInputSchema).optional(),
  some: z.lazy(() => ToolWhereInputSchema).optional(),
  none: z.lazy(() => ToolWhereInputSchema).optional(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
}).strict();

export const ToolOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ToolOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
}).strict();

export const ToolCountOrderByAggregateInputSchema: z.ZodType<Prisma.ToolCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ToolMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ToolMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ToolMinOrderByAggregateInputSchema: z.ZodType<Prisma.ToolMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ToolCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ToolCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z.union([
      z.lazy(() => ToolCreateWithoutAuthorInputSchema),
      z.lazy(() => ToolCreateWithoutAuthorInputSchema).array(),
      z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema),
      z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema).array(),
    ]).optional(),
    connectOrCreate: z.union([
      z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema),
      z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema).array(),
    ]).optional(),
    createMany: z.lazy(() => ToolCreateManyAuthorInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
      .optional(),
  }).strict();

export const ToolUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<
  Prisma.ToolUncheckedCreateNestedManyWithoutAuthorInput
> = z.object({
  create: z.union([
    z.lazy(() => ToolCreateWithoutAuthorInputSchema),
    z.lazy(() => ToolCreateWithoutAuthorInputSchema).array(),
    z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema),
    z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema).array(),
  ]).optional(),
  connectOrCreate: z.union([
    z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema),
    z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema).array(),
  ]).optional(),
  createMany: z.lazy(() => ToolCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
    .optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<
  Prisma.NullableStringFieldUpdateOperationsInput
> = z.object({
  set: z.string().optional().nullable(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional(),
}).strict();

export const ToolUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ToolUpdateManyWithoutAuthorNestedInput> = z
  .object({
    create: z.union([
      z.lazy(() => ToolCreateWithoutAuthorInputSchema),
      z.lazy(() => ToolCreateWithoutAuthorInputSchema).array(),
      z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema),
      z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema).array(),
    ]).optional(),
    connectOrCreate: z.union([
      z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema),
      z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema).array(),
    ]).optional(),
    upsert: z.union([
      z.lazy(() => ToolUpsertWithWhereUniqueWithoutAuthorInputSchema),
      z.lazy(() => ToolUpsertWithWhereUniqueWithoutAuthorInputSchema).array(),
    ]).optional(),
    createMany: z.lazy(() => ToolCreateManyAuthorInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
      .optional(),
    disconnect: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
      .optional(),
    delete: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
      .optional(),
    connect: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
      .optional(),
    update: z.union([
      z.lazy(() => ToolUpdateWithWhereUniqueWithoutAuthorInputSchema),
      z.lazy(() => ToolUpdateWithWhereUniqueWithoutAuthorInputSchema).array(),
    ]).optional(),
    updateMany: z.union([
      z.lazy(() => ToolUpdateManyWithWhereWithoutAuthorInputSchema),
      z.lazy(() => ToolUpdateManyWithWhereWithoutAuthorInputSchema).array(),
    ]).optional(),
    deleteMany: z.union([z.lazy(() => ToolScalarWhereInputSchema), z.lazy(() => ToolScalarWhereInputSchema).array()])
      .optional(),
  }).strict();

export const ToolUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<
  Prisma.ToolUncheckedUpdateManyWithoutAuthorNestedInput
> = z.object({
  create: z.union([
    z.lazy(() => ToolCreateWithoutAuthorInputSchema),
    z.lazy(() => ToolCreateWithoutAuthorInputSchema).array(),
    z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema),
    z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema).array(),
  ]).optional(),
  connectOrCreate: z.union([
    z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema),
    z.lazy(() => ToolCreateOrConnectWithoutAuthorInputSchema).array(),
  ]).optional(),
  upsert: z.union([
    z.lazy(() => ToolUpsertWithWhereUniqueWithoutAuthorInputSchema),
    z.lazy(() => ToolUpsertWithWhereUniqueWithoutAuthorInputSchema).array(),
  ]).optional(),
  createMany: z.lazy(() => ToolCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
    .optional(),
  delete: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
    .optional(),
  connect: z.union([z.lazy(() => ToolWhereUniqueInputSchema), z.lazy(() => ToolWhereUniqueInputSchema).array()])
    .optional(),
  update: z.union([
    z.lazy(() => ToolUpdateWithWhereUniqueWithoutAuthorInputSchema),
    z.lazy(() => ToolUpdateWithWhereUniqueWithoutAuthorInputSchema).array(),
  ]).optional(),
  updateMany: z.union([
    z.lazy(() => ToolUpdateManyWithWhereWithoutAuthorInputSchema),
    z.lazy(() => ToolUpdateManyWithWhereWithoutAuthorInputSchema).array(),
  ]).optional(),
  deleteMany: z.union([z.lazy(() => ToolScalarWhereInputSchema), z.lazy(() => ToolScalarWhereInputSchema).array()])
    .optional(),
}).strict();

export const UserCreateNestedOneWithoutToolsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutToolsInput> = z
  .object({
    create: z.union([
      z.lazy(() => UserCreateWithoutToolsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutToolsInputSchema),
    ]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutToolsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  }).strict();

export const UserUpdateOneRequiredWithoutToolsNestedInputSchema: z.ZodType<
  Prisma.UserUpdateOneRequiredWithoutToolsNestedInput
> = z.object({
  create: z.union([
    z.lazy(() => UserCreateWithoutToolsInputSchema),
    z.lazy(() => UserUncheckedCreateWithoutToolsInputSchema),
  ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutToolsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutToolsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([
    z.lazy(() => UserUpdateToOneWithWhereWithoutToolsInputSchema),
    z.lazy(() => UserUpdateWithoutToolsInputSchema),
    z.lazy(() => UserUncheckedUpdateWithoutToolsInputSchema),
  ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<
  Prisma.NestedStringNullableWithAggregatesFilter
> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const ToolCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ToolCreateWithoutAuthorInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  memo: z.string(),
  brand: z.string(),
  kind: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export const ToolUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ToolUncheckedCreateWithoutAuthorInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    memo: z.string(),
    brand: z.string(),
    kind: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }).strict();

export const ToolCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.ToolCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => ToolWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ToolCreateWithoutAuthorInputSchema),
      z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema),
    ]),
  }).strict();

export const ToolCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.ToolCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ToolCreateManyAuthorInputSchema), z.lazy(() => ToolCreateManyAuthorInputSchema).array()]),
}).strict();

export const ToolUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<
  Prisma.ToolUpsertWithWhereUniqueWithoutAuthorInput
> = z.object({
  where: z.lazy(() => ToolWhereUniqueInputSchema),
  update: z.union([
    z.lazy(() => ToolUpdateWithoutAuthorInputSchema),
    z.lazy(() => ToolUncheckedUpdateWithoutAuthorInputSchema),
  ]),
  create: z.union([
    z.lazy(() => ToolCreateWithoutAuthorInputSchema),
    z.lazy(() => ToolUncheckedCreateWithoutAuthorInputSchema),
  ]),
}).strict();

export const ToolUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<
  Prisma.ToolUpdateWithWhereUniqueWithoutAuthorInput
> = z.object({
  where: z.lazy(() => ToolWhereUniqueInputSchema),
  data: z.union([
    z.lazy(() => ToolUpdateWithoutAuthorInputSchema),
    z.lazy(() => ToolUncheckedUpdateWithoutAuthorInputSchema),
  ]),
}).strict();

export const ToolUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<
  Prisma.ToolUpdateManyWithWhereWithoutAuthorInput
> = z.object({
  where: z.lazy(() => ToolScalarWhereInputSchema),
  data: z.union([
    z.lazy(() => ToolUpdateManyMutationInputSchema),
    z.lazy(() => ToolUncheckedUpdateManyWithoutAuthorInputSchema),
  ]),
}).strict();

export const ToolScalarWhereInputSchema: z.ZodType<Prisma.ToolScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ToolScalarWhereInputSchema), z.lazy(() => ToolScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ToolScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ToolScalarWhereInputSchema), z.lazy(() => ToolScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  memo: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  brand: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const UserCreateWithoutToolsInputSchema: z.ZodType<Prisma.UserCreateWithoutToolsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export const UserUncheckedCreateWithoutToolsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutToolsInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    email: z.string(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }).strict();

export const UserCreateOrConnectWithoutToolsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutToolsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutToolsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutToolsInputSchema),
    ]),
  }).strict();

export const UserUpsertWithoutToolsInputSchema: z.ZodType<Prisma.UserUpsertWithoutToolsInput> = z.object({
  update: z.union([
    z.lazy(() => UserUpdateWithoutToolsInputSchema),
    z.lazy(() => UserUncheckedUpdateWithoutToolsInputSchema),
  ]),
  create: z.union([
    z.lazy(() => UserCreateWithoutToolsInputSchema),
    z.lazy(() => UserUncheckedCreateWithoutToolsInputSchema),
  ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
}).strict();

export const UserUpdateToOneWithWhereWithoutToolsInputSchema: z.ZodType<
  Prisma.UserUpdateToOneWithWhereWithoutToolsInput
> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([
    z.lazy(() => UserUpdateWithoutToolsInputSchema),
    z.lazy(() => UserUncheckedUpdateWithoutToolsInputSchema),
  ]),
}).strict();

export const UserUpdateWithoutToolsInputSchema: z.ZodType<Prisma.UserUpdateWithoutToolsInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutToolsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutToolsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  }).strict();

export const ToolCreateManyAuthorInputSchema: z.ZodType<Prisma.ToolCreateManyAuthorInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  memo: z.string(),
  brand: z.string(),
  kind: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}).strict();

export const ToolUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ToolUpdateWithoutAuthorInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ToolUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ToolUncheckedUpdateWithoutAuthorInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  }).strict();

export const ToolUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<
  Prisma.ToolUncheckedUpdateManyWithoutAuthorInput
> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  memo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  brand: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kind: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const ToolFindFirstArgsSchema: z.ZodType<Prisma.ToolFindFirstArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereInputSchema.optional(),
  orderBy: z.union([ToolOrderByWithRelationInputSchema.array(), ToolOrderByWithRelationInputSchema]).optional(),
  cursor: ToolWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ToolScalarFieldEnumSchema, ToolScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const ToolFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ToolFindFirstOrThrowArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereInputSchema.optional(),
  orderBy: z.union([ToolOrderByWithRelationInputSchema.array(), ToolOrderByWithRelationInputSchema]).optional(),
  cursor: ToolWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ToolScalarFieldEnumSchema, ToolScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const ToolFindManyArgsSchema: z.ZodType<Prisma.ToolFindManyArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereInputSchema.optional(),
  orderBy: z.union([ToolOrderByWithRelationInputSchema.array(), ToolOrderByWithRelationInputSchema]).optional(),
  cursor: ToolWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ToolScalarFieldEnumSchema, ToolScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const ToolAggregateArgsSchema: z.ZodType<Prisma.ToolAggregateArgs> = z.object({
  where: ToolWhereInputSchema.optional(),
  orderBy: z.union([ToolOrderByWithRelationInputSchema.array(), ToolOrderByWithRelationInputSchema]).optional(),
  cursor: ToolWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ToolGroupByArgsSchema: z.ZodType<Prisma.ToolGroupByArgs> = z.object({
  where: ToolWhereInputSchema.optional(),
  orderBy: z.union([ToolOrderByWithAggregationInputSchema.array(), ToolOrderByWithAggregationInputSchema]).optional(),
  by: ToolScalarFieldEnumSchema.array(),
  having: ToolScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ToolFindUniqueArgsSchema: z.ZodType<Prisma.ToolFindUniqueArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereUniqueInputSchema,
}).strict();

export const ToolFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ToolFindUniqueOrThrowArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereUniqueInputSchema,
}).strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
}).strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
}).strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict();

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict();

export const ToolCreateArgsSchema: z.ZodType<Prisma.ToolCreateArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  data: z.union([ToolCreateInputSchema, ToolUncheckedCreateInputSchema]),
}).strict();

export const ToolUpsertArgsSchema: z.ZodType<Prisma.ToolUpsertArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereUniqueInputSchema,
  create: z.union([ToolCreateInputSchema, ToolUncheckedCreateInputSchema]),
  update: z.union([ToolUpdateInputSchema, ToolUncheckedUpdateInputSchema]),
}).strict();

export const ToolCreateManyArgsSchema: z.ZodType<Prisma.ToolCreateManyArgs> = z.object({
  data: z.union([ToolCreateManyInputSchema, ToolCreateManyInputSchema.array()]),
}).strict();

export const ToolCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ToolCreateManyAndReturnArgs> = z.object({
  data: z.union([ToolCreateManyInputSchema, ToolCreateManyInputSchema.array()]),
}).strict();

export const ToolDeleteArgsSchema: z.ZodType<Prisma.ToolDeleteArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  where: ToolWhereUniqueInputSchema,
}).strict();

export const ToolUpdateArgsSchema: z.ZodType<Prisma.ToolUpdateArgs> = z.object({
  select: ToolSelectSchema.optional(),
  include: ToolIncludeSchema.optional(),
  data: z.union([ToolUpdateInputSchema, ToolUncheckedUpdateInputSchema]),
  where: ToolWhereUniqueInputSchema,
}).strict();

export const ToolUpdateManyArgsSchema: z.ZodType<Prisma.ToolUpdateManyArgs> = z.object({
  data: z.union([ToolUpdateManyMutationInputSchema, ToolUncheckedUpdateManyInputSchema]),
  where: ToolWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict();

export const ToolUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ToolUpdateManyAndReturnArgs> = z.object({
  data: z.union([ToolUpdateManyMutationInputSchema, ToolUncheckedUpdateManyInputSchema]),
  where: ToolWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict();

export const ToolDeleteManyArgsSchema: z.ZodType<Prisma.ToolDeleteManyArgs> = z.object({
  where: ToolWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict();
