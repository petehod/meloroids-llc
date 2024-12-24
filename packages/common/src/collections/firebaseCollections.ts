import { z } from "zod";
import { UserSchema } from "../validators/user.validator";

export const FirebaseCollectionsSchema = z.enum(["users"]);

export type FirebaseCollections = z.infer<typeof FirebaseCollectionsSchema>;

export const ValidFirebaseDocSchema = z.union([UserSchema, UserSchema]);

export type ValidFirebaseDoc = z.infer<typeof ValidFirebaseDocSchema>;
