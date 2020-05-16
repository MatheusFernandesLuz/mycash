import React from "react";

import Card from "../CardBase";
import Transaction from "../Transaction";

export default function CardTransactions() {
  return (
    <Card
      title="Transações"
      buttonProps={{ destiny: "Transacoes", title: "Ver todas" }}
      body={
        <Transaction
          description="Fatura Claro"
          category="TV / Internet / Telefone"
          value="R$ 50,50"
          date="15/05/2020"
        ></Transaction>
      }
    />
  );
}
