
// click event handler for the button
const clickHandler = () =>{
    alert('button clicked')
}
const template = 
<div>
    <h3>App1</h3>
    <button onClick={clickHandler}>Click here</button>
</div>

ReactDOM.render(template,document.getElementById('app'))