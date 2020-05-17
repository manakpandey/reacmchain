pragma solidity ^0.5.10;

contract User{

    struct userDetails{
        string name;
        uint userType;
        uint phno;
    }
    mapping(address => userDetails) users;
    address[] userAddresses;

    function addUser(address uAddress, uint uType, uint uPhno, string memory uName) public returns (uint)
    {
        if(checkIfUserExists(uAddress)){
            return 0;
        }
        userDetails storage details = users[uAddress];

        details.userType = uType;
        details.name = uName;
        details.phno = uPhno;
        userAddresses.push(uAddress);

        return details.userType;
    }

    function checkIfUserExists(address uAddress) public view returns (bool) {
        for(uint i=0;i<userAddresses.length; i++){
            if(userAddresses[i] == uAddress)
                return true;
        }
        return false;
    }

    function getUser(address uAddress) public view returns (string memory, uint, uint){
        userDetails storage details = users[uAddress];

        return (
            details.name,
            details.userType,
            details.phno
        );
    }

    function getTotalUsers() public view returns (uint){
        return userAddresses.length;
    }

    function getUserByIndex(uint index) public view returns (string memory, uint, uint, address){
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