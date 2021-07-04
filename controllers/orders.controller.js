const { Order } = require("../models");
const router = require("../routers/orders.router");

class Whis {

    async createOrder(body) {

        return Order.create(body);
    }

    async show_order_by_id(id) {

        return Order.findByPk(id);
    }

    async findAllOrders() {

        return Order.findAll();
    }

    async userOder(userId) {

        return Order.findAll({ where: {userId: userId}})
    }

    async modifyOrder( data ) {

        return Order.update(
            //DAtos que cambiamos
            // movieId: data.movieId,
            {  rentalDate: data.rentalDate, returnDate: data.returnDate },
            //Donde
            { where: {id: data.orderId}},
            // {movieId: data.movieId},
            //Donde...
            // {where: {id: data.id}}

        )
    }

    async removeOrder(data) {

        return Order.destroy( {where: {id: data.id}});
    }
}


let ordersController = new Whis();
module.exports = ordersController;