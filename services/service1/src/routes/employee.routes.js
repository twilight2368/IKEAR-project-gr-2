const express = require("express");
const {
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});


router.get("/employee/:id", getEmployee);

router.get("/employees", getEmployees);

router.put("/update-employee/:id", updateEmployee);

router.delete("/delete-employee/:id", deleteEmployee);

module.exports = router;
