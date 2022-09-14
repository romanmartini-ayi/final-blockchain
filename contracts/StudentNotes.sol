// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract StudentNote {
  address public owner;
  mapping(bytes32 => uint256) StudentNotes;

  constructor() {
    owner = msg.sender;
  }

  function evaluate(string memory _studentId, uint256 _note) public onlyOwner(msg.sender) {
    bytes32 hash_studentId = keccak256(abi.encodePacked(_studentId));
    StudentNotes[hash_studentId] = _note;
  }

  modifier onlyOwner(address _address) {
    require(_address == owner, "unauthorized.");
    _;
  }

  function seeNotes(string memory _studentId) public view returns (uint256) {
    bytes32 hash_studentId = keccak256(abi.encodePacked(_studentId));
    return StudentNotes[hash_studentId];
  }
}
