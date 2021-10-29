// import "../App.css";

function Deposit() {
  return (
    <div>
      <form>
        <h1>DEPOSIT</h1>
        <label>
          AMOUNT:
          <input type="number" name="withdraw"/>
        </label>
        <label>
          ACCOUNT:
          <select name="accounts">
            <option className="default-option">select</option>
            <option>Account 2</option>
            <option>Account 3</option>
          </select>
        </label>
        <input className="submit-btn" type="submit" value="SUBMIT" disabled/>
      </form>
    </div>
  );
}

export default Deposit;