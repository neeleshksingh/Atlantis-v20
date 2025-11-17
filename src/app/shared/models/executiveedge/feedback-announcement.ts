import { BaseModel } from "../commons/base-model";

export class FeedbackAnnouncement extends BaseModel {
    details?: string;
    startDateTime?:Date;
    endDateTime?:Date;
}