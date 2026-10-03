const { insertRow } = require("../lib/database");

const createContact = async (req, res) => {
  try {
    const contact = await insertRow("contacts", req.body);

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit message",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
};