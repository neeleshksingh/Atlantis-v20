import { NgModule, isDevMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared.module';
import { GenericViewComponent } from './components/generic-view/generic-view.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { AcademicSessionProgramOperationalVerticalSearchComponent } 
    from './components/academic-session-program-operational-vertical-search/academic-session-program-operational-vertical-search.component';
import { ExaminationAcademicSessionProgramOperationalVerticalMultiSearchComponent } 
    from './components/examination-academic-session-program-operational-vertical-multi-search/examination-academic-session-program-operational-vertical-multi-search.component';
import { BarGraphSkeletonComponent } from './components/skeletons/bar-graph-skeleton/bar-graph-skeleton.component';
import { DashboardCardsSkeletonComponent } from './components/skeletons/dashboard-cards-skeleton/dashboard-cards-skeleton.component';
import { AcademicSessionProgramOVMultiSearchComponent } from './components/academic-session-program-ovmulti-search/academic-session-program-ovmulti-search.component';
import { StudentMasterSheetComponent } from './components/student-master-sheet/student-master-sheet.component';
import { AcademicSessionProgramOVSearchComponent } from './components/academic-session-program-ovsearch/academic-session-program-ovsearch.component';
import { DashboardListSkeletonComponent } from './components/skeletons/dashboard-list-skeleton/dashboard-list-skeleton.component';
import { ExaminationAcademicSessionProgramOvSearchComponent } from './components/examination-academic-session-program-ov-search/examination-academic-session-program-ov-search.component';
import { GenericManageComponent } from './components/generic-manage/generic-manage.component';
import { StudentTopperListComponent } from './components/student-topper-list/student-topper-list.component';
import { DocumentCenterGlobalComponent } from './components/document-center-global/document-center-global.component';
import { StudentInformationCentreComponent } from './components/student-information-centre/student-information-centre.component';
import { BatchAttendanceComponent } from './components/batch-attendance/batch-attendance.component';
import { ExaminationBacklogHistoryComponent } from './components/examination-backlog-history/examination-backlog-history.component';
import { ExaminationResultComponent } from './components/examination-result/examination-result.component';
import { StudentAddressDetailsComponent } from './components/student-address-details/student-address-details.component';
import { StudentFamilyDetailsComponent } from './components/student-family-details/student-family-details.component';
import { StudentBasicInformationComponent } from './components/student-basic-information/student-basic-information.component';
import { StudentGeneralDetailsComponent } from './components/student-general-details/student-general-details.component';
import { StudentInformationCentreTabsComponent } from './components/student-information-centre-tabs/student-information-centre-tabs.component';
import { StudentProgramComponent } from './components/student-program/student-program.component';
import { StudentSearchComponent } from './components/student-search/student-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { EmployeeSalaryBreakDownComponent } from './components/employee-salary-break-down/employee-salary-break-down.component';
import { StudentBusHostelOptInOptOutComponent } from './components/student-bus-hostel-opt-in-opt-out/student-bus-hostel-opt-in-opt-out.component';

@NgModule({
    imports: [
        SharedModule,
        GenericViewComponent,
        GenericTableComponent,
        AcademicSessionProgramOperationalVerticalSearchComponent,
        ExaminationAcademicSessionProgramOperationalVerticalMultiSearchComponent,
        BarGraphSkeletonComponent,
        DashboardCardsSkeletonComponent,
        AcademicSessionProgramOVMultiSearchComponent,
        
        AcademicSessionProgramOVSearchComponent,
        DashboardListSkeletonComponent,
        ExaminationAcademicSessionProgramOvSearchComponent,
        GenericManageComponent,
        StudentTopperListComponent,
        DocumentCenterGlobalComponent,
        NotFoundComponent,
        ProgressBarComponent,
        EmployeeSalaryBreakDownComponent,
    ],
    declarations: [
        ExaminationBacklogHistoryComponent,
        ExaminationResultComponent,
        BatchAttendanceComponent,
        StudentAddressDetailsComponent,
        StudentFamilyDetailsComponent,
        StudentBasicInformationComponent,
        StudentGeneralDetailsComponent,
        StudentInformationCentreTabsComponent,
        StudentProgramComponent,
        StudentSearchComponent,
        StudentInformationCentreComponent,
        StudentBusHostelOptInOptOutComponent,
    ],
    exports: [
        SharedModule,
        GenericViewComponent,
        GenericTableComponent,
        AcademicSessionProgramOperationalVerticalSearchComponent,
        ExaminationAcademicSessionProgramOperationalVerticalMultiSearchComponent,
        BarGraphSkeletonComponent,
        DashboardCardsSkeletonComponent,
        
        AcademicSessionProgramOVMultiSearchComponent,
        AcademicSessionProgramOVSearchComponent,
        DashboardListSkeletonComponent,
        ExaminationAcademicSessionProgramOvSearchComponent,
        GenericManageComponent,
        StudentTopperListComponent,
        DocumentCenterGlobalComponent,

        ExaminationBacklogHistoryComponent,
        ExaminationResultComponent,
        BatchAttendanceComponent,
        StudentAddressDetailsComponent,
        StudentFamilyDetailsComponent,
        StudentBasicInformationComponent,
        StudentGeneralDetailsComponent,
        StudentInformationCentreTabsComponent,
        StudentProgramComponent,
        StudentSearchComponent,
        StudentInformationCentreComponent,
        NotFoundComponent,
        ProgressBarComponent,
        EmployeeSalaryBreakDownComponent,
        StudentBusHostelOptInOptOutComponent,
    ]
})
export class GlobalModule { }
