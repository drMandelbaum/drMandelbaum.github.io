// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;

contract Box {

    struct DataHolder {
        address owner;
        string data;
    }

    mapping(string => DataHolder) public dataMap;

    function save(string memory key, string memory data) public {
        if (dataMap[key].owner == 0x0000000000000000000000000000000000000000 || dataMap[key].owner == msg.sender) {
            dataMap[key] = DataHolder(msg.sender, data);
        }
    }

    function finalize() public {
        selfdestruct(msg.sender);
    }
}

