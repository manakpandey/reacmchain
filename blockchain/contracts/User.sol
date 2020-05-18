pragma solidity ^0.5.10;


contract User {
    struct userDetails {
        string name;
        uint256 userType;
        uint256 phno;
    }
    mapping(address => userDetails) users;
    address[] userAddresses;

    function addUser(
        address uAddress,
        uint256 uType,
        uint256 uPhno,
        string memory uName
    ) public {
        if (!checkIfUserExists(uAddress)) {
            userDetails storage details = users[uAddress];

            details.userType = uType;
            details.name = uName;
            details.phno = uPhno;
            userAddresses.push(uAddress);
        }
    }

    function checkIfUserExists(address uAddress) public view returns (bool) {
        for (uint256 i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == uAddress) return true;
        }
        return false;
    }

    function updateUser(address uAddress, string memory uName, uint uPhno) public {
        if (checkIfUserExists(uAddress)) {
            userDetails storage details = users[uAddress];

            details.name = uName;
            details.phno = uPhno;
        }
    }

    function getUser(address uAddress)
        public
        view
        returns (string memory, uint256, uint256)
    {
        userDetails storage details = users[uAddress];

        return (details.name, details.userType, details.phno);
    }

    function getTotalUsers() public view returns (uint256) {
        return userAddresses.length;
    }

    function getUserByIndex(uint256 index)
        public
        view
        returns (string memory, uint256, uint256, address)
    {
        userDetails storage details = users[userAddresses[index]];

        return (
            details.name,
            details.userType,
            details.phno,
            userAddresses[index]
        );
    }

    function isAdmin() public view returns (bool) {
        return users[msg.sender].userType == 1;
    }

    function isFactory() public view returns (bool) {
        return users[msg.sender].userType == 2;
    }

    function isSupplier() public view returns (bool) {
        return users[msg.sender].userType == 3;
    }

    function isDealer() public view returns (bool) {
        return users[msg.sender].userType == 4;
    }
}
