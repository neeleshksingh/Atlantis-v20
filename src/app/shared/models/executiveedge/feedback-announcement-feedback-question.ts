import { AuditModel } from "../commons/audit-model";
import { BaseModel } from "../commons/base-model";

export class feedbackAnnouncementFeedbackQuestions extends AuditModel{
    id?: number;
    feedbackAnnouncementId?: number;
        feedbackAnnouncementName ?: string;
        feedbackQuestionId ?: number;
        feedbackQuestionName ?: string;
        status?:string
}