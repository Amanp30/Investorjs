"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.currentRatio = function currentRatio(
  currentAssets,
  currentLiabilities
) {
  return (currentAssets / currentLiabilities).toFixed(2);
};

exports.cashRatio = function cashRatio(
  cash,
  cashEquivalents,
  currentLiabilities
) {
  return ((cash + cashEquivalents) / currentLiabilities).toFixed(2);
};

exports.cashFlowToDebtRatio = function cashFlowToDebtRatio(
  cashFlowFromOperations,
  totalDebt
) {
  return (cashFlowFromOperations / totalDebt).toFixed(2);
};

exports.cashBurnRate = function cashBurnRate(
  cashFlowFromOperations,
  netIncome
) {
  return (
    (cashFlowFromOperations - netIncome) /
    cashFlowFromOperations
  ).toFixed(2);
};

exports.accountsReceivableTurnover = function accountsReceivableTurnover(
  netCreditSales,
  averageAccountsReceivable
) {
  return (netCreditSales / averageAccountsReceivable).toFixed(2);
};

exports.averageCollectionPeriod = function averageCollectionPeriod(
  receivableTurnover
) {
  return (365 / receivableTurnover).toFixed(2);
};

exports.inventoryTurnover = function inventoryTurnover(
  COGS,
  averageTotalInventory
) {
  return ((COGS / averageTotalInventory) * 100).toFixed(2);
};

exports.averageDaysInventoryInStock = function averageDaysInventoryInStock(
  inventoryTurnover
) {
  return (365 / inventoryTurnover).toFixed(2);
};

exports.payablesTurnover = function payablesTurnover(
  purchases,
  averageAccountsPayable
) {
  return (purchases / averageAccountsPayable).toFixed(2);
};

exports.averageDaysPayablesOutstanding =
  function averageDaysPayablesOutstanding(payablesTurnover) {
    return (365 / payablesTurnover).toFixed(2);
  };

/* CFI financial */
exports.ROE = function returnOnEquity(netIncome, shareholdersequity) {
  return ((netIncome / shareholdersequity) * 100).toFixed(2) + "%";
};

exports.ROIC = function roic(netIncome, investedCapital) {
  return ((netIncome / investedCapital) * 100).toFixed(2) + "%";
};

exports.ROCE = function returnOnCapitalEmployedInPercent(
  ebit,
  capitalEmployed
) {
  return ((ebit / capitalEmployed) * 100).toFixed(2) + "%";
};

exports.capitalEmployed = function capitalEmployed(
  totalAssets,
  currentLiabilities
) {
  return (totalAssets - currentLiabilities).toFixed(2);
};

exports.grossMarginRatio = function grossMarginRatio(totalRevenue, cogs) {
  const grossProfit = totalRevenue - cogs;
  return ((grossProfit / totalRevenue) * 100).toFixed(2) + "%";
};

exports.operatingProfitMargin = function operatingProfitMargin(
  operatingProfit,
  totalRevenue
) {
  return ((operatingProfit / totalRevenue) * 100).toFixed(2) + "%";
};

exports.netProfitMargin = function netProfitMargin(netProfit, totalRevenue) {
  return ((netProfit / totalRevenue) * 100).toFixed(2) + "%";
};

exports.debtToEquityRatio = function debtToEquityRatio(
  totalDebt,
  shareholderEquity
) {
  return (totalDebt / shareholderEquity).toFixed(2);
};

exports.equityRatio = function equityRatio(shareholderEquity, totalAssets) {
  return ((shareholderEquity / totalAssets) * 100).toFixed(2) + "%";
};

exports.debtRatio = function debtRatio(totalLiabilities, totalAssets) {
  return ((totalLiabilities / totalAssets) * 100).toFixed(2) + "%";
};

exports.assetTurnoverRatio = function assetTurnoverRatio(
  netSales,
  averageTotalAssets
) {
  return ((netSales / averageTotalAssets) * 100).toFixed(2) + "%";
};

exports.timesInterestEarnedRatio = function timesInterestEarnedRatio(
  EBIT,
  interestExpense
) {
  return (EBIT / interestExpense).toFixed(2);
};

exports.CAPEXToOperatingCashRatio = function CAPEXToOperatingCashRatio(
  CAPEX,
  operatingCashFlow
) {
  return (CAPEX / operatingCashFlow).toFixed(2);
};

exports.operatingCashFlowRatio = function operatingCashFlowRatio(
  operatingCashFlow,
  totalLiabilities
) {
  return (operatingCashFlow / totalLiabilities).toFixed(2);
};

exports.EVEBITDA = function EVEBITDA(EV, EBITDA) {
  return (EV / EBITDA).toFixed(2);
};

exports.EVEBIT = function EVEBIT(EV, EBIT) {
  return (EV / EBIT).toFixed(2);
};

exports.marketCap = function marketCap(
  marketPricePerShare,
  numberOfOutstandingShares
) {
  return marketPricePerShare * numberOfOutstandingShares;
};

exports.enterpriseValue = function enterpriseValue(marketCap, netDebt) {
  return marketCap + netDebt;
};

exports.EVREVENUE = function EVR(EV, revenue) {
  return (EV / revenue).toFixed(2);
};

exports.ROA = function ROA(netIncome, averageTotalAssets) {
  return ((netIncome / averageTotalAssets) * 100).toFixed(2) + "%";
};

exports.yieldOnAdvances = function yieldOnAdvances(interestEarned, advances) {
  return ((interestEarned / advances) * 100).toFixed(2) + "%";
};

exports.netInterestMargin = function netInterestMargin(
  interestEarned,
  interestPaid,
  totalAssets
) {
  return (
    (((interestEarned - interestPaid) / totalAssets) * 100).toFixed(2) + "%"
  );
};

