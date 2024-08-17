"use server";

import { ID, Query } from "node-appwrite";

import { parseStringify } from "../utils";
import {
  users,
  storage,
  BUCKET_ID,
  databases,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  ENDPOINT,
  PROJECT_ID,
} from "../appwrite.config";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};
