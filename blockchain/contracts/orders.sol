pragma solidity ^0.5.1;


contract Order {
    struct orderDetails {
        uint256 pid;
        uint256 quantity;
        address from;
        address to;
        uint256 rating;
        uint256 amount;
        uint256 status;
    }
    mapping(uint256 => orderDetails) orders;
    uint256[] orderIds;

    function placeOrder(
        uint256 pid,
        uint256 quantity,
        address from,
        address to,
        uint256 amount
    ) public {
        uint256 id = orderIds.length + 1;
        orderDetails storage details = orders[id];

        details.pid = pid;
        details.quantity = quantity;
        details.from = from;
        details.to = to;
        details.amount = amount;
        details.status = 1;
        details.rating = 2;

        orderIds.push(id);
    }

    function viewOrder(uint256 ID)
        public
        view
        returns (uint256, uint256, address, address, uint256, uint256, uint256)
    {
        orderDetails storage od = orders[ID];
        return (
            od.pid,
            od.quantity,
            od.from,
            od.to,
            od.rating,
            od.amount,
            od.status
        );
    }

    function updateStatus(uint256 id, uint256 status) public {
        orders[id].status = status;
    }

    function rate(uint256 id, uint256 rating) public {
        orders[id].rating = rating;
    }

    function cancelOrder(uint256 id) public {
        orders[id].status = 0;
    }
}
