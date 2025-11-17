import { BaseModel } from "../commons/base-model";

export class EmployeeLeaveRequest extends BaseModel{
    requestDate?: Date;
    requestBy?: string;
    employeeCode?: string;
    leaveYearId?: number;
    leaveYearName?:string;
    leaveTypeId?: number;
    leaveTypeName?:string
    startDate?: Date;
    isHalfDay?: boolean;
    endDate?: Date;
    noOfDays?: number;
    address?: string;
    phoneNumber?: string;
    isColleagueIncluded?: boolean;
    colleagueEmployeeCodes?: string;
    leaveStatus?: string;
    leaveStatusUpdatedBy?: string;
    leaveStatusUpdatedDate?: Date;
    leaveStatusDescription?: string;
}