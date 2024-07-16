const updateUserHandler = async (req, res) => {
  console.log(req.params);
  res.json({ msg: "updating user" });
};

module.exports = updateUserHandler;
