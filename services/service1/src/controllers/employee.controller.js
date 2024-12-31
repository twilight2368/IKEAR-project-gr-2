const EmployeeModel = require("../models/schema/Employee");

const getEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await EmployeeModel.findById(id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
        data: null,
      });
    }

    res.json({
      message: "Employee found",
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};

const getEmployees = async (req, res, next) => {
  try {
    const employees = await EmployeeModel.find();

    if (!employees || employees.length == 0) {
      return res.status(404).json({
        message: "Employees not found",
        data: [],
      });
    }

    res.json({
      message: "Employees found",
      data: employees,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { store, name, phone, email, role } = req.body;

    await EmployeeModel.findByIdAndUpdate(id, {
      store: store,
      name: name,
      phone: phone,
      email: email,
      role: role,
    });

    const newEmployeeInfo = await EmployeeModel.findById(id);

    res.json({
      message: "Employee update successful",
      data: newEmployeeInfo,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    await EmployeeModel.findByIdAndDelete(id);

    res.json({
      message: "Delete employee successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};
