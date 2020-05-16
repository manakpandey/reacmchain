pragma solidity ^0.5.1;


contract Order {
    struct orderDetails {
        uint id;
        uint pid;
        uint quantity;
        address from;
        address to;
        uint rating;
        uint amount;
        uint status;
    }
    mapping(uint => orderDetails) orders;
    uint[] public orderIds;

    function placeOrder(
        //uint id,
        uint pid,
        uint quantity,
        address  from,
        address  to,
        uint amount,
        uint status
    ) public {
        uint id= orderIds.length +1;
        orderDetails storage details = orders[id];

        details.id = id;
        details.pid = pid;
        details.quantity = quantity;
        details.from = from;
        details.to = to;
        details.amount = amount;
        details.status = status;

        orderIds.push(id) - 1;
    }

    function viewOrder(uint ID)
        public
        view
        returns (
            uint,
            uint,
            uint,
            address,
            address,
            uint,
            uint,
            uint
        )
    {
        orderDetails storage od = orders[ID];
        return (
            od.id,
            od.pid,
            od.quantity,
            od.from,
            od.to,
            od.rating,
            od.amount,
            od.status
        );
    }

    function updateStatus(uint id, uint status) public {
        orders[id].status = status;
    }

    function rate(uint id, uint rating) public {
        orders[id].rating = rating;
    }

    function deleteOrder(uint id) public{
        orders[id].status = 0;
    }
}
