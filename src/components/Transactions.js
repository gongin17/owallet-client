import React , { useState } from "react";
import {memo} from "react"
import '../css/table.css';
import { useGetTransactionsQuery } from "./features/transactions/transactionsSlice";


const Transactions = () => {
  const {
    data: tr,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTransactionsQuery();

  let content;

  if (isLoading) {
    content = <>Loading...</>;
  } else if (isSuccess) {
    const { ids, entities } = tr;
    content = (
      <div className="content">
        <table className="custom-table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">type</th>
              <th scope="col">amount</th>
              <th scope="col">created at </th>
            </tr>
          </thead>

          <tbody>
            {ids.map((id) => (
              <tr key={entities[id].id}>
                <td>{entities[id].id}</td>
                <td>{entities[id].type}</td>
                <td>{entities[id].amount}</td>
                <td>{entities[id].created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (isError) {
    content = <>{error}</>;
  }

  return content;
};

const memoizedTransactions=memo(Transactions)

export default memoizedTransactions;
