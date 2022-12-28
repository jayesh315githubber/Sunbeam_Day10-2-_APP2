
const person = {}

const submitData = (e) => {

    console.log('form submitted.')
    console.log(e);
    // e.target => form
    // e.target.elements => form child elements
    // e.target.elements.personName => input elelment having name = 'personName'
    // e.target.elements.personName => user's input in personName input box

    const personName = e.target.elements.personName.value
    const address = e.target.elements.address.value
    const phone = e.target.elements.phone.value
    const email = e.target.elements.email.value

    console.log(`person Name ${personName}`);
    console.log(`address Name ${address}`);
    console.log(`phone Name ${phone}`);
    console.log(`email Name ${email}`);

    person.name = personName
    person.address = address
    person.phone = phone
    person.email = email

    // prevent defult submission
    e.preventDefault()
    render()
}

const render = () => {

    const template = (
        <div>
            <h3>App1</h3>

            <form onSubmit={submitData}>
                <div>
                    name : <input type="text" name="personName"></input>
                </div>

                <div>
                    address : <input type="text" name="address"></input>
                </div>

                <div>
                    phone : <input type="text" name="phone"></input>
                </div>

                <div>
                    email : <input type="text" name="email"></input>
                </div>

                <button type="sumbit">Sumbit</button>
            </form>

            <hr />
            <div>
                <h5>Person</h5>
                {person.name && <div>name : {person.name}</div>}
                {person.address && <div>address : {person.address} </div>}
                {person.phone && <div>phone : {person.phone}</div>}
                {person.email && <div>email : {person.email} </div>}
            </div>
        </div>

    )

    ReactDOM.render(template, document.getElementById('app'))
}

render()