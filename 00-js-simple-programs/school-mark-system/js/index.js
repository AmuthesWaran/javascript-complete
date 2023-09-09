
axios.get('http://localhost:3000/students')
    .then((res) => {
        allStudents.push(...res.data)
        console.log(res.data)
    })

const allStudents = []



const calc = () => {
    // event.preventDefault()



    if (!vaidateInputs()) {

        console.log('Invalid Inputs');
        document.getElementById('successMsg').innerText = ""


    } else {
        document.getElementById('socErrorMsg').innerText = ""
        document.getElementById('sciErrorMsg').innerText = ""
        document.getElementById('mathErrorMsg').innerText = ""
        document.getElementById('engErrorMsg').innerText = ""
        document.getElementById('lanErrorMsg').innerText = ""
        document.getElementById('emailErrorMsg').innerText = ""
        document.getElementById('fullnameErrorMsg').innerText = ""

        let studentData = {
            'id': parseInt(document.getElementById('sid').value),
            'fullname': document.getElementById('fullname').value.trim(),
            'email': document.getElementById('emailAddress').value.trim(),
            'dateOfBirth': document.getElementById('dateOfBirth').value,
            'marks': {
                'language': parseInt(document.getElementById('language').value),
                'english': parseInt(document.getElementById('english').value),
                'math': parseInt(document.getElementById('math').value),
                'science': parseInt(document.getElementById('science').value),
                'social': parseInt(document.getElementById('social').value)
            }
        }

        axios.post(`http://localhost:3000/students`, studentData)
            .then((res) => console.log(res))
            .catch((err) => {
                if (err.message == `Network Error`) {
                    document.getElementById('failMsg').innerText = "Please Connect to JSON Server"

                }
                // else if ()
            })
        // allStudents.push(studentData)
        document.getElementById('successMsg').innerText = "Successfully Updated"


        console.log(studentData);

        document.getElementById('sid').value = ""
        document.getElementById('fullname').value = ""
        document.getElementById('emailAddress').value = ""
        document.getElementById('dateOfBirth').value = ""
        document.getElementById('language').value = ""
        document.getElementById('english').value = ""
        document.getElementById('math').value = ""
        document.getElementById('science').value = ""
        document.getElementById('social').value = ""
        // refresh()

    }

}

const refresh = () => {


    let tableRender = document.getElementById('tableRender')

    // while (tableRender.hasChildNodes()) {
    //     tableRender.firstChild.remove()
    // }

    tableRender.innerHTML = `
    <tr>
    <th>Student ID</th>
    <th>Student Name</th>
    <th>Lang</th>
    <th>Eng</th>
    <th>Math</th>
    <th>Sci</th>
    <th>Soc</th>
    <th>Total</th>
    <th>Percentage</th>
    <th>Result</th>
  </tr>
    `


    for (let i = 0; i < allStudents.length; i++) {

        let row = document.createElement('tr')

        if (calcResult(allStudents[i].marks) === 'Fail') {

            row.innerHTML = `
        <tr>
            <td bgcolor="red">${allStudents[i].id}</td>
            <td bgcolor="red">${allStudents[i].fullname}</td>
            <td bgcolor="red">${allStudents[i].marks.language}</td>
            <td bgcolor="red">${allStudents[i].marks.english}</td>
            <td bgcolor="red">${allStudents[i].marks.math}</td>
            <td bgcolor="red">${allStudents[i].marks.science}</td>
            <td bgcolor="red">${allStudents[i].marks.social}</td>
            <td bgcolor="red">${calculateTotal(allStudents[i].marks)}</td>
            <td bgcolor="red">${average(allStudents[i].marks)}</td>
            <td bgcolor="red">${calcResult(allStudents[i].marks)}</td>
        </tr>
        `
            tableRender.appendChild(row)
        }
        else {

            row.innerHTML = `
        <tr>
            <td>${allStudents[i].id}</td>
            <td>${allStudents[i].fullname}</td>
            <td>${allStudents[i].marks.language}</td>
            <td>${allStudents[i].marks.english}</td>
            <td>${allStudents[i].marks.math}</td>
            <td>${allStudents[i].marks.science}</td>
            <td>${allStudents[i].marks.social}</td>
            <td>${calculateTotal(allStudents[i].marks)}</td>
            <td>${average(allStudents[i].marks)}</td>
            <td>${calcResult(allStudents[i].marks)}</td>
        </tr>
        `
            tableRender.appendChild(row)
        }
    }



}


const del = () => {

}

const vaidateInputs = () => {

    let fullnameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/
    let emailIdRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // Marks should fall between 0 - 100
    let markRegex = /^(?:100|[0-9]{1,2})$/

    console.log(!fullnameRegex.test(document.getElementById('fullname').value));

    if (!fullnameRegex.test(document.getElementById('fullname').value.trim())) {
        document.getElementById('fullnameErrorMsg').innerText = "Do not use Special characters or numbers"

    }
    else {
        document.getElementById('fullnameErrorMsg').innerText = ""
    }

    if (!emailIdRegex.test(document.getElementById('emailAddress').value.trim())) {
        document.getElementById('emailErrorMsg').innerText = "Please enter a valid emailId"
    }
    else {
        document.getElementById('emailErrorMsg').innerText = ""
    }

    if (!markRegex.test(document.getElementById('language').value)) {
        document.getElementById('lanErrorMsg').innerText = "Please enter language marks between 0 - 100"
    }
    else {
        document.getElementById('lanErrorMsg').innerText = ""
    }

    if (!markRegex.test(document.getElementById('english').value)) {
        document.getElementById('engErrorMsg').innerText = "Please enter english marks between 0 - 100"

    }
    else {
        document.getElementById('engErrorMsg').innerText = ""
    }

    if (!markRegex.test(document.getElementById('math').value)) {
        document.getElementById('mathErrorMsg').innerText = "Please enter math marks between 0 - 100"
    }
    else {
        document.getElementById('mathErrorMsg').innerText = ""
    }

    if (!markRegex.test(document.getElementById('science').value)) {
        document.getElementById('sciErrorMsg').innerText = "Please enter science marks between 0 - 100"
    }
    else {
        document.getElementById('sciErrorMsg').innerText = ""
    }

    if (!markRegex.test(document.getElementById('social').value)) {
        document.getElementById('socErrorMsg').innerText = "Please enter social marks between 0 - 100"
    }
    else {
        document.getElementById('socErrorMsg').innerText = ""
    }

    if (
        fullnameRegex.test(document.getElementById('fullname').value.trim()) &&
        emailIdRegex.test(document.getElementById('emailAddress').value.trim()) &&
        markRegex.test(document.getElementById('language').value) &&
        markRegex.test(document.getElementById('english').value) &&
        markRegex.test(document.getElementById('math').value) &&
        markRegex.test(document.getElementById('science').value) &&
        markRegex.test(document.getElementById('social').value)
    ) {
        console.log('check if');
        return true


    } else {

        console.log('check else');
        return false
    }

}

const calculateTotal = (marks) => {

    return marks.language + marks.english + marks.math + marks.science + marks.social

}

const average = (marks) => {
    return (marks.language + marks.english + marks.math + marks.science + marks.social) / 5
}

const calcResult = (marks) => {

    const passMark = 35

    if (marks.language >= passMark && marks.english >= passMark && marks.math >= passMark && marks.science >= passMark && marks.social >= passMark)
        return "Pass"
    else
        return "Fail"
}