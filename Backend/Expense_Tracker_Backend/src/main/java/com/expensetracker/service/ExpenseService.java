package com.expensetracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.entity.Expense;
import com.expensetracker.repository.ExpenseRepository;

@Service
public class ExpenseService {
	
	@Autowired
	private ExpenseRepository expenserepo;
	
	public List<Expense> getAllExpenses() {
        return expenserepo.findAll();
    }
	
	public Expense addExpense(Expense expense) {
        return expenserepo.save(expense);
    }

    public Expense updateExpense(Long id, Expense expense) {
        Expense existingExpense = expenserepo.findById(id).orElse(null);
        if (existingExpense != null) {
            existingExpense.setDescription(expense.getDescription());
            existingExpense.setAmount(expense.getAmount());
            existingExpense.setDate(expense.getDate());
            return expenserepo.save(existingExpense);
        }
        return null;
    }

    public void deleteExpense(Long id) {
    	expenserepo.deleteById(id);
    }
}
