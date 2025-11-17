import { BaseModel } from "../commons/base-model";

export class AccountLedger extends BaseModel {
    accountCategoryId?: number;
    accountHeadId?: number;
    accountGroupId?: number;
    accountSubGroupId?: number;
    openingBalance?: number;
    openingType?: string; //Debit, Credit
}

export class AccountLedgerResponse extends AccountLedger {
    accountCategoryName?: string;
    accountHeadName?: string;
    accountGroupName?: string;
    accountSubGroupName?: string;
}