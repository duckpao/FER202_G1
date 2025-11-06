import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Row, Col } from "react-bootstrap";

export default function SalesStatistics() {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/orders").then((res) => setOrders(res.data));
    axios.get("http://localhost:9999/menu").then((res) => setMenu(res.data));
  }, []);

  useEffect(() => {
    const paidOrders = orders.filter((o) => o.status == "checked");

    const productSales = {};

    paidOrders.forEach((order) => {
      order.items.forEach((item) => {
        if (!productSales[item.menuId]) {
          productSales[item.menuId] = {
            quantity: 0,
          };
        }
        productSales[item.menuId].quantity += item.quantity;
      });
    });

    // Tạo mảng thống kê với thông tin từ menu
    const stats = Object.entries(productSales).map(([menuId, data]) => {
      const product = menu.find((m) => m.id == parseInt(menuId));
      return {
        id: menuId,
        name: product?.name || "Unknown",
        price: product?.price || 0,
        quantity: data.quantity,
        total: data.quantity * (product?.price || 0),
      };
    });

    setStatistics(stats);
  }, [orders, menu]);

  const totalRevenue = statistics.reduce((sum, item) => sum + item.total, 0);

  return (
    <Container className="mt-4">

    </Container>
  );
}