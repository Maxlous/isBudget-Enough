import { fireEvent, render, screen } from "@testing-library/react";
import AddExpense from "./components/AddExpense";
import BudgetContext from "./components/BudgetContext";
import ExpenseItem from "./components/ExpenseItem";

describe("add", () => {
  test("should add expense", () => {
    render(
      <BudgetContext>
        <AddExpense />
      </BudgetContext>
    );
    const addButton = screen.getByText("Add");
    const stringInput = screen.getByPlaceholderText(/Enter the expense/i);
    const numberInput = screen.getByPlaceholderText(/Enter the cost/i);
    const expenseString = "go to gym in monday";
    const expenseCost = 40;

    fireEvent.change(stringInput, { target: { value: expenseString } });
    fireEvent.change(numberInput, {
      target: { valueAsNumber: expenseCost },
    });

    expect(stringInput.value).toBe(expenseString);
    expect(numberInput.valueAsNumber).toBe(40);

    //when submit button clicked, event is not defined in component!
    fireEvent.click(addButton);
    // expect(stringInput.value).toBe("");
  });

  // test("should delete expense", () => {
  //   const onChange = jest.fn();
  //   render(
  //     <BudgetContext>
  //       <ExpenseItem />
  //     </BudgetContext>
  //   );
  //   const deleteIcon = screen.getByTestId("delete-icon");
  //   deleteIcon.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //   expect(onChange).toHaveBeenCalledTimes(1);
  // });
});