exports.costOfLiablity = function costOfLiablity(
  interestOnBorrowingsDeposits,
  totalBorrowingsDeposits
) {
  return (
    ((interestOnBorrowingsDeposits / totalBorrowingsDeposits) * 100).toFixed(
      2
    ) + "%"
  );
};

exports.operatingCostToAssetsRatio = function operatingCostToAssetsRatio(
  operatingExpenses,
  avereageAssets
) {
  return ((operatingExpenses / avereageAssets) * 100).toFixed(2) + "%";
};

exports.bookValue = function bookValue(acquisitionCost, depreciation) {
  return (acquisitionCost - depreciation).toFixed(2);
};

exports.bookValueperShare = function bookValuepershare(
  totalEquity,
  preferredEquity,
  totalOutstandingShares
) {
  return ((totalEquity - preferredEquity) / totalOutstandingShares).toFixed(2);
};

exports.peRatio = function peRatio(marketPrice, eps) {
  return (marketPrice / eps).toFixed(2);
};

exports.pbRatio = function pbRatio(marketPrice, bookValue) {
  return (marketPrice / bookValue).toFixed(2);
};

exports.EPS = function EPS(
  netIncome,
  preferredDividends,
  commonOutstandingShares
) {
  return ((netIncome - preferredDividends) / commonOutstandingShares).toFixed(
    2
  );
};

exports.dividendPayoutRatio = function dividendPayoutRatio(
  dividendsPerShare,
  EPS
) {
  return ((dividendsPerShare / EPS) * 100).toFixed(2) + "%";
};

exports.epsGrowth = function epsGrowth(epsCurrentYear, epsPriorYear) {
  return (
    (((epsCurrentYear - epsPriorYear) / epsPriorYear) * 100).toFixed(2) + "%"
  );
};

exports.advancesGrowth = function advancesGrowth(
  advancesCurrentYear,
  advancesPreviousYear
) {
  return (
    (
      ((advancesCurrentYear - advancesPreviousYear) / advancesPreviousYear) *
      100
    ).toFixed(2) + "%"
  );
};

exports.operatingIncomeGrowth = function operatingIncomeGrowth(
  operatingincomeCurrentYear,
  operatingincomePreviousYear
) {
  return (
    (
      ((operatingincomeCurrentYear - operatingincomePreviousYear) /
        operatingincomePreviousYear) *
      100
    ).toFixed(2) + "%"
  );
};

exports.creditToDeposit = function creditToDeposit(
  totalAdvances,
  totalDeposits
) {
  return ((totalAdvances / totalDeposits) * 100).toFixed(2) + "%";
};

exports.casaRatio = function casaRatio(casaDeposits, totalDeposits) {
  return ((casaDeposits / totalDeposits) * 100).toFixed(2) + "%";
};

exports.interestIncomeToTotalFunds = function interestIncomeToTotalFunds(
  netInterestIncome,
  totalDeposits
) {
  return ((netInterestIncome / totalDeposits) * 100).toFixed(2) + "%";
};

exports.debtToAssetRatio = function debtToAssetRatio(
  totalLiabilities,
  totalAssets
) {
  return ((totalLiabilities / totalAssets) * 100).toFixed(2) + "%";
};

exports.EVtoSALES = function EVtoSALES(EV, sales) {
  return (EV / sales).toFixed(2);
};

exports.marketCaptoSales = function marketCaptoSales(marketcap, sales) {
  return (marketcap / sales).toFixed(2);
};

exports.interestCoverRatio = function interestCoverRatio(
  EBIT,
  interestExpense
) {
  return (EBIT / interestExpense).toFixed(2);
};

exports.cashFlowPerShare = function cashFlowPerShare(
  cashFlowFromOperations,
  dividendsPaid,
  sharesOutstanding
) {
  return (cashFlowFromOperations - dividendsPaid) / sharesOutstanding;
};

exports.freeCashFlowPerShare = function freeCashFlowPerShare(
  freeCashFlow,
  commonSharesOutstanding
) {
  return freeCashFlow / commonSharesOutstanding;
};

exports.priceToCashflow = function priceToCashflow(
  shareprice,
  operatingCashFlowpershare
) {
  return (shareprice / operatingCashFlowpershare).toFixed(2);
};

exports.salesToCashFlowPerShare = function salesToCashFlowPerShare(
  sales,
  cashFlowPerShare
) {
  return (sales / cashFlowPerShare).toFixed(2);
};

exports.netProfitGrowth = function netProfitGrowth(
  currentPeriodNetProfit,
  priorPeriodNetProfit
) {
  return (
    ((currentPeriodNetProfit - priorPeriodNetProfit) / priorPeriodNetProfit) *
      100 +
    "%"
  );
};

exports.salesGrowth = function salesGrowth(currentSales, previousSales) {
  return (
    (((currentSales - previousSales) / previousSales) * 100).toFixed(2) + "%"
  );
};

exports.profitGrowth = function profitGrowth(currentProfit, previousProfit) {
  return (
    (((currentProfit - previousProfit) / previousProfit) * 100).toFixed(2) + "%"
  );
};

exports.intrinsicValue = function intrinsicValue(eps, growthrate) {
  return eps * (8.5 + 2 * growthrate);
};

exports.marginOfSafety = function marginOfSafety(intrinsicValue, marketPrice) {
  return (
    (((intrinsicValue - marketPrice) / intrinsicValue) * 100).toFixed(2) + "%"
  );
};

exports.minimumAcceptablePrice = function minimumAcceptablePrice(
  eps,
  growthrate,
  bondyield
) {
  return eps * (8.5 + 2 * growthrate) * (4 + bondyield);
};
