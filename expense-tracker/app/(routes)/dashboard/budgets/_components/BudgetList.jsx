"use client";
import React, { useEffect, useState } from 'react';
import CreateBudget from './CreateBudget';
import { db } from '@/utils/dbConfig';
import { sql, eq } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from "@clerk/nextjs";
import BudgetItem from './BudgetItem';

function BudgetList() {
  const [budgetList, setBudgetList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const getBudgetList = async () => {
      const result = await db.select({
        id: Budgets.id,        // Select specific columns
        name: Budgets.name,    // Include other necessary columns like name, etc.
        amount: Budgets.amount,
        icon: Budgets.icon,
        totalSpend: sql`SUM(CAST(${Expenses.amount} AS NUMERIC))`.mapWith(Number), // Convert to numeric before summing
        totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number),    // Calculate total items
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id);

      setBudgetList(result);
    };

    user && getBudgetList();
  }, [user]);

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudget />
        {budgetList.map((budget, index) => (
          <BudgetItem key={index} budget={budget} />
        ))}
      </div>
    </div>
  );
}

export default BudgetList;

