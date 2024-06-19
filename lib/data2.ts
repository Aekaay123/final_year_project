export const studentData2 = [
    {"StudentNo":"02200141","Name":"Varndall","Status":"Present","Email":"02200141.cst@rub.edu.bt"},
    {"SlNo":2,"StudentNo":"02200142","Name":"Asish Khandhal","Date":"2/24/2024","Status":"Present","Email":"02200142.cst@rub.edu.bt"},
    {"SlNo":3,"StudentNo":"02200143","Name":"Salim Pradhan","Date":"10/11/2023","Status":"Absent","Email":"02200143.cst@rub.edu.bt"},
    {"SlNo":4,"StudentNo":"02200144","Name":"Sonam Phuntsho","Date":"3/6/2024","Status":"Present","Email":"02200144.cst@rub.edu.bt"},
    {"SlNo":5,"StudentNo":"02200145","Name":"Rigzin Samdrup","Date":"8/11/2023","Status":"Absent","Email":"02200145.cst@rub.edu.bt"},
    {"SlNo":6,"StudentNo":"02200146","Name":"Uygen Thinley Dorji","Date":"4/6/2024","Status":"Absent","Email":"02200146.cst@rub.edu.bt"},
    {"SlNo":7,"StudentNo":"02200147","Name":"Tenzin Jamtsho","Date":"11/6/2023","Status":"Present","Email":"02200147.cst@rub.edu.bt"},
    {"SlNo":8,"StudentNo":"02200148","Name":"Jigme Tenzin","Date":"8/19/2023","Status":"Absent","Email":"02200148.cst@rub.edu.bt"},
    {"SlNo":9,"StudentNo":"02200149","Name":"Nima yoezer","Date":"9/12/2023","Status":"Absent","Email":"02200149.cst@rub.edu.bt"},
    {"SlNo":10,"StudentNo":"02200150","Name":"Kencho Wangdi","Date":"6/15/2023","Status":"Absent","Email":"02200150.cst@rub.edu.bt"}
];

type Student = (typeof studentData2)[number];
