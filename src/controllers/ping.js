const responsePing = async (req, res) => {
  res.json("Ok servidor funcionando");
};

module.exports = {
  responsePing,
};
