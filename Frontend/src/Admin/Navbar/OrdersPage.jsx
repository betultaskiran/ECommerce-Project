/*import { Card, Text, Group, ActionIcon } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import styles from "./OrdersCard.module.css";
import { useState } from "react";

export function OrdersCard({ order }) {
  return (
    <Card withBorder radius="md" className={styles.card}>
      { Order Details Section }
      <div className={styles.detailsSection}>
        { Order ID }
        <Text fz="lg" mt="md">
          Order ID: {order._id}
        </Text>

        { Order Date }
        <Text fz="sm" color="dimmed" mt="xs">
          Date: {new Date(order.date).toLocaleDateString()}
        </Text>

        { Order Items Count }
        <Text fz="sm" color="dimmed" mt="xs">
          Items: {order.items.length}
        </Text>

        { Total Amount }
        <Text fz="xl" fw={700} mt="sm">
          Total: ${order.totalAmount.toFixed(2)}
        </Text>
      </div>

      {View Details Button }
      <Group position="apart" mt="md">
        <ActionIcon className={styles.viewDetailsIcon} size="lg" radius="xl">
          <IconEye size={24} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}*/
