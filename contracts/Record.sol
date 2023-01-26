//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract Record {
    
    struct Doctor {
      string fname;
        string lname;
        string dob;
        string phone;
        string qualification;
        string speciality;
    }
    struct Patient {
        string fname;
        string lname;
        string dob;
        string phone;
        string description;
        string allergy;
        
    }

   
    Doctor public doctor;
    Patient public patient;
    function setDoctor(string memory _fname,string memory _lname,string memory _dob, string memory _phone, string memory _qualification, string memory _speciality) public {
       doctor.fname = _fname;
        doctor.lname = _lname;
        doctor.dob = _dob;
        doctor.phone = _phone;
        doctor.qualification = _qualification;
        doctor.speciality = _speciality;
    }

    function getDoctor() public view returns (string memory,string memory,string memory, string memory, string memory , string memory) {
                return (doctor.fname, doctor.lname, doctor.dob, doctor.phone,doctor.qualification,doctor.qualification);

    }
    function setPatient(string memory _fname,string memory _lname,string memory _dob, string memory _phone, string memory _description, string memory _allergy) public {
        patient.fname = _fname;
        patient.lname = _lname;
        patient.dob = _dob;
        patient.phone = _phone;
        patient.description = _description;
        patient.allergy = _allergy;
    }
    function getPatient() public view returns (string memory,string memory,string memory, string memory, string memory , string memory) {
                return (patient.fname, patient.lname, patient.dob, patient.phone,patient.description,patient.allergy);

    }
}

