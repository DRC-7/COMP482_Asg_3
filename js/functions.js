//Create Account Button
document.querySelector('#createAccount').addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e)

    let firstName = e.target.form[0].value;
    localStorage.setItem('FirstName', firstName);

    let lastName = e.target.form[1].value;
    localStorage.setItem('LastName', lastName);

    let email = e.target.form[2].value;
    localStorage.setItem('Email', email);

    let password = e.target.form[3].value;
    localStorage.setItem('Password', password);

    let address = e.target.form[4].value;
    localStorage.setItem('Address', address);

    let city = e.target.form[5].value;
    localStorage.setItem('City', city);

    let province = e.target.form[6].value;
    localStorage.setItem('Province', province);

    let postalcode = e.target.form[7].value;
    localStorage.setItem('PostalCode', postalcode);

    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
    console.log(address)
    console.log(city)
    console.log(province)
    console.log(postalcode)


});
