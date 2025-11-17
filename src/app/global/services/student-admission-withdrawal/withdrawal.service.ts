import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Withdraw } from 'src/app/shared/models/student-onboarding/withdraw';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {

  constructor(private httpClient: HttpClient) { }

  getStudentOnBoardingWithdrawal() {
    return this.httpClient.get<Withdraw[]>(environment.apiStudentOnboardingUrl + '/StudentOnboardingWithdrawal/GetStudentOnBoardingWithdrawal');
  }
  getStudentOnBoardingWithdrawalById(id: number) {
    return this.httpClient.get<Withdraw>(environment.apiStudentOnboardingUrl + '/StudentOnboardingWithdrawal/GetStudentOnBoardingWithdrawalById/' + id);
  }
  getStudentOnBoardingWithdrawalByAdmissionNumber(admissionNumber: string) {
    return this.httpClient.get<Withdraw>(environment.apiStudentOnboardingUrl + '/StudentOnboardingWithdrawal/GetStudentOnBoardingWithdrawalByAdmissionNumber/' + admissionNumber);
  }
  saveWithdrawalRequest(formData: FormData) {
    return this.httpClient.post<Withdraw>(environment.apiStudentOnboardingUrl + '/StudentOnboardingWithdrawal/SaveStudentOnBoardingWithdrawalRequest', formData);
  }
  updateStudentOnBoardingWithdrawalById(withdraw: Withdraw) {
    return this.httpClient.post<Withdraw>(environment.apiStudentOnboardingUrl + '/StudentOnboardingWithdrawal/UpdateStudentOnBoardingWithdrawalById', withdraw);
  }
}
