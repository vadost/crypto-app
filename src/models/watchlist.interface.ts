export interface Watchlist {
  "total_usd": number,
  "change_usd_24h": string,
  "percent_change_usd_24h": string,
  "total_btc": number,
  "change_btc_24h": string,
  "percent_change_btc_24h": string,
  "isHasAlert": boolean,
  "tickers": Ticket[]
}

export interface Ticket {
  "name": string,
  "code": string,
  "holdings": number,
  "rank": number,
  "price_btc": number,
  "change_btc_24h": string,
  "percent_change_btc_24h": string,
  "price_usd": number,
  "change_usd_24h": string,
  "percent_change_usd_24h": string,
}
