pragma solidity ^0.5.1;

contract Product{
    
    //Defining Product Structure
    struct productInfo{
        string name;
        uint256 price;
    }
    
    //Creating a map of id -> productInfo
    mapping(uint256 => productInfo) products;
    uint256[] public productIds;

    function registerProduct(string memory name, uint256 price) public {
        productInfo storage newProduct = products[productIds.length + 1];
        newProduct.name = name;
        newProduct.price = price;
        productIds.push(productIds.length + 1);
    }
    
    function getProduct(uint256 id) public view returns (string memory){
        productInfo storage p = products[id];
        return (p.name);
    }
    
    function removeProduct(uint256 id) public{
        delete products[id];
    }
}