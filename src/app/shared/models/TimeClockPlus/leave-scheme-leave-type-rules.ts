import { BaseModel } from "../commons/base-model";

export class LeaveSchemeLeaveTypeRule extends BaseModel{
    leaveYearId?: number;
    leaveSchemeId?: number;
    leaveTypeId?: number;
    leavePolicyId?: number;
    leavePeriodicityId?: number;
    leaveCredit?: number;
    noOfDaysApplyBefore?: number;
    isLeaveRequestAllowedAfter?: boolean;
    noOfDaysApplyAfter?: number;
    isLeaveCarryForwardAllowed?: boolean;
    noOfMaxDaysToCarryForward?: number;
    isPayoutEnabled?: boolean;
    isPayoutRecoveryEnabled?: boolean;
    noOfDaysToResumeWork?: number;
}