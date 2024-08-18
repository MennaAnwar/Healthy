import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthdate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  primaryPhysician: string;
  allergies: string | undefined;
  current_medication: string | undefined;
  Family_medical_history: string | undefined;
  past_medical_history: string | undefined;
  Identification_type: string | undefined;
  Identification_number: string | undefined;
  identificationDocument: FormData | undefined;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
