// import "../../App.css";

function CreateAcct() {
  return (
    <div>
      <form>
        <h1>Create Account</h1>
        <label>
          LABEL:
          <input type="text" name="name"/>
        </label>
        <label>
          INITIAL DEPOSIT:
          <input type="number" name="email"/>
        </label>
        <input className="submit-btn" type="submit" value="SUBMIT" disabled/>
      </form>
    </div>
  );
}

export default CreateAcct;