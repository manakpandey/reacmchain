pragma solidity ^0.5.1;


contract Order {
    struct orderDetails {
        uint256 id;
        uint256 pid;
        uint256 quantity;
        string from;
        string to;
        uint256 rating;
        uint256 amount;
        string status;
    }
    mapping(uint256 => orderDetails) orders;
    uint256[] public orderIds;

    function placeOrder(
        uint256 id,
        uint256 pid,
        uint256 quantity,
        string memory from,
        string memory to,
        uint256 amount,
        string memory status
    ) public {
        orderDetails storage details = orders[id];

        details.pid = pid;
        details.quantity = quantity;
        details.from = from;
        details.to = to;
        details.amount = amount;
        details.status = status;

        orderIds.push(id) - 1;
    }

    function viewOrder(uint256 ID)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            string memory,
            string memory,
            uint256,
            uint256,
            string memory
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

    function updateStatus(uint256 id, string memory status) public {
        orders[id].status = status;
    }

    function rate(uint256 id, uint256 rating) public {
        orders[id].rating = rating;
    }
}