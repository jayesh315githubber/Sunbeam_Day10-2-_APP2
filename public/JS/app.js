"use strict";

var person = {};

var submitData = function submitData(e) {

    console.log('form submitted.');
    console.log(e);
    // e.target => form
    // e.target.elements => form child elements
    // e.target.elements.personName => input elelment having name = 'personName'
    // e.target.elements.personName => user's input in personName input box

    var personName = e.target.elements.personName.value;
    var address = e.target.elements.address.value;
    var phone = e.target.elements.phone.value;
    var email = e.target.elements.email.value;

    console.log("person Name " + personName);
    console.log("address Name " + address);
    console.log("phone Name " + phone);
    console.log("email Name " + email);

    person.name = personName;
    person.address = address;
    person.phone = phone;
    person.email = email;

    // prevent defult submission
    e.preventDefault();
    render();
};

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "App1"
        ),
        React.createElement(
            "form",
            { onSubmit: submitData },
            React.createElement(
                "div",
                null,
                "name : ",
                React.createElement("input", { type: "text", name: "personName" })
            ),
            React.createElement(
                "div",
                null,
                "address : ",
                React.createElement("input", { type: "text", name: "address" })
            ),
            React.createElement(
                "div",
                null,
                "phone : ",
                React.createElement("input", { type: "text", name: "phone" })
            ),
            React.createElement(
                "div",
                null,
                "email : ",
                React.createElement("input", { type: "text", name: "email" })
            ),
            React.createElement(
                "button",
                { type: "sumbit" },
                "Sumbit"
            )
        ),
        React.createElement("hr", null),
        React.createElement(
            "div",
            null,
            React.createElement(
                "h5",
                null,
                "Person"
            ),
            person.name && React.createElement(
                "div",
                null,
                "name : ",
                person.name
            ),
            person.address && React.createElement(
                "div",
                null,
                "address : ",
                person.address,
                " "
            ),
            person.phone && React.createElement(
                "div",
                null,
                "phone : ",
                person.phone
            ),
            person.email && React.createElement(
                "div",
                null,
                "email : ",
                person.email,
                " "
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
