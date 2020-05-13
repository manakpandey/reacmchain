pragma solidity ^0.4.24;

contract Product{
    
    //Defining Product Structure
    struct productInfo{
        string name;
    }
    
    //Creating a map of id -> productInfo
    mapping(uint256 => productInfo) products;
    uint256[] public productIds;

    function registerProduct(string memory name, uint256 id) public {
        productInfo storage newProduct = products[id];
        newProduct.name = name;
        productIds.push(id);
    }
    
    function getProduct(uint256 id) public view returns (string memory){
        productInfo storage p = products[id];
        return (p.name);
    }
    
    function removeProduct(uint256 id) public{
        delete products[id];
    }
}