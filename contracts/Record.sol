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
        address addr;
    }
    struct Patient {
        string fname;
        string lname;
        string dob;
        string phone;
        string description;
        string allergy;
        address addr;
        
    }
    address[] public patientList;
    address[] public doctorList;

    mapping(address => Patient) patients;
    mapping(address => Doctor) doctors;
     mapping(address => bool) isPatient;
    mapping(address => bool) isDoctor;
    mapping(address=>mapping(address=>bool)) isApproved;
     uint256 public patientCount = 0;
    uint256 public doctorCount = 0;
    // Doctor public doctor;
    // Patient public patient;
    function setDoctor(string memory _fname,
    string memory _lname,
    string memory _dob, 
    string memory _phone,
    string memory _qualification,
    string memory _speciality) public {
         Doctor storage doctor = doctors[msg.sender];
                            doctor.fname = _fname;
                            doctor.lname = _lname;
                            doctor.dob = _dob;
                            doctor.phone = _phone;
                            doctor.qualification = _qualification;
                            doctor.speciality = _speciality;
                            doctor.addr = msg.sender;
                            doctorList.push(msg.sender);
                            isDoctor[msg.sender] = true;
                            doctorCount++;
    }

    function getDoctor(address _address) public view returns (string memory, 
    string memory,
    string memory,
    string memory, 
    string memory , 
    string memory) {
                Doctor storage doctor = doctors[_address];
                require(isDoctor[_address]);
                return (
                            doctor.fname,
                            doctor.lname,
                            doctor.dob, 
                            doctor.phone,
                            doctor.qualification,
                            doctor.qualification
                        );

    }
    function setPatient(string memory _fname,
    string memory _lname,
    string memory _dob, 
    string memory _phone, 
    string memory _description,
     string memory _allergy) public {
             Patient storage patient = patients[msg.sender];
                            patient.fname = _fname;
                            patient.lname = _lname;
                            patient.dob = _dob;
                            patient.phone = _phone;
                            patient.description = _description;
                            patient.allergy = _allergy;
                            patient.addr = msg.sender;
                            patientList.push(msg.sender);
                            isPatient[msg.sender] = true;
                            isApproved[msg.sender][msg.sender] = true;
                            patientCount++;
    }
    function givePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = true;
                 return true;
    }
    function getPatient(address _address) public view returns (string memory,
    string memory,
    string memory,
    string memory,
    string memory ,
    string memory) {
        require(isApproved[_address][msg.sender]);
                Patient storage patient = patients[_address];
                         return (
                                    patient.fname,
                                    patient.lname,
                                    patient.dob,
                                    patient.phone,
                                    patient.description,
                                    patient.allergy
                             );

    }
    function getPatients() public view returns(address[] memory) {
        return patientList;
    }
    function getDoctors() public view returns(address[] memory) {
        return doctorList;
    }
    function getPatientCount() public view returns(uint256) {
        return patientCount;
    }
     function getDoctorCount() public view returns(uint256) {
        return doctorCount;
    }

}

