function formatMoney(money: number): string {
	return parseFloat(String(money)).toFixed(2)
}

export default formatMoney
