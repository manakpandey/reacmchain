pragma solidity ^0.5.1;

contract User{

    struct userDetails{
        uint userType;
    }
    mapping(address => userDetails) users;
    address[] userAddresses;

    function addUser(address uAddress, uint uType) public returns (uint)
    {
        for(uint i=0;i<userAddresses.length; i++){
            if(userAddresses[i] == uAddress)
                return 0;
        }
        userDetails storage details = users[uAddress];

        details.userType = uType;
        userAddresses.push(uAddress);

        return details.userType;
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