const { Router } = require("express");
const { account_post, account_deposit, account_withdraw } = require("../controllers/account.controllers");

const router = Router();

router.post("/account/open", account_post);

router.post("/account/deposit", account_deposit);

router.post("/account/withdraw", account_withdraw);

module.exports = router;