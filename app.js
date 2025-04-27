class CryptoTracker {
  constructor() {
    this.ethBuyPrice = 1580; // Default ETH buy price

    // Configuration
    this.assets = [
      { symbol: "PX", name: "PX", coingeckoId: "not-pixel", staked: false },
      // { symbol: 'ETH', name: 'Ethereum', coingeckoId: 'ethereum', staked: 'native' },

      {
        symbol: "ZK",
        name: "ZKsync",
        coingeckoId: "zksync",
        staked: "native",
      },
      {
        symbol: "STRK",
        name: "Starknet",
        coingeckoId: "starknet",
        staked: "native",
      },
      {
        symbol: "W",
        name: "Wormhole",
        coingeckoId: "wormhole",
        staked: false,
      },

      {
        symbol: "ADA",
        name: "Cardano",
        coingeckoId: "cardano",
        staked: "native",
      },
      {
        symbol: "NEAR",
        name: "NEAR Protocol",
        coingeckoId: "near",
        staked: "liquid",
      },
      {
        symbol: "ARB",
        name: "Arbitrum",
        coingeckoId: "arbitrum",
        staked: "native",
      },
      {
        symbol: "ATOM",
        name: "Cosmos",
        coingeckoId: "cosmos",
        staked: "liquid",
      },

      {
        symbol: "APTOS",
        name: "Aptos",
        coingeckoId: "aptos",
        staked: "liquid",
      },
      {
        symbol: "AVAX",
        name: "Avalanche",
        coingeckoId: "avalanche-2",
        staked: "liquid",
      },

      {
        symbol: "JUP",
        name: "Jupiter",
        coingeckoId: "jupiter-exchange-solana",
        staked: "native",
      },
      {
        symbol: "XLM",
        name: "Stellar",
        coingeckoId: "stellar",
        staked: false,
      },
      {
        symbol: "TWT",
        name: "Trust Wallet Token",
        coingeckoId: "trust-wallet-token",
        staked: false,
      },
    ];

    // DOM Elements
    this.elements = {
      cryptoGrid: document.getElementById("cryptoGrid"),
      performanceTable: document.getElementById("performanceTable"),
      lastUpdated: document.getElementById("lastUpdated"),
      refreshBtn: document.getElementById("refreshBtn"),
      exportBtn: document.getElementById("exportBtn"),
      importBtn: document.getElementById("importBtn"),
      exportImportSection: document.getElementById("exportImportSection"),
      dataTextarea: document.getElementById("dataTextarea"),
      importConfirmBtn: document.getElementById("importConfirmBtn"),
      cancelImportBtn: document.getElementById("cancelImportBtn"),
      totalPortfolio: document.getElementById("totalPortfolio"),
      exportToFileBtn: document.getElementById("exportToFileBtn"),
      importFromFileBtn: document.getElementById("importFromFileBtn"),
      sortByROI: document.getElementById("sortByROI"),
      sortByPNL: document.getElementById("sortByPNL"),
      sortByPercent: document.getElementById("sortByPercent"),
      sortByInvested: document.getElementById("sortByInvested"),
      ethPortfolioSummary: document.getElementById("ethPortfolioSummary"),
      athAtlTable: document.getElementById("athAtlTable"),
    };

    // Initialize
    this.initEventListeners();
    this.loadPortfolio();
    this.updateData();
    this.setupAutoRefresh();
  }

  initEventListeners() {
    this.elements.refreshBtn.addEventListener("click", () => this.updateData());
    this.elements.exportBtn.addEventListener("click", () => this.exportData());
    this.elements.importBtn.addEventListener("click", () =>
      this.showImportUI()
    );
    this.elements.importConfirmBtn.addEventListener("click", () =>
      this.importData()
    );
    this.elements.cancelImportBtn.addEventListener("click", () =>
      this.hideImportUI()
    );
    this.elements.exportToFileBtn.addEventListener("click", () =>
      this.exportToFile()
    );
    this.elements.importFromFileBtn.addEventListener("click", () =>
      this.importFromFile()
    );
    this.elements.sortByROI.addEventListener("click", () =>
      this.sortPerformanceTable("roi")
    );
    this.elements.sortByPNL.addEventListener("click", () =>
      this.sortPerformanceTable("profit")
    );
    this.elements.sortByPercent.addEventListener("click", () =>
      this.sortPerformanceTable("percent")
    );
    this.elements.sortByInvested.addEventListener("click", () =>
      this.sortPerformanceTable("invested")
    );
  }

  setupAutoRefresh() {
    setInterval(() => this.updateData(), 60000);
  }

  loadPortfolio() {
    try {
      const savedData = localStorage.getItem("cryptoPortfolio");
      this.portfolio = savedData ? JSON.parse(savedData) : {};
    } catch (error) {
      console.error("Error loading portfolio:", error);
      this.portfolio = {};
    }
  }

  savePortfolio() {
    try {
      localStorage.setItem("cryptoPortfolio", JSON.stringify(this.portfolio));
    } catch (error) {
      console.error("Error saving portfolio:", error);
    }
  }

  getStakingText(stakingType) {
    if (stakingType === "native") return `(Native) `;
    if (stakingType === "liquid") return `(Liquid) `;
    return "";
  }

  async fetchMarketData() {
    try {
      const ids = this.assets.map((asset) => asset.coingeckoId).join(",");
      // Добавляем запрос ATH и ATL
      const url = `https://api.coingecko.com/api/v3/coins/markets?ids=${ids}&vs_currency=usd&sparkline=false&price_change_percentage=ath,atl`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const marketData = await response.json();

      // Формируем удобную структуру данных
      const result = {};
      marketData.forEach((coin) => {
        result[coin.id] = {
          usd: coin.current_price,
          usd_24h_change: coin.price_change_percentage_24h,
          usd_market_cap: coin.market_cap,
          usd_24h_vol: coin.total_volume,
          ath: coin.ath,
          atl: coin.atl,
          ath_change_percentage: coin.ath_change_percentage,
          atl_change_percentage: coin.atl_change_percentage,
        };
      });

      return result;
    } catch (error) {
      console.error("Error fetching market data:", error);
      this.elements.lastUpdated.textContent = `Error: ${error.message}`;
      return null;
    }
  }

  async updateData() {
    this.elements.lastUpdated.textContent = "Loading...";

    const marketData = await this.fetchMarketData();
    if (marketData) {
      this.displayData(marketData);
      this.updatePerformanceTable(marketData);
      this.elements.lastUpdated.textContent = `Last updated: ${new Date().toLocaleString()}`;
    }
  }

  displayData(marketData) {
    if (!marketData) return;

    this.elements.cryptoGrid.innerHTML = "";
    let totalPortfolioValue = 0;
    let totalInvested = 0;
    let totalProfit = 0;

    this.assets.forEach((asset) => {
      const assetData = marketData[asset.coingeckoId];
      if (!assetData) return;

      const holdings = this.portfolio[asset.symbol] || {
        amount: 0,
        buyPrice: 0,
        ath: assetData.ath,
        atl: assetData.atl,
      };
      const currentValue = holdings.amount * assetData.usd;
      const buyValue = holdings.amount * holdings.buyPrice;
      const profit = currentValue - buyValue;
      if (!holdings.ath || assetData.ath > holdings.ath) {
        holdings.ath = assetData.ath;
      }
      if (!holdings.atl || assetData.atl < holdings.atl) {
        holdings.atl = assetData.atl;
      }
      const profitPercent =
        holdings.buyPrice > 0
          ? ((assetData.usd - holdings.buyPrice) / holdings.buyPrice) * 100
          : 0;

      totalPortfolioValue += currentValue;
      totalInvested += buyValue;
      totalProfit += profit;

      const card = this.createAssetCard(
        asset,
        assetData,
        holdings,
        currentValue,
        profit,
        profitPercent
      );
      this.elements.cryptoGrid.appendChild(card);
    });

    this.updateTotalPortfolio(totalPortfolioValue, totalInvested, totalProfit);
    this.updateAthAtlTable(marketData); // Д
  }

  createAssetCard(
    asset,
    marketData,
    holdings,
    currentValue,
    profit,
    profitPercent
  ) {
    const change24h = marketData.usd_24h_change;
    const changeClass = change24h >= 0 ? "positive" : "negative";
    const profitClass = profit >= 0 ? "positive" : "negative";

    const card = document.createElement("div");
    card.className = "crypto-card";
    console.log(asset);
    card.innerHTML = `
            <button class="edit-btn" data-symbol="${asset.symbol}">✏️</button>
            <div class="crypto-header">
               <img src="images/${asset.symbol.toLowerCase()}.png" 
                    alt="${asset.name}" width="30" height="30" 
                    onerror="this.src='https://totalcoin.io/uploads/coins/big/eth.png'">
                <span class="crypto-name">${
                  asset.name
                } <span>${this.getStakingText(asset.staked)}</span></span>
            </div>
            <div class="price">$${this.formatNumber(marketData.usd, 6)}</div>
            <div>
                <span class="change ${changeClass}">
                    ${change24h >= 0 ? "↑" : "↓"} ${Math.abs(change24h).toFixed(
      2
    )}% (24h)
                </span>
            </div>
            <div class="stats">
                <span>MCap: $${this.formatNumber(
                  marketData.usd_market_cap / 1e9,
                  2
                )}B</span>
                <span>Vol: $${this.formatNumber(
                  marketData.usd_24h_vol / 1e6,
                  2
                )}M</span>
            </div>
            
            <div class="portfolio-info">
                <div class="portfolio-row">
                    <span>Coins:</span>
                    <span><strong>${this.formatNumber(holdings.amount, 8)} ${
      asset.symbol
    }</strong> 
                    ($${this.formatNumber(currentValue, 2)})</span>
                </div>
                <div class="portfolio-row">
                    <span>Avg buy:</span>
                    <span>$${
                      holdings.buyPrice > 0
                        ? this.formatNumber(holdings.buyPrice, 6)
                        : "N/A"
                    }</span>
                </div>
                <div class="portfolio-row">
                    <span>Profit/Loss:</span>
                    <span class="${profitClass}">
                        ${profit >= 0 ? "↑" : "↓"} $${this.formatNumber(
      Math.abs(profit),
      2
    )} 
                        (${Math.abs(profitPercent).toFixed(2)}%)
                    </span>
                </div>
            </div>
            
            <div class="input-form" id="form-${
              asset.symbol
            }" style="display: none;">
                <input type="number" id="amount-${
                  asset.symbol
                }" placeholder="Amount" 
                    step="0.00000001" min="0" value="${holdings.amount}">
                <input type="number" id="price-${
                  asset.symbol
                }" placeholder="Buy Price ($)" 
                    step="0.00000001" min="0" value="${holdings.buyPrice}">
                <button class="save-btn" data-symbol="${
                  asset.symbol
                }">Save</button>
            </div>
        `;

    card.querySelector(".edit-btn").addEventListener("click", () => {
      const form = card.querySelector(".input-form");
      form.style.display = form.style.display === "block" ? "none" : "block";
    });

    card.querySelector(".save-btn").addEventListener("click", () => {
      this.saveAssetData(asset.symbol);
    });

    return card;
  }

  saveAssetData(symbol) {
    const amount =
      parseFloat(document.getElementById(`amount-${symbol}`).value) || 0;
    const buyPrice =
      parseFloat(document.getElementById(`price-${symbol}`).value) || 0;

    this.portfolio[symbol] = { amount, buyPrice };
    this.savePortfolio();
    this.updateData();
  }

  updatePerformanceTable(marketData) {
    if (!marketData) return;

    let totalInvested = 0;
    let totalCurrent = 0;
    let totalProfit = 0;

    const performanceData = this.assets
      .map((asset) => {
        const assetData = marketData[asset.coingeckoId];
        if (!assetData) return null;

        const holdings = this.portfolio[asset.symbol] || {
          amount: 0,
          buyPrice: 0,
        };
        const currentValue = holdings.amount * assetData.usd;
        const buyValue = holdings.amount * holdings.buyPrice;
        const profit = currentValue - buyValue;
        const profitPercent =
          holdings.buyPrice > 0
            ? ((assetData.usd - holdings.buyPrice) / holdings.buyPrice) * 100
            : 0;

        totalInvested += buyValue;
        totalCurrent += currentValue;
        totalProfit += profit;

        return {
          symbol: asset.symbol,
          name: asset.name,
          invested: buyValue,
          currentValue: currentValue,
          roi: profitPercent,
          profit: profit,
          amount: holdings.amount,
          percentOfPortfolio:
            totalCurrent > 0 ? (currentValue / totalCurrent) * 100 : 0,
        };
      })
      .filter((item) => item !== null);

    const totalROI =
      totalInvested > 0
        ? ((totalCurrent - totalInvested) / totalInvested) * 100
        : 0;
    performanceData.push({
      symbol: "TOTAL",
      name: "Total Portfolio",
      invested: totalInvested,
      currentValue: totalCurrent,
      roi: totalROI,
      profit: totalProfit,
      amount: null,
      percentOfPortfolio: 100,
    });

    this.performanceData = performanceData;
    this.sortPerformanceTable("roi");

    if (totalInvested > 0) {
      this.renderEthComparisonTable(totalInvested);
    }
  }

  sortPerformanceTable(field, totalInvested, currentValue) {
    console.log(totalInvested);
    console.log(currentValue);
    if (!this.performanceData) return;

    const sortedData = [...this.performanceData].sort((a, b) => {
      if (field === "roi") {
        return b.roi - a.roi; // Сортировка по ROI (убывание)
      } else if (field === "invested") {
        return b.invested - a.invested; // Сортировка по Invested (убывание)
      } else if (field === "profit") {
        return b.profit - a.profit; // Сортировка по Profit (убывание)
      } else if (field === "percent") {
        let aa = a.invested + a.profit;
        let bb = b.invested + b.profit;
        return bb - aa;
      }
      return 0;
    });

    this.renderPerformanceTable(sortedData);
  }

  renderPerformanceTable(data) {
    const tableBody = this.elements.performanceTable.querySelector("tbody");
    tableBody.innerHTML = "";

    const totalRow = data.find((item) => item.symbol === "TOTAL");
    if (totalRow) {
      const profitClass = totalRow.profit >= 0 ? "positive" : "negative";
      const roiClass = totalRow.roi >= 0 ? "positive" : "negative";

      this.elements.totalPortfolio.innerHTML = `
                <div class="portfolio-summary">
                    <div class="portfolio-summary-item">
                        <span>Total Value:</span>
                        <span>$${this.formatNumber(
                          totalRow.currentValue,
                          2
                        )}</span>
                    </div>
                    <div class="portfolio-summary-item">
                        <span>Total Invested:</span>
                        <span>$${this.formatNumber(totalRow.invested, 2)}</span>
                    </div>
                    <div class="portfolio-summary-item">
                        <span>Profit/Loss:</span>
                        <span class="${profitClass}">$${this.formatNumber(
        totalRow.profit,
        2
      )}</span>
                    </div>
                    <div class="portfolio-summary-item">
                        <span>ROI:</span>
                        <span class="${roiClass}">${totalRow.roi.toFixed(
        2
      )}%</span>
                    </div>
                </div>
            `;
    }

    data
      .filter((item) => item.symbol !== "TOTAL")
      .forEach((item) => {
        const row = document.createElement("tr");

        const roiClass = item.roi >= 0 ? "positive" : "negative";
        const profitClass = item.profit >= 0 ? "positive" : "negative";
        const percentOfPortfolio = totalRow
          ? (item.currentValue / totalRow.currentValue) * 100
          : 0;

        row.innerHTML = `
                <td>
                     <img src="images/${item.symbol.toLowerCase()}.png"        alt="${
          item.name
        }" width="20" height="20"
                        onerror="this.src='https://totalcoin.io/uploads/coins/big/eth.png'">
                    ${item.name} (${item.symbol})
                </td>
                <td>${this.formatNumber(item.amount, 8)}</td>
                <td>$${this.formatNumber(item.invested, 2)}</td>
                <td>$${this.formatNumber(item.currentValue, 2)}</td>
                <td class="${profitClass}">$${this.formatNumber(
          item.profit,
          2
        )}</td>
                <td class="${roiClass}">${item.roi.toFixed(2)}%</td>
                <td>${percentOfPortfolio.toFixed(2)}%</td>
            `;

        tableBody.appendChild(row);
      });
  }

  async renderEthComparisonTable(totalInvested) {
    try {
      const ethResponse = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      if (!ethResponse.ok) throw new Error("Failed to fetch ETH price");

      const ethData = await ethResponse.json();
      if (!ethData.ethereum || !ethData.ethereum.usd)
        throw new Error("Invalid ETH data");

      const currentEthPrice = ethData.ethereum.usd;
      const ethAmount = totalInvested / this.ethBuyPrice;
      const currentValue = ethAmount * currentEthPrice;
      const profit = currentValue - totalInvested;
      const profitPercent =
        ((currentEthPrice - this.ethBuyPrice) / this.ethBuyPrice) * 100;
      const profitClass = profit >= 0 ? "positive" : "negative";

      // Обновляем сводку ETH портфеля, если элемент существует
      if (this.elements.ethPortfolioSummary) {
        this.elements.ethPortfolioSummary.innerHTML = `
                    <div class="portfolio-summary">
                        <div class="portfolio-summary-item">
                            <span>Current Values:</span>
                            <span>$${this.formatNumber(currentValue, 2)}</span>
                        </div>
                        <div class="portfolio-summary-item">
                            <span>ETH Buy Price:</span>
                            <span>$${this.formatNumber(
                              this.ethBuyPrice,
                              2
                            )}</span>
                        </div>
                        <div class="portfolio-summary-item">
                            <span>Profit/Loss:</span>
                            <span class="${profitClass}">$${this.formatNumber(
          profit,
          2
        )}</span>
                        </div>
                      
                      
                              <div class="portfolio-summary-item">
                            <span>ETH ROI</span>
                            <span class="${
                              profit >= 0 ? "positive" : "negative"
                            }">
                               ${profitPercent.toFixed(2)}%
                            </span>
                        </div>
                    </div>
                `;
      }

      const oldTable = document.querySelector(".eth-comparison");
      if (oldTable) oldTable.remove();

      const container = document.createElement("div");
      container.className = "eth-comparison";
      container.innerHTML = `
                <h3>ETH Investment Comparison</h3>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Asset</th>
                            <th>Amount</th>
                            <th>Invested</th>
                            <th>Current Value</th>
                            <th>Profit/Loss</th>
                            <th>ROI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://totalcoin.io/uploads/coins/big/eth.png" 
                                    alt="Ethereum" width="20" height="20"
                                    onerror="this.src='https://unn.ua/img/2024/03/21/1711016055-1681-large.webp'">
                                Ethereum (ETH)
                            </td>
                            <td>${this.formatNumber(ethAmount, 4)}</td>
                            <td>$${this.formatNumber(totalInvested, 2)}</td>
                            <td>$${this.formatNumber(currentValue, 2)}</td>
                            <td class="${
                              profit >= 0 ? "positive" : "negative"
                            }">
                                $${this.formatNumber(
                                  profit,
                                  2
                                )} (${profitPercent.toFixed(2)}%)
                            </td>
                            <td class="${
                              profitPercent >= 0 ? "positive" : "negative"
                            }">
                                ${profitPercent.toFixed(2)}%
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="eth-controls">
                    <input type="number" id="ethBuyPrice" value="${
                      this.ethBuyPrice
                    }" step="0.01" min="0" 
                        placeholder="ETH Buy Price">
                    <button id="updateEthComparison">Update</button>
                </div>
            `;

      container
        .querySelector("#updateEthComparison")
        .addEventListener("click", () => {
          this.ethBuyPrice =
            parseFloat(container.querySelector("#ethBuyPrice").value) ||
            this.ethBuyPrice;
          this.renderEthComparisonTable(totalInvested);
        });

      this.elements.performanceTable.parentNode.insertBefore(
        container,
        this.elements.performanceTable.nextSibling
      );
    } catch (error) {
      console.error("Error rendering ETH comparison:", error);
      if (this.elements.ethPortfolioSummary) {
        this.elements.ethPortfolioSummary.innerHTML = `<div class="error">Error loading ETH data: ${error.message}</div>`;
      }
    }
  }

  updateTotalPortfolio(currentValue, invested = 0, profit = 0) {
    const roi = invested > 0 ? ((currentValue - invested) / invested) * 100 : 0;
    const profitClass = profit >= 0 ? "positive" : "negative";
    const roiClass = roi >= 0 ? "positive" : "negative";

    this.elements.totalPortfolio.innerHTML = `
            <div class="portfolio-summary">
                <div class="portfolio-summary-item">
                    <span>Total Value:</span>
                    <span>$${this.formatNumber(currentValue, 2)}</span>
                </div>
                <div class="portfolio-summary-item">
                    <span>Total Invested:</span>
                    <span>$${this.formatNumber(invested, 2)}</span>
                </div>
                <div class="portfolio-summary-item">
                    <span>Profit/Loss:</span>
                    <span class="${profitClass}">$${this.formatNumber(
      profit,
      2
    )}</span>
                </div>
                <div class="portfolio-summary-item">
                    <span>ROI:</span>
                    <span class="${roiClass}">${roi.toFixed(2)}%</span>
                </div>
            </div>
        `;
  }

  formatNumber(value, maxDecimals) {
    if (isNaN(value)) return "0.00";
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: maxDecimals,
    });
  }

  exportData() {
    this.elements.dataTextarea.value = JSON.stringify(this.portfolio, null, 2);
    this.showImportUI();
  }

  importData() {
    try {
      const data = JSON.parse(this.elements.dataTextarea.value);
      if (data && typeof data === "object") {
        this.portfolio = data;
        this.savePortfolio();
        this.updateData();
        this.hideImportUI();
      } else {
        alert("Invalid data format");
      }
    } catch (error) {
      alert(`Error importing data: ${error.message}`);
    }
  }
  updateAthAtlTable(marketData, sortBy = "default") {
    if (!marketData) return;

    const tableBody = this.elements.athAtlTable.querySelector("tbody");
    tableBody.innerHTML = "";

    let totalAtlValue = 0;
    let totalAthValue = 0;
    let totalCurrentValue = 0;

    // Сначала собираем все данные в массив
    const tableData = this.assets
      .map((asset) => {
        const assetData = marketData[asset.coingeckoId];
        if (!assetData) return null;

        const holdings = this.portfolio[asset.symbol] || {
          amount: 0,
          buyPrice: 0,
          ath: assetData.ath,
          atl: assetData.atl,
        };

        const athValue = holdings.ath * holdings.amount;
        const atlValue = holdings.atl * holdings.amount;
        const currentValue = holdings.amount * assetData.usd;
        const difValue = (currentValue / athValue) * 100;
        const potentialX = athValue / currentValue;

        return {
          asset,
          holdings,
          athValue,
          atlValue,
          currentValue,
          difValue,
          potentialX
        };
      })
      .filter((item) => item !== null);

    // Сортируем данные согласно выбранному критерию
    let sortedData = [...tableData];
    switch (sortBy) {
      case "difValueAsc":
        sortedData.sort((a, b) => a.difValue - b.difValue);
        break;
      case "difValueDesc":
        sortedData.sort((a, b) => b.difValue - a.difValue);
        break;
      // можно добавить другие варианты сортировки
      default:
        // сортировка по умолчанию (как было изначально)
        break;
    }
    // В методе, где создается таблица, добавьте обработчик клика на заголовок
    const difHeader = this.elements.athAtlTable.querySelector("th:last-child");
    let sortDirection = "desc";

    difHeader.addEventListener("click", () => {
      sortDirection = sortDirection === "desc" ? "asc" : "desc";
      this.updateAthAtlTable(
        marketData,
        `difValue${sortDirection === "asc" ? "Asc" : "Desc"}`
      );
    });
    // Отрисовываем отсортированные данные
    sortedData.forEach(
      ({ asset, holdings, athValue, atlValue, currentValue, difValue, potentialX }) => {
        totalAtlValue += atlValue;
        totalAthValue += athValue;
        totalCurrentValue += currentValue;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="images/${asset.symbol.toLowerCase()}.png" alt="${
          asset.name
        }" width="20" height="20"
                     onerror="this.src='https://totalcoin.io/uploads/coins/big/eth.png'">
                ${asset.name} (${asset.symbol})
            </td>
            <td>${this.formatNumber(holdings.amount, 8)}</td>
            <td>$${this.formatNumber(holdings.atl, 6)}</td>
            <td>$${this.formatNumber(atlValue, 2)}</td>
            <td>$${this.formatNumber(holdings.ath, 6)}</td>
            <td>$${this.formatNumber(athValue, 2)}</td>
            <td>$${this.formatNumber(currentValue, 2)}</td>
            <td >X${this.formatNumber(potentialX, 5)}</td>
            <td >${this.formatNumber(difValue, 2)}%</td>
        `;
        tableBody.appendChild(row);
      }
    );

    // Добавляем итоговую строку
    const totalRow = document.createElement("tr");
    totalRow.className = "total-row";
    totalRow.innerHTML = `
        <td><strong>Total Portfolio</strong></td>
        <td></td>
        <td></td>
        <td><strong>$${this.formatNumber(totalAtlValue, 2)}</strong></td>
        <td></td>
        <td><strong>$${this.formatNumber(totalAthValue, 2)}</strong></td>
        <td><strong>$${this.formatNumber(totalCurrentValue, 2)}</strong></td>
        <td></td>
    `;
    tableBody.appendChild(totalRow);
  }

  exportToFile() {
    try {
      const data = JSON.stringify(this.portfolio, null, 2);
      const blob = new Blob([data], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "crypto_portfolio.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert(`Error exporting to file: ${error.message}`);
    }
  }

  importFromFile() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt,.json";

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data && typeof data === "object") {
            this.portfolio = data;
            this.savePortfolio();
            this.updateData();
            alert("Portfolio data imported successfully!");
          } else {
            alert("Invalid data format in the file");
          }
        } catch (error) {
          alert(`Error parsing file: ${error.message}`);
        }
      };
      reader.onerror = () => {
        alert("Error reading file");
      };
      reader.readAsText(file);
    };

    fileInput.click();
  }

  showImportUI() {
    this.elements.exportImportSection.style.display = "block";
  }

  hideImportUI() {
    this.elements.exportImportSection.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CryptoTracker();
});
