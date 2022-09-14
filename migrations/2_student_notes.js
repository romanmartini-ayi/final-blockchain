const StudentNote = artifacts.require("StudentNote");

module.exports = function (deployer) {
  deployer.deploy(StudentNote);
};
