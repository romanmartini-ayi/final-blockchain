// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./Owner.sol";

contract StudentNote is Owner {
  
  mapping(bytes32 => uint256) StudentNotes;

  function evaluate(string memory _studentId, uint256 _note) public isOwner() {
    bytes32 hash_studentId = keccak256(abi.encodePacked(_studentId));
    StudentNotes[hash_studentId] = _note;
  }

  function seeNotes(string memory _studentId) public view returns (uint256) {
    bytes32 hash_studentId = keccak256(abi.encodePacked(_studentId));
    return StudentNotes[hash_studentId];
  }
}