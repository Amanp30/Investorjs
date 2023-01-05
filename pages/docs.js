import React, { useEffect, useState } from "react";
import Codebox from "../components/codebox";
import { blogtoc } from "blog-toc";

function documentation() {
  function mac(text) {
    var c = `${text}`;
    return c;
  }
  const [menu, setmenu] = useState(false);

  var bodyji;
  if (typeof window !== "undefined") {
    bodyji = document.body;
    if (menu) {
      bodyji.classList.add("menu-open");
    } else {
      bodyji.classList.remove("menu-open");
    }
  }

  const [toc, settoc] = useState();
  var thetoc = blogtoc("theblogpage"); // change the id here

  useEffect(() => {
    settoc(thetoc);
  }, []);

  return (
    <>
      <button onClick={(e) => setmenu(!menu)} title="Menu" className="menubtn">
        {menu ? "X" : "="}
      </button>
      <div className="dividethis">
        <div className={menu ? `toc on slide-in` : `toc off slide-out`}>
          <ul>
            <div className="logodiv">
              <img src="/investorjs.png" className="logoji" />
            </div>
            {toc?.map((elem, index) => {
              return (
                <>
                  <li key={index}>
                    <a href={elem.url} onClick={(e) => setmenu(!menu)}>
                      {elem.heading}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div id="theblogpage">
          <Codebox
            name="peRatio"
            text="This function return PE Ratio of a stock"
            args={[
              {
                argument: "marketPrice",
                text: "",
              },
              {
                argument: "eps",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var marketPrice = 148.9; \nvar eps = 3.91;\ninvestor.peRatio( marketPrice , eps );  \n// => 38.08 "
            )}
          />
          <Codebox
            name="pbRatio"
            text="This function return PB Ratio of a stock"
            args={[
              {
                argument: "marketPrice",
                text: "",
              },
              {
                argument: "bookValue",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var marketPrice = 148.9; \nvar bookValue = 27.44;\ninvestor.pbRatio(marketPrice, bookValue);  \n// => 5.43 "
            )}
          />
          <Codebox
            name="EPS"
            text="This function return Earnings Per Share (EPS) of a stock"
            args={[
              {
                argument: "netIncome",
                text: "",
              },
              {
                argument: "preferredDividends",
                text: "",
              },
              {
                argument: "commonShares",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var netIncome = 3120000000; \nvar preferredDividends = 200000000;\nvar commonShares = 283400000;\ninvestor.EPS(netIncome, preferredDividends, commonShares);  \n// => 10.30 "
            )}
          />
          <Codebox
            name="epsGrowth"
            text="This function return Earnings Per Share growth (EPS) of a stock"
            args={[
              {
                argument: "currentYear",
                text: "",
              },
              {
                argument: "priorYear",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var currentYear = 3.4; \nvar priorYear = 3;\ninvestor.epsGrowth(currentYear, priorYear);  \n// => 13.33% "
            )}
          />
          <Codebox
            name="netProfitGrowth"
            text="This function return Net Profit Growth of a stock"
            args={[
              {
                argument: "currentPeriod",
                text: "",
              },
              {
                argument: "priorPeriod",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var currentPeriod = 130000000; \nvar priorPeriod = 100000000;\ninvestor.netProfitGrowth(currentPeriod, priorPeriod);  \n// => 30% "
            )}
          />
          <Codebox
            name="salesGrowth"
            text="This function return Sales Growth "
            args={[
              {
                argument: "currentPeriod",
                text: "",
              },
              {
                argument: "priorPeriod",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var currentPeriod = 100000; \nvar priorPeriod = 80000;\ninvestor.salesGrowth(currentPeriod, priorPeriod);  \n// => 25% "
            )}
          />
          <Codebox
            name="profitGrowth"
            text="This function return Profit Growth "
            args={[
              {
                argument: "currentPeriod",
                text: "",
              },
              {
                argument: "priorPeriod",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var currentPeriod = 500000; \nvar priorPeriod = 420000;\ninvestor.profitGrowth(currentPeriod, priorPeriod);  \n// => 19.05% "
            )}
          />
          <Codebox
            name="salesToCashFlowPerShare"
            text="This function return sales to cashflow per share"
            args={[
              {
                argument: "sales",
                text: "",
              },
              {
                argument: "cashflowPerShare",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var sales = 100000; \nvar cashflowPerShare = 65;\ninvestor.salesToCashFlowPerShare(sales, cashflowPerShare);  \n// => 1538.46 "
            )}
          />
          <Codebox
            name="priceToCashflow"
            text="This function return price to cashflow"
            args={[
              {
                argument: "sharePrice",
                text: "",
              },
              {
                argument: "operatingCashFlowpershare",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var sharePrice = 148; \nvar operatingCashFlowpershare = 8.8;\ninvestor.priceToCashflow(sharePrice, operatingCashFlowpershare);  \n// => 16.82 "
            )}
          />
          <Codebox
            name="freeCashFlowPerShare"
            text="This function return free cashflow per share"
            args={[
              {
                argument: "freeCashflow",
                text: "",
              },
              {
                argument: "commonShares",
                text: "",
              },
            ]}
            rtrn="Number"
            example={mac(
              "var freeCashflow = 4000000; \nvar commonShares = 10000000;\ninvestor.freeCashFlowPerShare(freeCashflow, commonShares);  \n// => 0.4"
            )}
          />
          <Codebox
            name="cashFlowPerShare"
            text="This function return cashflow per share"
            args={[
              {
                argument: "cashFlowFromOperations",
                text: "",
              },
              {
                argument: "dividendsPaid",
                text: "",
              },
              {
                argument: "outstandingShares",
                text: "",
              },
            ]}
            rtrn="Number"
            example={mac(
              "var cashFlowFromOperations = 10000; \nvar dividendsPaid = 2000;\nvar outstandingShares = 1000; \ninvestor.cashFlowPerShare(cashFlowFromOperations , dividendsPaid , outstandingShares);  \n// => 8"
            )}
          />
          <Codebox
            name="interestCoverRatio"
            text="This function return interest cover ratio"
            args={[
              {
                argument: "EBIT",
                text: "",
              },
              {
                argument: "interestExpense",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var EBIT = 29680; \nvar interestExpense = 3463; \ninvestor.interestCoverRatio(EBIT , interestExpense );  \n// => 8.57"
            )}
          />
          <Codebox
            name="marketCaptoSales"
            text="This function return market cap to sales"
            args={[
              {
                argument: "marketCap",
                text: "",
              },
              {
                argument: "sales",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var marketCap = 100000000; \nvar sales = 1000000; \ninvestor.marketCaptoSales(marketCap , sales );  \n// => 100.00"
            )}
          />
          <Codebox
            name="EVtoSALES"
            text="This function return enterprise value to sales"
            args={[
              {
                argument: "enterpriseValue",
                text: "",
              },
              {
                argument: "sales",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var enterpriseValue = 46111; \nvar sales = 21688; \ninvestor.EVtoSALES(enterpriseValue , sales );  \n// => 2.13"
            )}
          />
          <Codebox
            name="debtToAssetRatio"
            text="This function return debt to assets ratio"
            args={[
              {
                argument: "Liabilities",
                text: "",
              },
              {
                argument: "Assets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var Liabilities = 107219;\nvar Assets = 362357; \ninvestor.debtToAssetRatio(Liabilities, Assets);  \n// => 29.59%"
            )}
          />
          <Codebox
            name="casaRatio"
            text="This function return casa ratio"
            args={[
              {
                argument: "casaDeposits",
                text: "",
              },
              {
                argument: "totalDeposits",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var casaDeposits = 23000;\nvar totalDeposits = 50000; \ninvestor.casaRatio(casaDeposits, totalDeposits);  \n// => 46%"
            )}
          />
          <Codebox
            name="interestIncomeToTotalFunds"
            text="This function return interest income to total funds"
            args={[
              {
                argument: "netInterestIncome",
                text: "",
              },
              {
                argument: "totalDeposits",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var netInterestIncome = 100000;\nvar totalDeposits = 1000000; \ninvestor.interestIncomeToTotalFunds(netInterestIncome, totalDeposits);  \n// => 10%"
            )}
          />
          <Codebox
            name="creditToDeposit"
            text="This function return credit to deposit"
            args={[
              {
                argument: "totalAdvances",
                text: "",
              },
              {
                argument: "totalDeposits",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var totalAdvances = 88419;\nvar totalDeposits = 93000; \ninvestor.creditToDeposit(totalAdvances, totalDeposits);  \n// => 95.07%"
            )}
          />
          <Codebox
            name="operatingIncomeGrowth"
            text="This function return operating income growth"
            args={[
              {
                argument: "operatingincomeCurrentYear",
                text: "",
              },
              {
                argument: "operatingincomePreviousYear",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var operatingincomeCurrentYear = 2500000;\nvar operatingincomePreviousYear = 2000000; \ninvestor.operatingIncomeGrowth(operatingincomeCurrentYear, operatingincomePreviousYear);  \n// => 25.00%"
            )}
          />
          <Codebox
            name="advancesGrowth"
            text="This function return operating income growth"
            args={[
              {
                argument: "currentPeriod",
                text: "",
              },
              {
                argument: "previousPeriod",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var currentPeriod = 500000;\nvar previousPeriod = 450000; \ninvestor.advancesGrowth(currentPeriod, previousPeriod);  \n// => 11.11%"
            )}
          />
          <Codebox
            name="dividendPayoutRatio"
            text="This function return dividend payout ratio"
            args={[
              {
                argument: "dividendPerShare",
                text: "",
              },
              {
                argument: "EPS",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var dividendPerShare = 5;\nvar EPS = 98; \ninvestor.dividendPayoutRatio(dividendPerShare, EPS);  \n// => 5.10%"
            )}
          />
          <Codebox
            name="bookValue"
            text="This function return dividend payout ratio"
            args={[
              {
                argument: "acquisitionCost",
                text: "",
              },
              {
                argument: "depreciation",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var acquisitionCost = 1000;\nvar depreciation = 500; \ninvestor.bookValue(acquisitionCost , depreciation);  \n// => 500.00"
            )}
          />
          <Codebox
            name="bookValueperShare"
            text="This function return book value per share"
            args={[
              {
                argument: "totalEquity",
                text: "",
              },
              {
                argument: "preferredEquity",
                text: "",
              },
              {
                argument: "outstandingShares",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var totalEquity = 10;\nvar preferredEquity = 3;\nvar outstandingShares = 3.5; \ninvestor.bookValueperShare(totalEquity , preferredEquity , outstandingShares);  \n// => 2.00"
            )}
          />
          <Codebox
            name="operatingCostToAssetsRatio"
            text="This function return operating cost to assets ratio"
            args={[
              {
                argument: "operatingExpenses",
                text: "",
              },
              {
                argument: "averageAssets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var operatingExpenses = 2769476;\nvar averageAssets = 129280571; \ninvestor..operatingCostToAssetsRatio(operatingExpenses , averageAssets);  \n// => 2.14%"
            )}
          />
          <Codebox
            name="costOfLiablity"
            text="This function return cost of liablity"
            args={[
              {
                argument: "interestOnBorrowingsDeposits",
                text: "",
              },
              {
                argument: "totalBorrowingsDeposits",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              "var interestOnBorrowingsDeposits = 480000; \nvar totalBorrowingsDeposits = 11000000; \ninvestor.costOfLiablity(interestOnBorrowingsDeposits, totalBorrowingsDeposits);  \n// => 4.36%"
            )}
          />
          <Codebox
            name="netInterestMargin"
            text="This function return net interest margin"
            args={[
              {
                argument: "interestEarned",
                text: "",
              },
              {
                argument: "interestPaid",
                text: "",
              },
              {
                argument: "totalAssets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var interestEarned = 3;\nvar interestPaid = 1;\nvar totalAssets = 10;\ninvestor.netInterestMargin(interestEarned, interestPaid, totalAssets);  \n// => 20.00%"
            )}
          />
          <Codebox
            name="yieldOnAdvances"
            text="This function return yield on advances"
            args={[
              {
                argument: "interestEarned",
                text: "",
              },
              {
                argument: "advances",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var interestEarned = 11872;\nvar advances = 88419;\ninvestor.yieldOnAdvances(interestEarned, advances);  \n// => 13.43%"
            )}
          />
          <Codebox
            name="ROA"
            text="This function return Return on Assets"
            args={[
              {
                argument: "netIncome",
                text: "",
              },
              {
                argument: "averageTotalAssets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var netIncome = 2286;\nvar averageTotalAssets = 142898;\ninvestor.ROA(netIncome, averageTotalAssets);  \n// => 1.60%"
            )}
          />
          <Codebox
            name="EVREVENUE"
            text="This function return enterprise value to revenue"
            args={[
              {
                argument: "enterpriseValue",
                text: "",
              },
              {
                argument: "revenue",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var enterpriseValue = 50000000;\nvar revenue = 1000000;\ninvestor.EVREVENUE(enterpriseValue, revenue);  \n// => 50.00"
            )}
          />
          <Codebox
            name="enterpriseValue"
            text="This function return enterprise value to revenue"
            args={[
              {
                argument: "marketCap",
                text: "",
              },
              {
                argument: "netDebt",
                text: "",
              },
            ]}
            rtrn="Number"
            example={mac(
              " var marketCap = 50000000;\nvar netDebt = 1000000;\ninvestor.enterpriseValue(marketCap, netDebt);  \n// => 51000000"
            )}
          />
          <Codebox
            name="marketCap"
            text="This function return Market Cap"
            args={[
              {
                argument: "marketPrice",
                text: "",
              },
              {
                argument: "commonShares",
                text: "",
              },
            ]}
            rtrn="Number"
            example={mac(
              " var marketPrice = 50;\nvar commonShares = 1000000;\ninvestor.marketCap(marketPrice, commonShares);  \n// => 50000000"
            )}
          />
          <Codebox
            name="EVEBIT"
            text="This function return enterprise value to EBIT"
            args={[
              {
                argument: "enterpriseValue",
                text: "",
              },
              {
                argument: "EBIT",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var enterpriseValue = 20000;\nvar EBIT = 10000;\ninvestor.EVEBIT(enterpriseValue, EBIT);  \n// => 2.00"
            )}
          />
          <Codebox
            name="EVEBITDA"
            text="This function return enterprise value to EBITDA"
            args={[
              {
                argument: "enterpriseValue",
                text: "",
              },
              {
                argument: "EBITDA",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var enterpriseValue = 20000;\nvar EBITDA = 10000;\ninvestor.EVEBITDA(enterpriseValue, EBITDA);  \n// => 2.00"
            )}
          />

          <Codebox
            name="operatingCashFlowRatio"
            text="This function return operating cashflow ratio"
            args={[
              {
                argument: "operatingCashflow",
                text: "",
              },
              {
                argument: "totalLiablities",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var operatingCashflow = 150000;\nvar totalLiablities = 120000;\ninvestor.operatingCashFlowRatio(operatingCashflow , totalLiablities);  \n// => 1.25"
            )}
          />
          <Codebox
            name="CAPEXToOperatingCashRatio"
            text="This function return capex to operating cash ratio"
            args={[
              {
                argument: "capex",
                text: "",
              },
              {
                argument: "operatingCashflow",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var capex = 1000;\nvar operatingCashflow = 2000;\ninvestor.CAPEXToOperatingCashRatio(capex , operatingCashflow);  \n// => 0.50"
            )}
          />
          <Codebox
            name="timesInterestEarnedRatio"
            text="This function return timesInterestEarnedRatio"
            args={[
              {
                argument: "EBIT",
                text: "",
              },
              {
                argument: "interestExpense",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var EBIT = 500000;\nvar interestExpense = 50000;\ninvestor.timesInterestEarnedRatio(EBIT , interestExpense);  \n// => 10.00"
            )}
          />
          <Codebox
            name="assetTurnoverRatio"
            text="This function return assets to turnover ratio"
            args={[
              {
                argument: "netSales",
                text: "",
              },
              {
                argument: "totalAssets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var netSales = 100000;\nvar totalAssets = 1200000;\ninvestor.assetTurnoverRatio(netSales , totalAssets);  \n// => 8.33%"
            )}
          />
          <Codebox
            name="debtRatio"
            text="This function return debt ratio"
            args={[
              {
                argument: "totalLiablities",
                text: "",
              },
              {
                argument: "totalAssets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var totalLiablities = 4000;\nvar totalAssets = 15036;\ninvestor.debtRatio(totalLiablities , totalAssets);  \n// => 26.60%"
            )}
          />
          <Codebox
            name="equityRatio"
            text="This function return equity ratio"
            args={[
              {
                argument: "shareholdersEquity",
                text: "",
              },
              {
                argument: "totalAssets",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var shareholdersEquity = 65000;\nvar totalAssets = 100000;\ninvestor.equityRatio(shareholdersEquity , totalAssets);  \n// => 65.00%"
            )}
          />
          <Codebox
            name="debtToEquityRatio"
            text="This function return debt to equity ratio"
            args={[
              {
                argument: "totalDebt",
                text: "",
              },
              {
                argument: "shareholdersEquity",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var totalDebt = 107219;\nvar shareholdersEquity = 182055;\ninvestor.debtToEquityRatio(totalDebt , shareholdersEquity);  \n// => .59"
            )}
          />
          <Codebox
            name="netProfitMargin"
            text="This function return net profit margin"
            args={[
              {
                argument: "netProfit",
                text: "",
              },
              {
                argument: "revenue",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var netProfit = 30;\nvar revenue = 500;\ninvestor.netProfitMargin(netProfit, revenue);  \n// => 6.00%"
            )}
          />
          <Codebox
            name="operatingProfitMargin"
            text="This function return operating profit margin"
            args={[
              {
                argument: "operatingProfit",
                text: "",
              },
              {
                argument: "revenue",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var operatingProfit = 170000;\nvar revenue = 510000;\ninvestor.operatingProfitMargin(operatingProfit, revenue);  \n// => 33.33%"
            )}
          />
          <Codebox
            name="grossMarginRatio"
            text="This function return gross margin ratio"
            args={[
              {
                argument: "totalRevenue",
                text: "",
              },
              {
                argument: "COGS",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var totalRevenue = 102007;\nvar COGS = 39023;\ninvestor.grossMarginRatio(totalRevenue, COGS);  \n// => 61.74%"
            )}
          />
          <Codebox
            name="capitalEmployed"
            text="This function return capital employed"
            args={[
              {
                argument: "totalAssets",
                text: "",
              },
              {
                argument: "currentLiablities",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var totalAssets = 102007;\nvar currentLiablities = 39023;\ninvestor.capitalEmployed(totalAssets, currentLiablities);  \n// => 400000.00"
            )}
          />
          <Codebox
            name="ROCE"
            text="This function return the return on capital employed"
            args={[
              {
                argument: "Ebit",
                text: "",
              },
              {
                argument: "capitalEmployed",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var Ebit = 30000;\nvar capitalEmployed = 200000;\ninvestor.ROCE(ebit, capitalEmployed);  \n// => 15.00%"
            )}
          />
          <Codebox
            name="ROIC"
            text="This function return the return on invested capital"
            args={[
              {
                argument: "netIncome",
                text: "",
              },
              {
                argument: "investedCapital",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var netIncome = 3521 ;\nvar investedCapital = 541;\ninvestor.ROIC(netIncome, investedCapital);  \n// => 650.83%"
            )}
          />
          <Codebox
            name="ROE"
            text="This function return the return on invested capital"
            args={[
              {
                argument: "netIncome",
                text: "",
              },
              {
                argument: "shareholdersEquity",
                text: "",
              },
            ]}
            rtrn="String"
            example={mac(
              " var netIncome = 80000;\nvar shareholdersEquity = 80400;\ninvestor.ROE(netIncome, shareholdersEquity);  \n// => 99.50%"
            )}
          />
        </div>
      </div>
    </>
  );
}

export default documentation;
