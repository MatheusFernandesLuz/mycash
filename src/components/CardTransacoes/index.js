import React from "react";

import Card from "../CardBase";
import Transaction from "../Transaction";

const data = [
  {
    id: 1,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
  {
    id: 2,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
  {
    id: 3,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
  {
    id: 4,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
  {
    id: 5,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
  {
    id: 6,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
  {
    id: 7,
    description: "Fatura Claro",
    category: "TV / Internet / Telefone",
    value: "R$ 50,50",
    date: "15/05/2020",
  },
];

/** Esta função deverá buscar no banco as últimas cinco despesas. */
function latestSpending() {
  return data.filter((item) => item.id <= 5);
}

export default function CardTransactions({ style }) {
  return (
    <Card
      style={style}
      title="Últimas transações"
      buttonProps={{ destiny: "Transacoes", title: "Ver todas" }}
      body={latestSpending().map((item) => {
        return (
          <Transaction
            key={item.id}
            description={item.description}
            category={item.category}
            value={item.value}
            date={item.date}
          />
        );
      })}
    />
  );
}
