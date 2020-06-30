const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const {
  userById,
  read,
  update,
  purchaseHistory,
} = require("../controllers/user");

router.get("/secret", requireSignin, (req, res) => {
  res.json({
    user: "got here yay",
  });
});

router.get("/:userId", requireSignin, isAuth, read);
router.put("/", isAuth, update);
router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);

router.param("userId", userById);

module.exports = router;