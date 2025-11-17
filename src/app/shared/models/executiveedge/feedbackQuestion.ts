import { BaseModel } from "../commons/base-model";

export class FeedbackQuestion extends BaseModel {
    type?: string;
    optionLabels?: string;
    optionValues?: string;
}