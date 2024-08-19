declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "Male" | "Female" ;
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
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

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment;
  type: string;
};
