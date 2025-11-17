import { AuditModel } from "../commons/audit-model";
import { Role } from "./role";

export class UserSignUp extends AuditModel{
    id?: number;
    userId?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    userName?: string;
    displayName?: string;
    displayImageUrl?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    roles?: Role[]
}