// import "../App.css";

function Withdraw() {
  return (
    <div>
      <form>
        <h1>WITHDRAW</h1>
        <label>
          AMOUNT:
          <input type="number" name="withdraw"/>
        </label>
        <label>
          ACCOUNT:
          <select name="accounts">
            <option>Account 1</option>
            <option>Account 2</option>
            <option>Account 3</option>
          </select>
        </label>
        <input className="submit-btn" type="submit" value="SUBMIT" disabled/>
      </form>
    </div>
  );
}

export default Withdraw;