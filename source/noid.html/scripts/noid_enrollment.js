var doesLeftBiometricExist = "";
var doesRightBiometricExist = "";
var globaLocalNoID = "";
var globalCurrentHandFinger = "";

window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};
function checkPassword() {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    text = document.getElementById("PortalPassword").value;
    if (text.length > 0) {
        var isValid = strongRegex.test(text);
        if (isValid == true) {
            return true;
        }
        else {
            alert('Your password did not meet the minimun requirements: At leat one uppercase letter, one lowercase letter, one number, one special character, and minimum of 8 characters long.');
            document.getElementById("PortalPassword").value = "";            
            return false;
        }
    };
};
function refreshProviderQueue() {
    NoIDBridge.refreshProviderQueue();
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
        //error, show user message
        alert("refreshProviderQueue error: " + NoIDBridge.errorDescription);
    }
    var t = setTimeout(refreshProviderQueue, 30000);
};
function saveDemoForNoBioMatch() {
    var language = document.getElementById('selectedLanguage');
    var languageSelected = language.options[language.selectedIndex].text;
    var firstName = document.getElementById("FirstName").value;
    var middleName = document.getElementById("MiddleName").value;
    var lastName = document.getElementById("LastName").value;
    var birthYear = document.getElementById('BirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
    var birthMonth = document.getElementById('BirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
    var birthDay = document.getElementById('BirthDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;
    if (document.getElementById("GenderMale").checked) {
        var gender = document.getElementById("GenderMale").value;
    };
    if (document.getElementById("GenderFemale").checked) {
        var gender = document.getElementById("GenderFemale").value;
    };
    var streetAddress = document.getElementById("StreetAddress").value;
    var streetAddress2 = document.getElementById("StreetAddress2").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    var postalCode = document.getElementById("ZipCode").value;
    var phoneCell = document.getElementById("PhoneNumber").value;
    var emailAddress = document.getElementById("EmailAddress").value;
    var exceptionReason = document.getElementById('exceptionMissingReason');
    var selectedExceptionReason = exceptionReason.options[exceptionReason.selectedIndex].text;
    var secretExAnswer1 = document.getElementById('secretAnswer1').value;
    var secretExAnswer2 = document.getElementById('secretAnswer2').value;
    var secretQuestion1 = document.getElementById('exceptionSecretQuestion1');
    var selectedsecretQuestion1 = secretQuestion1.options[secretQuestion1.selectedIndex].value;
    var secretQuestion2 = document.getElementById('exceptionSecretQuestion2');
    var selectedsecretQuestion2 = secretQuestion2.options[secretQuestion2.selectedIndex].value;

    NoIDBridge.postDemoForNoBioMatch(languageSelected, firstName, middleName, lastName, gender, selectedBirthYear, selectedBirthMonth, selectedBirthDay, streetAddress, streetAddress2, city, state, postalCode, emailAddress, phoneCell, selectedExceptionReason, secretExAnswer1, secretExAnswer2, selectedsecretQuestion1, selectedsecretQuestion2);
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
        //error, show user message
        alert("postDemoForNoBioMatch error: " + NoIDBridge.errorDescription);
    }
};
function savePatient() {
    //mark schroeder 20170621
    var language = document.getElementById('selectedLanguage');
    var languageSelected = language.options[language.selectedIndex].text;
    var firstName = document.getElementById("FirstName").value;
    var middleName = document.getElementById("MiddleName").value;
    var lastName = document.getElementById("LastName").value;
    var birthYear = document.getElementById('BirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
    var birthMonth = document.getElementById('BirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
    var birthDay = document.getElementById('BirthDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;
    if (document.getElementById("GenderMale").checked) {
        var gender = document.getElementById("GenderMale").value;
    };
    if (document.getElementById("GenderFemale").checked) {
        var gender = document.getElementById("GenderFemale").value;
    };
    var streetAddress = document.getElementById("StreetAddress").value;
    var streetAddress2 = document.getElementById("StreetAddress2").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    var postalCode = document.getElementById("ZipCode").value;
    var phoneCell = document.getElementById("PhoneNumber").value;
    var emailAddress = document.getElementById("EmailAddress").value;
    //may not need below for profile, but will need eventually
    var newOrReturnPatient = document.getElementById('NewOrReturnPatient');
    var selectedNewOrReturnPatient = newOrReturnPatient.options[newOrReturnPatient.selectedIndex].value;
    var multipleBirthPregnancy = document.getElementById('FromMultipleBirthPregnancy');
    var selectedMultipleBirthPregnancy = multipleBirthPregnancy.options[multipleBirthPregnancy.selectedIndex].value;
    var genderChanged = document.getElementById('GenderChanged');
    var selectedGenderChanged = genderChanged.options[genderChanged.selectedIndex].value;
    var patientHub = document.getElementById('PatientHub');
    var selectedPatientHub = patientHub.options[patientHub.selectedIndex].value;
    var portalPassword = document.getElementById("PortalPassword").value;
   
    var multipleBirthFlag = document.getElementById('FromMultipleBirthPregnancy');
    var selectedMultipleBirthFlag = multipleBirthFlag.options[multipleBirthFlag.selectedIndex].value;
    var genderChangeFlag = document.getElementById('GenderChanged');
    var selectedGenderChangeFlag = genderChangeFlag.options[genderChangeFlag.selectedIndex].value;
    var password = document.getElementById('PortalPassword').value;
    var patientdHub = document.getElementById('PatientHub');
    var selectedPatientdHub = patientdHub.options[patientdHub.selectedIndex].value;
    var exceptionReason = document.getElementById('exceptionMissingReason');
    var selectedExceptionReason = exceptionReason.options[exceptionReason.selectedIndex].text;
    var secretExAnswer1 = document.getElementById('secretAnswer1').value;
    var secretExAnswer2 = document.getElementById('secretAnswer2').value;
    var secretQuestion1 = document.getElementById('exceptionSecretQuestion1');
    var selectedsecretQuestion1 = secretQuestion1.options[secretQuestion1.selectedIndex].value;
    var secretQuestion2 = document.getElementById('exceptionSecretQuestion2');
    var selectedsecretQuestion2 = secretQuestion2.options[secretQuestion2.selectedIndex].value;

    
    NoIDBridge.postDemographics(languageSelected, firstName, middleName, lastName, gender, selectedBirthYear, selectedBirthMonth, selectedBirthDay, streetAddress, streetAddress2, city, state, postalCode, emailAddress, phoneCell, selectedMultipleBirthFlag, selectedGenderChangeFlag, password, selectedPatientdHub, doesLeftBiometricExist, doesRightBiometricExist, selectedExceptionReason, secretExAnswer1, secretExAnswer2, selectedsecretQuestion1, selectedsecretQuestion2);
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
        //no error continue with new page
        alert("postDemographics Error " + NoIDBridge.errorDescription);
    }
    setTimeout(function () {
        pageRefresh();
    }, 10000);
};

function saveUnknownDOBExistingpatient() {
    document.getElementById('btnUnknownDOBExistingPatient').style.display = 'none';
    NoIDBridge.postUnknownDOBExistingpatient(globaLocalNoID);
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
        //error, show user message
        alert("postUnknownDOBExistingpatient message " + NoIDBridge.errorDescription);
    }
    document.getElementById('ExistingIdentityModalBody').innerHTML = "<div class='row mar_ned'><div id='ExistingPatientFinalMessage' class='col-md-12 col-xs-12'><h3>Thank you. Your NoID profile is ready for staff approval. Please wait for a staff member to call your name to finalize this process.<br /><br />This window will automatically close in 10 seconds.</h3><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div></div>";
    //document.getElementById('confirmExistingPatient').style.display = 'none';
    //document.getElementById('btnUnknownDOBExistingPatient').style.display = 'none';
    setTimeout(function () {
        pageRefresh();
    }, 10000);    
};
function confirmExistingPatient() {  
    var birthYear = document.getElementById('IdentityBirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
    var birthMonth = document.getElementById('IdentityBirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
    var birthDay = document.getElementById('IdentityBrithDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;
    
    NoIDBridge.postConfirmExistingPatient(globaLocalNoID, selectedBirthYear, selectedBirthMonth, selectedBirthDay);
    if (NoIDBridge.existingDOBMatch == "match") {
        document.getElementById('ExistingIdentityModalBody').innerHTML = "<div class='row mar_ned'><div id='ExistingPatientFinalMessage' class='col-md-12 col-xs-12'><h3>Thank you. Your NoID profile is ready for staff approval. Please wait for a staff member to call your name to finalize this process.<br /><br />This window will automatically close in 10 seconds.</h3><br /><br /><br /><br /><br /><br /><br /></div></div>";
        //document.getElementById('confirmExistingPatient').style.display = 'none';
        setTimeout(function () {
            pageRefresh();
        }, 10000);
        document.getElementById('btnUnknownDOBExistingPatient').style.display = 'none';
    }
    else {        
        alert("Date of birth did not match our records. Please try again, or click the button that you are unable to provider your birth date.")
    }
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
        //error, show user message
        alert("postConfirmExistingPatient message " + NoIDBridge.errorDescription);
    }    
};
function validateExistingPatient() {
    var birthYear = document.getElementById('IdentityBirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
    var birthMonth = document.getElementById('IdentityBirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
    var birthDay = document.getElementById('IdentityBrithDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;

    if (selectedBirthDay == "Date" || selectedBirthMonth == "Month" || selectedBirthYear == "Year") {
        alert("Please select your date of brith");
        return false;
    }
};
function validateBasicDemographics() {
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var birthYear = document.getElementById('BirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
    var birthMonth = document.getElementById('BirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
    var birthDay = document.getElementById('BirthDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;
    var gender = '';
    if (document.getElementById("GenderMale").checked) {
        var gender = document.getElementById("GenderMale").value;
    };
    if (document.getElementById("GenderFemale").checked) {
        var gender = document.getElementById("GenderFemale").value;
    };

    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (lastName == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (selectedBirthDay == "Date" || selectedBirthMonth == "Month" || selectedBirthYear == "Year") {
        alert("Please select your date of brith");
        return false;
    }
    if (gender.length == 0) {
        alert("Please select your genger");
        return false;
    }
    document.getElementById('demographics1Next').disabled = false;
}
function validateMissingBiometricsReasons() {
    var secretAnswer1 = document.getElementById("secretAnswer1").value;
    var secretAnswer2 = document.getElementById("secretAnswer2").value;
    var missingReason = document.getElementById('exceptionMissingReason');
    var exceptionMissingReason = missingReason.options[missingReason.selectedIndex].text;
       
    if (exceptionMissingReason == "") {
        alert("Reason For Missing Biometric is a required field.");
        return false;
    }
    if (secretAnswer1 == "") {
        alert("Secret Question 1 is a required field.");
        return false;
    }
    if (secretAnswer2 == "") {
        alert("Secret Question 2 is a required field.");
        return false;
    }    
}
function populateReviewPage() {
    var firstName = document.getElementById("FirstName").value;
    var middleName = document.getElementById("MiddleName").value;
    var lastName = document.getElementById("LastName").value;
    var birthYear = document.getElementById('BirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
    var birthMonth = document.getElementById('BirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
    var birthDay = document.getElementById('BirthDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;
    if (document.getElementById("GenderMale").checked) {
        var gender = document.getElementById("GenderMale").value;
    };
    if (document.getElementById("GenderFemale").checked) {
        var gender = document.getElementById("GenderFemale").value;
    };
    var streetAddress = document.getElementById("StreetAddress").value;
    var streetAddress2 = document.getElementById("StreetAddress2").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    var postalCode = document.getElementById("ZipCode").value;
    var phoneCell = document.getElementById("PhoneNumber").value;
    var emailAddress = document.getElementById("EmailAddress").value;   
    var multipleBirthPregnancy = document.getElementById('FromMultipleBirthPregnancy');
    var selectedMultipleBirthPregnancy = multipleBirthPregnancy.options[multipleBirthPregnancy.selectedIndex].innerText;
    var genderChanged = document.getElementById('GenderChanged');
    var selectedGenderChanged = genderChanged.options[genderChanged.selectedIndex].innerText;
    
    //begin populate reveiw page
    document.getElementById('revName').innerText = firstName + " " + (middleName.length > 0 ? middleName + " " + lastName : lastName);
    document.getElementById('revDOB').innerText = selectedBirthMonth + " " + selectedBirthDay + ", " + selectedBirthYear;
    document.getElementById('revGender').innerText = gender;
    document.getElementById('revStreetAddress').innerText = streetAddress;
    //if street address2 not blank set innerhtml and include line break after
    document.getElementById('revStreetAddress2').innerHTML = (streetAddress2.length > 0 ? streetAddress2 + "<br />" : "");
    document.getElementById('revCityState').innerText = city + ", " + state;
    document.getElementById('revPostalCode').innerText = postalCode;
    document.getElementById('revPhoneNumber').innerText = phoneCell;
    document.getElementById('revEmail').innerText = emailAddress;
    document.getElementById('revTwin').innerText = selectedMultipleBirthPregnancy;
    document.getElementById('revGenderChanged').innerText = selectedGenderChanged;
  
};
function setLateralitySite(selectedElementID) {
    var newOrReturn = document.getElementById('NewOrReturnPatient');
    var selectedNewOrReturn = newOrReturn.options[newOrReturn.selectedIndex].value;
    switch (selectedElementID) {
        case 'selectLeftLittle':
            document.getElementById('spnLeftHandFinger').innerText = "Left Little Finger";
            //document.getElementById('spnLeftHandFinger2').innerText = "Left Little Finger";
            document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Left Little Finger</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
            document.getElementById('leftHandImage').src = "resources/LeftHandImageMapLittleFinger.jpg";
            globalCurrentHandFinger = selectedElementID;
            //savelateralityCaptureSite("Left", "LittleFinger");
            break;
        case 'selectLeftRing':
            document.getElementById('spnLeftHandFinger').innerText = "Left Ring Finger";
            //document.getElementById('spnLeftHandFinger2').innerText = "Left Ring Finger";
            document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Left Ring Finger</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
            document.getElementById('leftHandImage').src = "resources/LeftHandImageMapRingFinger.jpg";
            globalCurrentHandFinger = selectedElementID;
            //savelateralityCaptureSite("Left", "RingFinger");
            break;
        case 'selectLeftMiddle':
            document.getElementById('spnLeftHandFinger').innerText = "Left Middle Finger";
            //document.getElementById('spnLeftHandFinger2').innerText = "Left Middle Finger";
            document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Left Middle Finger</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
            document.getElementById('leftHandImage').src = "resources/LeftHandImageMapMiddleFinger.jpg";
            globalCurrentHandFinger = selectedElementID;
            //savelateralityCaptureSite("Left", "MiddleFinger");
            break;
        case 'selectLeftIndex': 
            if (selectedNewOrReturn != "return") {
                document.getElementById('spnLeftHandFinger').innerText = "Left Index Finger";
                //document.getElementById('spnLeftHandFinger2').innerText = "Left Index Finger";
                document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Left Index Finger</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
            }
            else
            {
                document.getElementById('spnLeftHandFinger').innerText = "Existing Patient ";
                //document.getElementById('spnLeftHandFinger2').innerText = "Original Finger Used to Enroll";
                document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Original finger used to enroll</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
                document.getElementById('clcikNoFingerLeft').innerText = "Click Here to change the selected finger.";
            }
            document.getElementById('leftHandImage').src = "resources/LeftHandImageMapIndexFinger.jpg";
            globalCurrentHandFinger = selectedElementID;
            //savelateralityCaptureSite("Left", "IndexFinger");
            break;
            //document.getElementById('spnLeftHandFinger').innerText = "Left Index Finger";
            //document.getElementById('spnLeftHandFinger2').innerText = "Left Index Finger";
            //document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Left Index Finger</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
            //document.getElementById('leftHandImage').src = "resources/LeftHandImageMapIndexFinger.jpg";  
            //savelateralityCaptureSite("Left", "IndexFinger");
            //break;
        case 'selectLeftThumb':
            document.getElementById('spnLeftHandFinger').innerText = "Left Thumb";
            //document.getElementById('spnLeftHandFinger2').innerText = "Left Thumb";
            document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please scan your:<br /><h3>Left Thumb</h3>Please place your finger on the scanner as shown in the image to the right.</h4>";
            document.getElementById('leftHandImage').src = "resources/LeftHandImageMapThumb.jpg";  
            //savelateralityCaptureSite("Left", "Thumb");
            globalCurrentHandFinger = selectedElementID;
            break;            
        case 'selectRightLittle':
            document.getElementById('spnRightHandFinger').innerText = "Right Little Finger";
            //document.getElementById('spnRightHandFinger2').innerText = "Right Little Finger";
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please scan your:<br /><h3>Right Little Finger</h3>Please place your finger on the scanner as shown in the image to the left.</h4>";
            document.getElementById('rightHandImage').src = "resources/RightHandImageMapLittleFinger.jpg";  
            //savelateralityCaptureSite("Right", "LittleFinger");
            globalCurrentHandFinger = selectedElementID;
            break;
        case 'selectRightRing':
            document.getElementById('spnRightHandFinger').innerText = "Right Ring Finger";
            //document.getElementById('spnRightHandFinger2').innerText = "Right Ring Finger";
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please scan your:<br /><h3>Right Ring Finger</h3>Please place your finger on the scanner as shown in the image to the left.</h4>";
            document.getElementById('rightHandImage').src = "resources/RightHandImageMapRingFinger.jpg";  
            //savelateralityCaptureSite("Right", "RingFinger");
            globalCurrentHandFinger = selectedElementID;
            break;
        case 'selectRightMiddle':
            document.getElementById('spnRightHandFinger').innerText = "Right Middle Finger";
            //document.getElementById('spnRightHandFinger2').innerText = "Right Middle Finger";
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please scan your:<br /><h3>Right Middle Finger</h3>Please place your finger on the scanner as shown in the image to the left.</h4>";
            document.getElementById('rightHandImage').src = "resources/RightHandImageMapMiddleFinger.jpg";  
            //savelateralityCaptureSite("Right", "MiddleFinger");
            globalCurrentHandFinger = selectedElementID;
            break;
        case 'selectRightIndex':
            globalCurrentHandFinger = selectedElementID;
            document.getElementById('spnRightHandFinger').innerText = "Right Index Finger";
            //document.getElementById('spnRightHandFinger2').innerText = "Right Index Finger";
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please scan your:<br /><h3>Right Index Finger</h3>Please place your finger on the scanner as shown in the image to the left.</h4>";
            document.getElementById('rightHandImage').src = "resources/RightHandImageMapIndexFinger.jpg"; 
            document.getElementById('leftHandScanNav').href = "#";
            document.getElementById('leftHandScanNav').title = "Left Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
            document.getElementById('consentNav').href = "#";
            document.getElementById('consentNav').title = "Consent Page No Longer Available. Click Restart Button if Required";
            document.getElementById('rightFingerprintBackButton').disabled = true;
            if (doesLeftBiometricExist != "yes") {
                NoIDBridge.postDoNotHaveValidBiometricButtonclick("Left");
                doesLeftBiometricExist = "no";
                if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
                    //error, show user message
                    alert("postLateralityCaptureSite Error " + NoIDBridge.errorDescription);
                }
            };           
            if (selectedNewOrReturn == "return") {
                document.getElementById('clcikNoFingerRight').innerText = "Click Here to change the selected finger.";
            }
            //savelateralityCaptureSite("Right", "IndexFinger");
            break;
        case 'selectRightThumb':
            document.getElementById('spnRightHandFinger').innerText = "Right Thumb";
            //document.getElementById('spnRightHandFinger2').innerText = "Right Thumb";
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please scan your:<br /><h3>Right Thumb</h3>Please place your finger on the scanner as shown in the image to the left.</h4>";
            document.getElementById('rightHandImage').src = "resources/RightHandImageMapThumb.jpg";
            globalCurrentHandFinger = selectedElementID;
            //savelateralityCaptureSite("Right", "Thumb");
            break;
                    
    };
};
function moveToNextFinger() {  
    switch (globalCurrentHandFinger) {
        case 'selectLeftLittle':
            setLateralitySite('selectLeftThumb');
            savelateralityCaptureSite("Left", "Thumb");
            break;
        case 'selectLeftRing':
            setLateralitySite('selectLeftLittle');
            savelateralityCaptureSite("Left", "LittleFinger");
            break;
        case 'selectLeftMiddle':
            setLateralitySite('selectLeftRing');
            savelateralityCaptureSite("Left", "RingFinger");
            break;
        case 'selectLeftIndex':
            setLateralitySite('selectLeftMiddle');
            savelateralityCaptureSite("Left", "MiddleFinger");
            break;        
        case 'selectLeftThumb':
            alert('It appears you are physically incapable of providing a fingerprint from your left hand. Please click the button indicating this');         
            break;
        case 'selectRightLittle':
            setLateralitySite('selectRightThumb');
            savelateralityCaptureSite("Right", "Thumb");
            break;           
        case 'selectRightRing':
            setLateralitySite('selectRightLittle');
            savelateralityCaptureSite("Right", "LittleFinger");
            break;
        case 'selectRightMiddle':
            setLateralitySite('selectRightRing');
            savelateralityCaptureSite("Right", "RingFinger");
            break;
        case 'selectRightIndex':
            setLateralitySite('selectRightMiddle');
            savelateralityCaptureSite("Right", "MiddleFinger");
            break;        
        case 'selectRightThumb':
            alert('It appears you are physically incapable of providing a fingerprint from your right hand. Please click the button indicating this');
            break; 
    };
};
function showPleaseWait() {
    document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Please wait. Processing....</h4>";
    document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please wait. Processing....</h4>";
};
function showIdentity(localNoID) {
    $('#identityModal').modal({ 'backdrop': 'static' });
    globaLocalNoID = localNoID;
 };
function pageRefresh() {
    doesLeftBiometricExist = "";
    doesRightBiometricExist = "";
    globaLocalNoID = "";
    globalCurrentHandFinger = "";
    NoIDBridge.postResetForNewPatient();
    savelateralityCaptureSite("Left", "IndexFinger");
    location.reload();   
 };
function logNoLeftHandFingerPrint() {
    var newOrReturn = document.getElementById('NewOrReturnPatient');
    var selectedNewOrReturn = newOrReturn.options[newOrReturn.selectedIndex].value;
    globalCurrentHandFinger = 'selectRightIndex';
    if (selectedNewOrReturn == "return") {
        document.getElementById('clcikNoFingerRight').innerText = "Click Here to change the selected finger.";
    }
    document.getElementById('spnRightHandFinger').innerText = "Right Index Finger";
    //document.getElementById('spnRightHandFinger2').innerText = "Right Index Finger";
    document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Please scan your:<br /><h3>Right Index Finger</h3>Please place your finger on the scanner as shown in the image to the left.</h4>";
    document.getElementById('rightHandImage').src = "resources/RightHandImageMapIndexFinger.jpg";
    document.getElementById('leftHandScanNav').href = "#";
    document.getElementById('leftHandScanNav').title = "Left Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
    document.getElementById('consentNav').href = "#";
    document.getElementById('consentNav').title = "Consent Page No Longer Available. Click Restart Button if Required";
    document.getElementById('rightFingerprintBackButton').disabled = true;
    if (doesLeftBiometricExist != "yes") {
        NoIDBridge.postDoNotHaveValidBiometricButtonclick("Left");
        doesLeftBiometricExist = "no";
        if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
            //error, show user message
            alert("postLateralityCaptureSite Error " + NoIDBridge.errorDescription);
        }
    };
    //savelateralityCaptureSite("Right", "IndexFinger");
 };
function logNoRightHandFingerPrint() {
    if (doesRightBiometricExist != "yes") {
        NoIDBridge.postDoNotHaveValidBiometricButtonclick("Right");
        doesRightBiometricExist = "no";
        if (NoIDBridge.showExceptionModal == "yes") {
            document.getElementById('leftHandScanNav').href = "#";
            document.getElementById('leftHandScanNav').title = "Left Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
            document.getElementById('rightHandScanNav').href = "#";
            document.getElementById('rightHandScanNav').title = "Right Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
            document.getElementById('consentNav').href = "#";
            document.getElementById('consentNav').title = "Consent Page No Longer Available. Click Restart Button if Required";
            document.getElementById('rightFingerprintBackButton').disabled = true;
            document.getElementById('demographics1').disabled = true;
            showExceptionModal();
        }
        if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
            //error, show user message
            alert("logNoRightHandFingerPrint Error " + NoIDBridge.errorDescription);
        }
    };
};
function clickNoRightHandFingerPrint() {
    document.getElementById('clickNoRightHandFingerPrint').click();
};
function showExceptionModal() {
    //document.getElementById('clickNoRightHandFingerPrint').click();
    //showExceptionModal();
    /*document.getElementById('leftHandScanNav').href = "#";
    document.getElementById('leftHandScanNav').title = "Left Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
    document.getElementById('rightHandScanNav').href = "#";
    document.getElementById('rightHandScanNav').title = "Right Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
    document.getElementById('consentNav').href = "#";
    document.getElementById('consentNav').title = "Consent Page No Longer Available. Click Restart Button if Required";
    document.getElementById('rightFingerprintBackButton').disabled = true;
    document.getElementById('demographics1').disabled = true;
    document.getElementById("saveMissingBiometricInfo").classList.add('next-step');*/
    $('#biometricExceptionsModal').modal({ 'backdrop': 'static' });
};
function saveMissingBiometricInfo() {
    var exceptionReason = document.getElementById('exceptionMissingReason');
    var selectedExceptionReason = exceptionReason.options[exceptionReason.selectedIndex].text;
    var secretExAnswer1 = document.getElementById('secretAnswer1').value;
    var secretExAnswer2 = document.getElementById('secretAnswer2').value;

    NoIDBridge.postMissingBiometricInfo(selectedExceptionReason, secretExAnswer1, secretExAnswer2);    
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
        //error, show user message
        alert("logNoRightHandFingerPrint Error " + NoIDBridge.errorDescription);
    }

};
function savelateralityCaptureSite(laterality, captureSite) {
    NoIDBridge.postLateralityCaptureSite(laterality, captureSite);
    if (NoIDBridge.errorDescription != '' && NoIDBridge.errorDescription != null) {
       //error, show user message
        alert("postLateralityCaptureSite Error " + NoIDBridge.errorDescription);
    }
};
function showComplete(whichStep) {
    switch (whichStep) {
        case 'Left':
            document.getElementById('checkLeft').setAttribute('class', 'fa fa-check-square-o fa-5x fa-fw pull-right complete');
            document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Success!<br />Please click next to scan a finger<br />from your right hand</h4>";
            document.getElementById('leftFingerNextButton').disabled = false;
            document.getElementById('rightFingerprintBackButton').disabled = true;
            document.getElementById('clickNoLeftHandFingerPrint').disabled = true;
            document.getElementById('clcikNoFingerLeft').disabled = true;
            doesLeftBiometricExist = "yes";
            break;
        case 'Right':
            document.getElementById('checkRight').setAttribute('class', 'fa fa-check-square-o fa-5x fa-fw pull-left complete');
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Success!<br />Please click next.</h4>";
            document.getElementById('rightFingerNextButton').disabled = false;
            document.getElementById('demographics1').disabled = true;
            document.getElementById('clickNoRightHandFingerPrint').disabled = true;
            document.getElementById('clcikNoFingerRight').disabled = true;
            doesRightBiometricExist = "yes";
            break;
    };
};
function showFail(whichStep) {
    switch (whichStep) {
        case 'Left':
            //document.getElementById('checkLeft').setAttribute('class', 'fa fa-times fa-5x fa-fw pull-right incomplete');
            document.getElementById('checkLeft').setAttribute('class', 'fa fa-spinner fa-spin fa-5x fa-fw pull-right incomplete');
            document.getElementById('scanStatusMessageLeft').innerHTML = "<h4>Fingerprint scan attempt<br />was not successful.</h4><h3><strong>Please try again</strong></h3>";
            break;
        case 'Right':
            //document.getElementById('checkRight').setAttribute('class', 'fa fa-times fa-5x fa-fw pull-right complete');
            document.getElementById('checkRight').setAttribute('class', 'fa fa-spinner fa-spin fa-5x fa-fw pull-left incomplete');
            document.getElementById('scanStatusMessageRight').innerHTML = "<h4>Fingerprint scan attempt<br />was not successful.</h4><h3><strong>Please try again</strong></h3>";
            break;
    };
};
function wait(whichStep, result) {
    switch (result) {
        case 'success':
            setTimeout(function () {
                showComplete(whichStep);
            }, 5000);
            break;
        case 'fail':
            setTimeout(function () {
                showFail(whichStep);
            }, 5000);
            break;
    };
};
function showNewExistingModal() {
    showOverLayDiv();
    setTimeout(function () {
        $('#newReturnPatientModal').modal({ 'backdrop': 'static' });
    }, 500);
};
function showOverLayDiv() {
    document.getElementById("overlay").style.display = "block";
};
function hideOverLayDiv() {
    document.getElementById("overlay").style.display = "none";
};
function showExceptions() {
    document.getElementById('exceptions').setAttribute('class', 'tab-pane active');
    document.getElementById('step2').setAttribute('class', 'tab-pane');
};
function hideExceptions() {    
    document.getElementById('optionsRadios1').checked = true;
    document.getElementById('exceptions').setAttribute('class', 'tab-pane');
    document.getElementById('step2').setAttribute('class', 'tab-pane active');
};
function showFailure() {
    document.getElementById('step5').setAttribute('class', 'tab-pane active');
    document.getElementById('step4').setAttribute('class', 'tab-pane');
};
function confirmFailure() {
    document.getElementById('step6').setAttribute('class', 'tab-pane active');
    document.getElementById('step5').setAttribute('class', 'tab-pane');
};
function showPatient() {
    var x = document.getElementById("patientSelect").selectedIndex;
    //alert("Patient " + x.innerText);
    var y = document.getElementsByTagName("option")[x].value;
    setPatient(document.getElementsByTagName("option")[x].innerText);
    var pts = document.getElementsByClassName('patients');
    for (var j = 0; j < pts.length; j++) {
            pts[j].setAttribute('class', 'patients hidden');
    };
    document.getElementById(y).setAttribute('class', 'patients col-md-9');
};
function setPatient(patName) {
    document.getElementById('patientInfo').innerHTML = " <label>Name:</label>" + patName;
    document.getElementById('patientConfirm').innerText = patName + " has been positively identified and linked to your local NoID system.";
};
function reset() {
    document.getElementById('checkLeft').setAttribute('class', 'fa fa-spinner fa-spin fa-5x fa-fw pull-right incomplete');
    wait('left', 'fail');
};
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    day = checkTime(day);
    month = checkTime(month);
    document.getElementById('currentDateTime').innerHTML =
      //  today ;
    month + "/" + day + "/" + year + " " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
};
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};
// mark schroeder 20170627 
function moveToRightHandScan() {    
    alert("We were unable to get a fingerprint from your left hand. Let's try your right hand next. Please close this window and we will try the right hand.");
    document.getElementById('leftFingerNextButton').disabled = false;
    //mark below is not working. css seems to be overriding
    //document.getElementById('leftHandScanNav').disabled = true;
    document.getElementById('leftHandScanNav').href = "#";
    document.getElementById('leftHandScanNav').title = "Left Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";     
    document.getElementById('consentNav').href = "#";
    document.getElementById('consentNav').title = "Consent Page No Longer Available. Click Restart Button if Required";  
    document.getElementById('leftFingerNextButton').click();
};
function disablePreviousNavMenuItems() {
    document.getElementById('leftHandScanNav').href = "#";
    document.getElementById('leftHandScanNav').title = "Left Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";
    document.getElementById('consentNav').href = "#";
    document.getElementById('consentNav').title = "Consent Page No Longer Available. Click Restart Button if Required";  
    document.getElementById('rightHandScanNav').href = "#";
    document.getElementById('rightHandScanNav').title = "Right Hand Fingerprint Scan No Longer Available. Click Restart Button if Required";  
    document.getElementById('demographics1').disabled = true;
}
 
/*function savePatientTest() {
    var language = document.getElementById('selectedLanguage');
    var languageSelected = language.options[language.selectedIndex].text;
    var firstName = document.getElementById("FirstName").value;
    var middleName = document.getElementById("MiddleName").value;
    var lastName = document.getElementById("LastName").value;
    var birthYear =  document.getElementById('BirthYear');
    var selectedBirthYear = birthYear.options[birthYear.selectedIndex].text;
	var birthMonth =  document.getElementById('BirthMonth');
    var selectedBirthMonth = birthMonth.options[birthMonth.selectedIndex].text;
	var birthDay =  document.getElementById('BirthDay');
    var selectedBirthDay = birthDay.options[birthDay.selectedIndex].text;
	if (document.getElementById("GenderMale").checked) {
		var gender = document.getElementById("GenderMale").value;
	};
	if (document.getElementById("GenderFemale").checked) {
		var gender = document.getElementById("GenderFemale").value;
	};
	var streetAddress = document.getElementById("StreetAddress").value;
	var streetAddress2 = document.getElementById("StreetAddress2").value;
	var city = document.getElementById("City").value;
	var state = document.getElementById("State").value;
	var postalCode = document.getElementById("ZipCode").value;
	var phoneCell = document.getElementById("PhoneNumber").value;
	var emailAddress = document.getElementById("EmailAddress").value;
	//may not need below for profile, but will need eventually
	var newOrReturnPatient = document.getElementById('NewOrReturnPatient');
    var selectedNewOrReturnPatient = newOrReturnPatient.options[newOrReturnPatient.selectedIndex].value;
	var multipleBirthPregnancy = document.getElementById('FromMultipleBirthPregnancy');
    var selectedMultipleBirthPregnancy = multipleBirthPregnancy.options[multipleBirthPregnancy.selectedIndex].value;
	var genderChanged = document.getElementById('GenderChanged');
    var selectedGenderChanged = genderChanged.options[genderChanged.selectedIndex].value;
	var patientHub = document.getElementById('PatientHub');
	var selectedPatientHub = patientHub.options[patientHub.selectedIndex].value;
	var portalPassword = document.getElementById("PortalPassword").value;
	
	    alert("Language = " + languageSelected 
        + "\nFirst Name = " + firstName 
        + "\nMiddle Name = " +  middleName 
        + "\nLast Name = " + lastName
        + "\nBirth Year = " + selectedBirthYear
		+ "\nBirth Month = " + selectedBirthMonth
		+ "\nBirth Day = " + selectedBirthDay
		+ "\nGender = " + gender
		+ "\nStreetAddress = " + streetAddress
		+ "\nStreetAddress2 = " + streetAddress2
		+ "\nCity = " + city
		+ "\nState = " + state
		+ "\nPostalCode = " + postalCode
		+ "\nPhoneCell = " + phoneCell
		+ "\nEmail = " + emailAddress
		+ "\nNew or Return Patient = " + selectedNewOrReturnPatient
		+ "\nFrom Multiple Birth Pregnancy = " + selectedMultipleBirthPregnancy
		+ "\nGender Changed = " + selectedGenderChanged
		+ "\nPatient Hub = " + selectedPatientHub
		+ "\nPortal Password = " + portalPassword);
    
   
};*/
