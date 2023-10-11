import type BudgetSummaryRepository from "../budgetSummaryRepository";
import { BudgetSummaryEntityConverter } from "../entity/converters";
import { type BudgetId } from "../../../domain/budget";
import { BudgetSummaryModel } from "./models";

// TODO 2.3 - implement the new "insertBudgetSummary" function

export const findBudgetSummary: BudgetSummaryRepository["find"] = async (
  budgetId: BudgetId,
) => {
  const found = await BudgetSummaryModel.findOne({ id: budgetId.value });
  if (found != null) {
    return BudgetSummaryEntityConverter.toDomain(found);
  }
};

export const insertBudgetSummary: BudgetSummaryRepository["insert"] = async (
    budgetSummary,
) => {
  const entity = BudgetSummaryEntityConverter.toEntity(budgetSummary);
  const insertedSummery = await new BudgetSummaryModel(entity).save();
  return BudgetSummaryEntityConverter.toDomain(insertedSummery);
}

const BudgetSummaryMongoRepository = (): BudgetSummaryRepository => ({
  // TODO 2.4. - add the "insertBudgetSummary" function to the repository
  find: findBudgetSummary,
});

export default BudgetSummaryMongoRepository;
